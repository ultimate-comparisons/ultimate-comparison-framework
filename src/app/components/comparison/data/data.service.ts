import { ChangeDetectorRef, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as Showdown from "showdown";
import { Data, Label, Markdown, Rating, Text, Tooltip, Url } from "./data";
import { Configuration, Criteria, CriteriaType, CriteriaValue } from "../configuration/configuration";
import { ConfigurationService } from "../configuration/configuration.service";
import { isNullOrUndefined } from "util";
import { UCDataUpdateAction } from '../../../redux/uc.action';
import { Store } from '@ngrx/store';
import { IUCAppState } from '../../../redux/uc.app-state';

@Injectable()
export class DataService {
    public static data: Array<Data> = [];

    public converter: Showdown.Converter;

    constructor(private http: HttpClient,
                private store: Store<IUCAppState>) {
        this.converter = new Showdown.Converter();
    }

    public setSubscriber(configurationService: ConfigurationService) {
        configurationService.initializeData.subscribe(this.loadData)
    }

    private loadData(value: { configuration: Configuration; dataService: DataService, cd: ChangeDetectorRef; }) {
        const configuration = value.configuration;
        const dataService = value.dataService;
        const cd = value.cd;
        dataService.http.get('data.json')
            .subscribe(res => {
                const dataArrayObject: Array<any> = <Array<any>>res || [];
                const data: Array<Data> = [];

                dataArrayObject.forEach(dataObject => {
                    // Split markdown first level header (e.g. Default 1 - www.example.com) into 'name' and 'url'
                    const regArray =
                        /^((?:(?:\w+\s*)(?:-?\s*\w+.)*)+)\s*-?\s*((?:(?:http|ftp|https)(?::\/\/)(?:[\w_-]+(?:(?:\.[\w_-]+)+))|(?:www.))(?:[\w.,@?^=%&:\/~+#-]*[\w@?^=%&\/~+#-])?)$/gi
                            .exec(dataObject.tag);
                    const name: string = ((regArray && regArray.length > 1) ? regArray[1] : dataObject.tag || "").trim();
                    let url: string = ((regArray && regArray.length > 2) ? regArray[2] : dataObject.tag || "").trim();
                    if (/^(www)/.test(url)) {
                        url = 'http://'.concat(url);
                    }

                    let averageRating = 0;

                    // Iterate over second level header and automatically generated ('tag' and 'description')
                    const criteria: Map<string, Map<string, Label> | Text | Url | Markdown | Array<Rating>> =
                        new Map<string, Map<string, Label> | Text | Markdown | Array<Rating>>();
                    configuration.criteria.forEach((criteriaConfiguration, criteriaKey) => {
                        // tag is the name of first level header key in json => build column based on Configuration 'id'
                        if (criteriaKey === "id") {
                            const type: CriteriaType = criteriaConfiguration ? criteriaConfiguration.type : CriteriaType.url;
                                switch (type) {
                                    case CriteriaType.text:
                                        criteria.set('id', new Text(name));
                                        break;
                                    case CriteriaType.markdown:
                                        criteria.set("id", new Markdown(name,
                                            ConfigurationService.getHtml(dataService.converter, configuration.citation, name),
                                            ConfigurationService.getLatex(dataService.converter, name))
                                        );
                                        break;
                                    case CriteriaType.label:
                                        const labels: Map<string, Label> = new Map<string, Label>();
                                        labels.set(name, new Label.Builder().setName(name).build());
                                        criteria.set('id', labels);
                                        break;
                                    case CriteriaType.url:
                                        criteria.set("id", new Url(name, url));
                                        break;
                                    default:
                                        return;
                                }
                                return;
                            }
                        // key is the name of first level header content key in json =>
                        // build column based on Configuration 'description'
                        if (criteriaKey === "description") {
                            const criteriaObject = dataObject["descr"] || "";
                                const critConf: Criteria = configuration.criteria.get("description");
                                const type: CriteriaType = critConf ? critConf.type : CriteriaType.url;
                                switch (type) {
                                    case CriteriaType.text:
                                        criteria.set('description', new Text(criteriaObject));
                                        break;
                                    case CriteriaType.markdown:
                                        criteria.set('description',
                                            new Markdown(criteriaObject,
                                                ConfigurationService
                                                    .getHtml(dataService.converter, configuration.citation, criteriaObject),
                                                ConfigurationService.getLatex(dataService.converter, criteriaObject))
                                        );
                                        break;
                                    case CriteriaType.label:
                                        const labels: Map<string, Label> = new Map<string, Label>();
                                        labels.set(criteriaObject, new Label.Builder().setName(criteriaObject).build());
                                        criteria.set('description', labels);
                                        break;
                                    case CriteriaType.url:
                                        criteria.set("description", new Url(criteriaObject, url));
                                        break;
                                    default:
                                        criteria.set("description", new Text(""));
                                }
                                return;
                            }

                        const criteriaObject = dataObject[criteriaKey] || {};

                        // Handle all other second level headers
                        const criteriaConf: Criteria = configuration.criteria.get(criteriaKey) || new Criteria.Builder().build();
                            const childs = criteriaObject.childs || {};
                        const childsArrayLvl1 = childs['0'] || [];
                            const childsArray = childsArrayLvl1.length > 0 ? childsArrayLvl1[0] : [];

                            switch (criteriaConf.type) {
                                case CriteriaType.text:
                                    criteria.set(criteriaKey, new Text(criteriaObject.plain));
                                    break;
                                case CriteriaType.markdown:
                                    criteria.set(criteriaKey,
                                        new Markdown(criteriaObject.plain,
                                            ConfigurationService.getHtml(dataService.converter, configuration.citation, criteriaObject.plain),
                                            ConfigurationService.getLatex(dataService.converter, criteriaObject.plain))
                                    );
                                    break;
                                case CriteriaType.url:
                                    criteria.set(criteriaObject.plain, new Url(criteriaObject.plain, criteriaObject.plain));
                                    break;
                                case CriteriaType.rating:
                                    const ratings: Array<Rating> = [];
                                    let sum = 0;

                                    if (typeof childsArray !== 'string') {
                                        childsArray.forEach(ratingObject => {
                                            const starsString: string = /\[(\d*)]/gm.exec(ratingObject.content)[1];
                                            const stars: number = parseInt(starsString, 10);
                                            sum += stars;
                                            const comment: string = /(?:\[\d*])((?:.|\n)*)/gm.exec(ratingObject.content)[1];
                                            ratings.push(new Rating(stars, comment));
                                        });
                                    }
                                    if (ratings.length !== 0) {
                                        averageRating = sum / ratings.length;
                                    }

                                    criteria.set(criteriaKey, ratings);
                                    break;
                                case CriteriaType.label:
                                    let labels: Map<string, Label> = new Map<string, Label>();

                                    if (typeof childsArray !== 'string') {
                                        childsArray.forEach(labelObject => {
                                            let criteriaValueConf: CriteriaValue;
                                            if (isNullOrUndefined(criteriaConf.values.get(labelObject.content))) {
                                                console.error("Could not resolve CriteriaValue with name '"
                                                    .concat(labelObject.content, "'"));
                                                criteriaValueConf = new CriteriaValue.Builder().build();
                                            } else {
                                                criteriaValueConf = criteriaConf.values.get(labelObject.content);
                                            }
                                            let tooltipArray = isNullOrUndefined(labelObject.childs) ? [] : labelObject.childs;
                                            let htmlTooltip = "";
                                            let latexTooltip = "";
                                            if (tooltipArray.length == 1) {
                                                htmlTooltip = labelObject.plainChilds.replace(/^[\s]{3}/gm, '').replace(/^[\s]{3}/gm, '').trim();
                                                if (htmlTooltip.startsWith('-') || htmlTooltip.startsWith('*')) {
                                                    htmlTooltip = htmlTooltip.substring(1).trim();
                                                }
                                                latexTooltip = htmlTooltip.trim();
                                                if (latexTooltip.startsWith('-') || latexTooltip.startsWith('*')) {
                                                    latexTooltip = latexTooltip.substring(1).trim();
                                                }
                                            } else {
                                                htmlTooltip = labelObject.plainChilds.replace(/^[\s]{3}/gm, '');
                                                if (htmlTooltip) {
                                                    latexTooltip = htmlTooltip.replace(/[\s]{2}/gm, ' ');
                                                    latexTooltip = latexTooltip.replace(/[\s]/gm, ' ');
                                                }
                                            }
                                            htmlTooltip = ConfigurationService.getHtml(
                                                dataService.converter,
                                                configuration.citation,
                                                htmlTooltip
                                            );
                                            latexTooltip = (latexTooltip.replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
                                                return '\\cite{' + dec + '}';
                                            }) || "").trim();
                                            const tooltip: Tooltip = new Tooltip(criteriaValueConf.description, htmlTooltip, latexTooltip);

                                            labels.set(labelObject.content, new Label.Builder()
                                                .setName(labelObject.content)
                                                .setTooltip(tooltip)
                                                .setClazz(criteriaValueConf.clazz)
                                                .setColor(criteriaValueConf.color)
                                                .setBackgroundColor(criteriaValueConf.backgroundColor)
                                                .build());
                                        });
                                    }

                                    criteria.set(criteriaKey, labels);
                                    break;
                                default:
                                    console.error("Could not resolve second level header CriteriaType: '".concat(criteriaKey, "'!"));
                            }

                        }
                    );

                    data.push(new Data.Builder().setName(name)
                        .setUrl(url)
                        .setCriteria(criteria)
                        .setAverageRating(averageRating)
                        .build());

                });

                DataService.data = data;
                dataService.store.dispatch(new UCDataUpdateAction(configuration.criteria));
                dataService.store.dispatch({
                    type: 'UPDATE_SETTINGS',
                    enable: configuration.details.body.tooltipAsText,
                    operation: 'DetailsDisplayTooltips'
                });
                cd.markForCheck();
            });
    }
}
