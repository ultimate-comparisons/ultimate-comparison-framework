import { ChangeDetectorRef, EventEmitter, Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import * as yaml from 'js-yaml';
import {
    Body, Citation, Configuration, Criteria, CriteriaValue, Details, getCriteriaType,
    Header
} from "./configuration";
import * as Showdown from "showdown";
import { DataService } from "../data/data.service";
import { isNullOrUndefined } from "util";

@Injectable()
export class ConfigurationService {
    public configuration: Configuration = new Configuration.Builder().build();
    public description = '';
    public criteria: Array<Criteria> = [];
    // TODO move to redux
    public tableColumns: Array<string> = [];
    public initializeData: EventEmitter<any> = new EventEmitter();
    private converter: Showdown.Converter;

    constructor(public title: Title,
                private http: HttpClient,
                private dataService: DataService) {
        this.converter = new Showdown.Converter();
        this.dataService.setSubscriber(this);
    }

    static getHtml(converter: Showdown.Converter, citation: Map<string, Citation>, markdown: string): string {
        if (isNullOrUndefined(markdown)) return null;
        return converter.makeHtml(markdown.toString()).replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
            return '<a class="cite-link" href="#' + dec + '">[' + citation.get(dec).index + ']</a>';
        });
    }

    static getLatex(converter: Showdown.Converter, text: string): string {
        return converter.makeHtml(text).replace(/(?:\[@)([^\]]*)(?:\])/g, (match, dec) => {
            return '\\cite{' + dec + '}';
        });
    }


    public loadComparison(cd: ChangeDetectorRef) {
        this.http.get('comparison.yml', {responseType: 'text'})
            .subscribe(res => {
                const comparisonObject: any = yaml.safeLoad(res) || {};
                const detailsObject: any = comparisonObject.details || {};
                const headerObject: any = detailsObject.header || {};
                const bodyObject: any = detailsObject.body || {};
                const criteriaArray = comparisonObject.criteria || [];
                const citationObject = comparisonObject.autoCitation || {};
                const autoCriteria = comparisonObject.autoCriteria || {};
                const autoColor = comparisonObject.autoColor || {};

                const detailsHeader: Header = new Header.Builder()
                    .setNameRef(headerObject.nameRef)
                    .setLabelRef(headerObject.labelRef)
                    .setUrlRef(headerObject.urlRef)
                    .build();

                const detailsBody: Body = new Body.Builder()
                    .setTitle(bodyObject.title)
                    .setBodyRef(bodyObject.bodyRef)
                    .setTooltipAsText(bodyObject.tooltipAsText)
                    .build();

                const details: Details = new Details.Builder()
                    .setHeader(detailsHeader)
                    .setBody(detailsBody)
                    .build();

                const citation: Map<string, Citation> = new Map<string, Citation>();
                Object.keys(citationObject).forEach(
                    citationKey => {
                        const value = citationObject[citationKey];
                        citation.set(citationKey, new Citation.Builder()
                            .setIndex(value.index)
                            .setKey(citationKey)
                            .setText(value.value)
                            .build()
                        )
                    }
                );

                const criteria: Map<string, Criteria> = new Map<string, Criteria>();
                criteriaArray.forEach((obj) => Object.keys(obj).forEach((key) => {
                    const value = obj[key];
                    if (isNullOrUndefined(value)) {
                        criteria.set(key, new Criteria.Builder().build());
                        return;
                    }

                    const autoColorCriteria = isNullOrUndefined(autoColor[key]) ? {} : autoColor[key];
                    const valuesObject = isNullOrUndefined(value.values) ? {} : value.values;

                    const values: Map<string, CriteriaValue> = new Map<string, CriteriaValue>();
                    Object.keys(valuesObject).forEach(objKey => {
                        const value = valuesObject[objKey];
                        const autoColorValue = isNullOrUndefined(autoColorCriteria[objKey]) ? {} : autoColorCriteria[objKey];

                        // Value defined as 'key': null
                        if (isNullOrUndefined(value)) {
                            values.set(objKey, new CriteriaValue.Builder()
                                .setCriteria(key)
                                .setName(objKey)
                                .setColor(autoColorValue.color)
                                .setBackgroundColor(autoColorValue.backgroundColor)
                                .build());
                            return;
                        }

                        values.set(objKey, new CriteriaValue.Builder()
                            .setCriteria(key)
                            .setName(objKey)
                            .setDescription(ConfigurationService.getHtml(this.converter, citation, value.description))
                            .setClazz(value.class)
                            .setColor(isNullOrUndefined(value.color) ? autoColorValue.color : value.color)
                            .setBackgroundColor(isNullOrUndefined(value.backgroundColor) ? autoColorValue.backgroundColor : value.backgroundColor)
                            .setWeight(value.weight)
                            .setMinAge(value.minAge)
                            .setMaxAge(value.maxAge)
                            .setMinAgeUnit(value.minAgeUnit)
                            .setMaxAgeUnit(value.maxAgeUnit)
                            .build()
                        );
                    });

                    criteria.set(key, new Criteria.Builder()
                        .setName(value.name || key)
                        .setSearch(value.search)
                        .setTable(value.table)
                        .setDetail(value.detail)
                        .setType(getCriteriaType(value.type))
                        .setDescription(value.description)
                        .setPlaceholder(value.placeholder)
                        .setAndSearch(value.andSearch)
                        .setRangeSearch(value.rangeSearch)
                        .setValues(values)
                        .build()
                    );
                }));

                Object.keys(autoCriteria).forEach((key) => {
                    const autoCriteriaObject = autoCriteria[key];
                    const valuesObject = autoCriteriaObject.values || {};
                    const autoColorCriteria = isNullOrUndefined(autoColor[key]) ? {} : autoColor[key];

                    // If autoCriteria is already defined
                    if (criteria.get(key)) {
                        let old: Criteria = criteria.get(key);
                        let values: Map<string, CriteriaValue> = old.values;
                        Object.keys(valuesObject).forEach(valueKey => {
                            const oldValue: CriteriaValue = old.values.get(valueKey);
                            const autoColorValue = isNullOrUndefined(autoColorCriteria[valueKey]) ? {} : autoColorCriteria[valueKey];
                            const value = valuesObject[valueKey];
                            if (!isNullOrUndefined(oldValue)) {
                                values.set(valueKey, old.values.get(valueKey));
                            } else if (isNullOrUndefined(value)) {
                                values.set(valueKey, new CriteriaValue.Builder()
                                    .setCriteria(key)
                                    .setName(valueKey)
                                    .setColor(autoColorValue.color)
                                    .setBackgroundColor(autoColorValue.backgroundColor)
                                    .build());
                            } else if (!isNullOrUndefined(value)) {
                                values.set(valueKey, new CriteriaValue.Builder()
                                    .setCriteria(key)
                                    .setName(valueKey)
                                    .setDescription(ConfigurationService.getHtml(this.converter, citation, value.description))
                                    .setClazz(value.class)
                                    .setWeight(value.weight)
                                    .setMinAge(value.minAge)
                                    .setMaxAge(value.maxAge)
                                    .setColor(isNullOrUndefined(value.color) ? autoColorValue.color : value.color)
                                    .setBackgroundColor(isNullOrUndefined(value.backgroundColor) ? autoColorValue.backgroundColor : value.backgroundColor)
                                    .setMinAgeUnit(value.minAgeUnit)
                                    .setMaxAgeUnit(value.maxAgeUnit)
                                    .build());
                            }
                        });

                        criteria.set(key, new Criteria.Builder()
                            .setName(old.name)
                            .setSearch(old.search)
                            .setTable(old.table)
                            .setDetail(old.detail)
                            .setType(old.type)
                            .setDescription(old.description)
                            .setPlaceholder(old.placeholder)
                            .setAndSearch(old.andSearch)
                            .setRangeSearch(old.rangeSearch)
                            .setValues(values)
                            .build());
                    } else {
                        // if autoCriteria is not already defined
                        let values: Map<string, CriteriaValue> = new Map<string, CriteriaValue>();
                        Object.keys(valuesObject).forEach(valueKey => {
                            const value = valuesObject[valueKey];
                            const autoColorValue = isNullOrUndefined(autoColorCriteria[valueKey]) ? {} : autoColorCriteria[valueKey];
                            if (isNullOrUndefined(value)) {
                                values.set(valueKey, new CriteriaValue.Builder().setCriteria(key).setName(valueKey).build());
                            } else {
                                values.set(valueKey, new CriteriaValue.Builder()
                                    .setCriteria(key)
                                    .setName(valueKey)
                                    .setDescription(ConfigurationService.getHtml(this.converter, citation, value.description))
                                    .setClazz(value.class)
                                    .setWeight(value.weight)
                                    .setMinAge(value.minAge)
                                    .setMaxAge(value.maxAge)
                                    .setMinAgeUnit(value.minAgeUnit)
                                    .setMaxAgeUnit(value.maxAgeUnit)
                                    .setColor(autoColorValue.color)
                                    .setBackgroundColor(autoColorValue.backgroundColor)
                                    .build());
                            }
                        });

                        criteria.set(key, new Criteria.Builder()
                            .setName(isNullOrUndefined(autoCriteriaObject.name) ? key : autoCriteriaObject.name)
                            .setSearch(autoCriteriaObject.search)
                            .setTable(autoCriteriaObject.table)
                            .setDetail(autoCriteriaObject.detail)
                            .setType(getCriteriaType(autoCriteriaObject.type))
                            .setDescription(autoCriteriaObject.description)
                            .setPlaceholder(autoCriteriaObject.placeholder)
                            .setAndSearch(autoCriteriaObject.andSearch)
                            .setRangeSearch(autoCriteriaObject.rangeSearch)
                            .setValues(values)
                            .build());
                    }
                });

                this.configuration = new Configuration.Builder()
                    .setTitle(comparisonObject.title)
                    .setSubtitle(comparisonObject.subtitle)
                    .setSelectTitle(comparisonObject.selectTitle)
                    .setTableTitle(comparisonObject.tableTitle)
                    .setRepository(comparisonObject.repository)
                    .setDetails(details)
                    .setCriteria(criteria)
                    .setCitation(citation)
                    .build();

                this.initializeData.emit({configuration: this.configuration, dataService: this.dataService, cd: cd});

                this.title.setTitle(this.configuration.title);
                this.loadDescription(citation);

                criteria.forEach((value, key) => {
                    if (value.search) {
                        this.criteria.push(value);
                    }
                    if (value.table) {
                        this.tableColumns.push(key);
                    }
                });
                cd.markForCheck();
            });
    }

    public loadDescription(citation: Map<string, Citation>) {
        this.http.get('configuration/description.md', {responseType: 'text'})
            .subscribe(res => {
                this.description = ConfigurationService.getHtml(this.converter, citation, res);
            });
    }
}
