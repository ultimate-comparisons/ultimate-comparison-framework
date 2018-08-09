import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { Citation, Configuration, Criteria, CriteriaTypes, CriteriaValue, Data } from '../../../../../lib/gulp/model/model.module';

import * as Showdown from 'showdown';
import { isNullOrUndefined } from 'util';
import { Store } from '@ngrx/store';
import { IUCAppState } from '../../../redux/uc.app-state';
import { UCDataUpdateAction } from '../../../redux/uc.action';

@Injectable()
export class ConfigurationService {
    public static data: Data = new Data([]);
    public static converter: Showdown.Converter;
    public description = '';
    public criteria: Array<Criteria> = [];
    public configuration: Configuration = Configuration.empty();
    public citation: Map<string, Citation> = new Map();

    public tableColumns: Array<string> = [];
    public criteriaValues: Array<Array<{ id: string, text: string, criteriaValue: CriteriaValue }>>;

    constructor(public title: Title,
                private http: HttpClient,
                private store: Store<IUCAppState>) {
        ConfigurationService.converter = new Showdown.Converter();
    }

    static getHtml(converter: Showdown.Converter, citation: Map<string, Citation>, markdown: string): string {
        if (isNullOrUndefined(markdown)) return null;
        return ConfigurationService.converter.makeHtml(markdown.toString()).replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
            if (citation.has(dec)) {
                return '<a class="cite-link" href="#' + dec + '">[' + citation.get(dec).index + ']</a>';
            } else {
                return '<a class="cite-link">[Missing Reference for "' + match + '"]</a>';
            }
        });
    }

    static getLatex(converter: Showdown.Converter, text: string): string {
        if (isNullOrUndefined(text)) {
            return null;
        }
        return ConfigurationService.converter.makeHtml(text.toString()).replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
            return '\\cite{' + dec + '}';
        });
    }

    public loadComparison(cd: ChangeDetectorRef) {
        Promise.all(
            [
                this.http.get('comparison.json'),
                this.http.get('data.json'),
                this.http.get('description.md', {responseType: 'text'})
            ].map(res => res.toPromise())
        ).then((result) => {
            // Set configuration model
            this.configuration = Configuration.load(result[0]);
            this.criteria = this.configuration.criteria.filter(criteria => criteria.search);
            this.criteriaValues = this.criteria.map(criteria =>
                Array.from(criteria.values).map(([key, value]) => {
                    return {
                        id: value.name,
                        text: value.name,
                        criteriaValue: value
                    };
                })
            );
            this.citation = this.configuration.citation.reduce((map, obj) => {
                map.set(obj.key, obj);
                return map;
            }, new Map());

            // Set data model
            ConfigurationService.data = Data.loadJson(result[1], this.configuration);
            ConfigurationService.data.dataElements = ConfigurationService.data.dataElements.map(dataElement => {
                    // Build html strings and labelArrays
                    dataElement.html = ConfigurationService.getHtml(
                        ConfigurationService.converter, this.citation, dataElement.description
                    );
                    dataElement.latex = ConfigurationService.getLatex(
                        ConfigurationService.converter, dataElement.description
                    );
                    dataElement.criteriaData = Array.from(dataElement.criteriaData).map(([key, criteriaData]) => {
                        switch (criteriaData.type) {
                            case CriteriaTypes.MARKDOWN:
                            case CriteriaTypes.RATING:
                                criteriaData.html = ConfigurationService.getHtml(
                                    ConfigurationService.converter,
                                    this.citation,
                                    criteriaData.text
                                );
                                criteriaData.latex = ConfigurationService.getLatex(
                                    ConfigurationService.converter,
                                    criteriaData.text
                                );
                                break;
                            case CriteriaTypes.LABEL:
                            case CriteriaTypes.REPOSITORY:
                                criteriaData.labels.forEach(label => label.tooltip.html = ConfigurationService.getHtml(
                                    ConfigurationService.converter,
                                    this.citation,
                                    label.tooltip.plain
                                ));
                                criteriaData.labelArray = Array.from(criteriaData.labels).map(([key, value]) => value);
                                break;
                        }
                        return criteriaData;
                    }).reduce((map, obj) => {
                        map.set(obj.name, obj);
                        return map;
                    }, new Map());
                    return dataElement;
                }
            );

            // Set description
            this.description = ConfigurationService.getHtml(
                ConfigurationService.converter,
                this.citation,
                String(result[2]));

            // Dispatch redux store action
            this.store.dispatch(
                new UCDataUpdateAction(
                    this.configuration.criteria.reduce((map, obj) => {
                            map.set(obj.id, obj);
                            return map;
                        },
                        new Map())
                )
            );
            this.store.dispatch(
                {
                    type: 'UPDATE_SETTINGS',
                    enable: this.configuration.details.tooltipAsText,
                    operation: 'DetailsDisplayTooltips'
                }
            );

            cd.detectChanges();
        });
    }
}
