import { readFileSync, writeFileSync } from "fs";
import moment from "moment/moment";
import yaml2json from "js-yaml";
import { Configuration, Criteria, CriteriaTypes, Data, isNullOrUndefined, Label, Tooltip } from "../model/model.module";

const downloadMap = {};

export function developmentColumn(files, done) {
    const configuration = Configuration.load(yaml2json.safeLoad(readFileSync(files.config, "utf8")));
    const autoConfiguration = Configuration.load(yaml2json.safeLoad(readFileSync(files.autoConfig, "utf8")));

    const criteriaArray = configuration.criteria.filter(criteria => criteria.type === CriteriaTypes.REPOSITORY);
    if (criteriaArray.length === 0) {
        done();
        return;
    }

    const criteria = criteriaArray[0];
    if (!autoConfiguration.containsCriteria(criteria.id)) {
        autoConfiguration.setCriteria(-1, new Criteria(criteria.id, CriteriaTypes.LABEL));
    } else {
        autoConfiguration.getCriteria(criteria.id).type = CriteriaTypes.LABEL;
    }

    const data = Data.loadJson(JSON.parse(readFileSync(files.dataJson)));
    const queryDate = moment().format("YYYY-MM-DDTHH:mm:ss");

    const promises = [];

    const links = [];
    const dataArray = [];

    // Collect for each data element the link and the data element
    data.dataElements.forEach(dataElement => {
        if (dataElement.criteriaData.has(criteria.id)) {
            const criteriaData = dataElement.criteriaData.get(criteria.id);
            const link = criteriaData.labels.size === 1 ?
                criteriaData.getFirstLabel().name :
                criteriaData.text.length > 0 ? criteriaData.text : "";
            if (link.length === 0) {
                return;
            }

            promises.push(getCommit(link));
            links.push(link);
            dataArray.push(dataElement);
        }
    });

    Promise.all(promises).then(function AcceptHandler(results) {
        results.forEach((res, index) => {
            const dataElement = dataArray[index];
                if (res instanceof Error) {
                    console.error(res);
                } else if (!isNullOrUndefined(res) && res.length > index) {
                    dataElement.criteriaData.get(criteria.id).labels = getLabels(res[0], criteria, links[index], queryDate);
                } else {
                    dataElement.criteriaData.get(criteria.id).labels = [];
                }
            }
        );
        writeFileSync(files.dataJson, JSON.stringify(data.json()), 'utf8');
        done();
    });
}


function getCommit(link) {
    const githubApi = 'https://api.github.com/repos/{owner}/{repo}/commits';
    link = link.toLowerCase();
    if (downloadMap.hasOwnProperty(link)) {
        return downloadMap[link];
    }

    if (link.indexOf('github.com') > -1) {
        const splits = link.split('/');
        const owner = splits[splits.length - 2];
        const repo = splits[splits.length - 1];
        const query = githubApi.replace("{owner}", owner).replace("{repo}", repo);
        downloadMap[link] = fetch(query).then(response => response.json()).catch((error) => {
            Promise.resolve(Error(error))
        });
        return downloadMap[link];
    }
    return Promise.resolve(Error('Not a github url'));
}

function getLabels(commit, criteria, link, queryDate) {
    const now = moment();
    const date = moment(commit.commit.author.date);
    const labels = new Map();

    criteria.values.forEach(criteriaValue => {
        const minDiff = now.diff(date, criteriaValue.minAgeUnit);
        const maxDiff = now.diff(date, criteriaValue.maxAgeUnit);
        if ((minDiff >= criteriaValue.minAge || criteriaValue.minAge === undefined || criteriaValue.minAge === -1)
            && (maxDiff < criteriaValue.maxAge || criteriaValue.maxAge === undefined || criteriaValue.maxAge === -1)) {
            labels.set(criteriaValue.name, new Label(criteriaValue.name, new Tooltip(criteriaValue.description, ""
                + "- <" + link + ">"
                + "\n- Last repository change: " + date.format("YYYY-MM-DDTHH:mm:ss")
                + "\n- Last checked: " + queryDate, ""
            )));
        }
    });
    return labels;
}
