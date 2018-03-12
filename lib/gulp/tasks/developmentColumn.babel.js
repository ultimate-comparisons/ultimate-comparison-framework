import {readFileSync, writeFileSync} from "fs";
import moment from "moment/moment";
import yaml2json from "js-yaml";

const downloadMap = {};

export function developmentColumn(files, done) {
    const config = yaml2json.safeLoad(readFileSync(files.config, "utf8"));
    let crit = null;
    let critKey = null;

    let criteriaObject = config.criteria || [];
    criteriaObject.forEach(criteriaMap => Object.keys(criteriaMap).forEach(key => {
        const valueObject = criteriaMap[key] || {};
        const type = valueObject.type;
        if (type === 'repository') {
            crit = valueObject;
            critKey = key;
        }
    }));

    if (crit === null) {
        done();
        return;
    }
    crit.type = 'label';
    const allData = JSON.parse(readFileSync(files.dataJson));
    const queryDate = moment().format("YYYY-MM-DDTHH:mm:ss");

    const promises = [];
    const keys = [];
    const links = [];
    const dataArray = [];

    for (const data of allData) {
        let link = data[critKey].plain.trim();
        if (link.startsWith('-')) {
            link = link.substr(1).trim();
        }
        if (link.length !== 0) {
            promises.push(getCommit(link));
            keys.push(critKey);
            links.push(link);
            dataArray.push(data);
        }
    }

    Promise.all(promises).then(function AcceptHandler(results) {
        results.forEach((res, index) => {
                if (res instanceof Error) {
                    console.error(res);
                } else if (res.length > index) {
                    const labels = getLabels(res[0], crit, links[index], queryDate);
                    dataArray[index][keys[index]] = {
                        plain: labels.map(l => "- " + l.plain).join(''),
                        childs: {
                            0: [
                                labels
                            ]
                        }
                    };
                } else {
                    dataArray[index][keys[index]] = {};
                }
            }
        );
        writeFileSync(files.dataJson, JSON.stringify(allData), 'utf8');
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

function getLabels(commit, repository, link, queryDate) {
    const now = moment();
    const date = moment(commit.commit.author.date);
    const labels = [];
    for (const key of Object.keys(repository.values || [])) {
        const label = repository.values[key];
        const minDiff = now.diff(date, label.minAgeUnit);
        const maxDiff = now.diff(date, label.maxAgeUnit);
        if ((minDiff >= label.minAge || label.minAge === undefined || label.minAge === -1)
            && (maxDiff < label.maxAge || label.maxAge === undefined || label.maxAge === -1)) {
            labels.push({
                content: key,
                plain: key + '\n',
                plainChilds: "    - <" + link + ">"
                + "\n    - Last repository change: "
                + date.format("YYYY-MM-DDTHH:mm:ss")
                + "\n    - Last checked: " + queryDate,
                childs: []
            })
        }
    }
    return labels;
}
