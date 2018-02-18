<a href="https://github.com/ultimate-comparisons/ultimate-comparison-BASE"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"></a>

[![Build Status](https://travis-ci.org/ultimate-comparisons/ultimate-comparison-BASE.svg?branch=master)](https://travis-ci.org/ultimate-comparisons/ultimate-comparison-BASE)
[![Issue Count](https://codeclimate.com/github/ultimate-comparisons/ultimate-comparison-BASE/badges/issue_count.svg)](https://codeclimate.com/github/ultimate-comparisons/ultimate-comparison-BASE)
[![Code Triagers Badge](https://www.codetriage.com/ultimate-comparisons/ultimate-comparison-base/badges/users.svg)](https://www.codetriage.com/ultimate-comparisons/ultimate-comparison-base)

This is an ultimate comparison framework written in [Angular](https://angular.io/).

## Create your own ultimate comparison 
1. Create a new repository on GitHub. In the following called "ultimate-THING-comparison" and located at https://github.com/example.com/ultimate-THING-comparison, replace `THING` by your comparison (e.g., `web-framework`).
2. Create local repository (in a git bash, Windows shell does not work)

        mkdir ultimate-THING-comparison
        cd ultimate-THING-comparison
        git init
        git fetch --depth=1 -n https://github.com/ultimate-comparisons/ultimate-comparison-BASE.git
        git reset --hard $(git commit-tree FETCH_HEAD^{tree} -m "initial commit")

3. Create push to your GitHub repository
        
        git remote add origin git@github.com:example.com/ultimate-THING-comparison.git
        git push -u origin master
        
### Setup comparison
1. The initial installation should be done via the `master` branch and updates should be pulled from the `update` branch.
This is the save route because the `update` branch does not include configuration files.
2. The file `comparison-configuration/comparison.json` defines the main properties of the comparison and the details dialog.
  
  ![comparison.json](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/master/media/comparison.svg)
  
  In the details dialog the values of the keys `header-label`, `body`, and `body-attachment-tags` matches level 2 headers in the comparison-elements files. The type of the `body-attachment-tags` must be labels and `body` will be parsed as markdown formated text. 
3. The file `comparison-configuration/table.json` defines the table columns. 
  - `tag:` References a level 2 header of the comparison elements (`Performance`, `Description`, `License`, `Showcase`) or the level 1 header and its content (`tag`, `url`, `descr`).
  - `display:` Allows the user to hide a colum by default. It is possible to dynamically hide or display column by clicking on the configuration button and toggle the columns on/off.
  - `name:` Allows the user to change the display name (default display name is defined by `tag`).
  - `order`: Sorts the column ascending or descending, allowed values: `asc`, `desc`
  - `type:` Style of the content.
  - `type.tag:` Either a label, a text, or a url. 
  - `type.class:` Set a label class (e. g. `label label-info`). Will be ignored if value class is set.
  - `type.values:`
  ```json
  {
    "name": "slow",
    "description": "Overall performance above 200ms",
    "class": "label-danger",
    "color": "red",
    "foreground": "black",
    "weight": 2
  }
  ```
  - The label with the value "slow" has the tooltip "overall performance above 200ms", and will be red ("label-danger")
  - You can choose between a specific color and class, classes are the preferred way. If both are missing, an automatic color is assigned.
  - You can choose a specific foreground color if you chose a specific background color.
  - The `weight` allows sorting of attributes, if multiple values are allowed. Ascending and descending is set by the `order` attribute in the column. Without weight, the name is used for sorting.
  - `repo`: Signals that the column is dependent on a read repository (up to now only GitHub ones).

  ![table.json](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/master/media/table.svg) 
4. The file `comparison-configuration/criteria.json` defines filter criterias for the table data.
  - `tag:` References a level 2 header of the comparison elements (`Performance`, `Description`, `License`, `Showcase`)
  - `name:` Display name (replaces `tag`).
  - `placeholder:` Placeholder for the select box.
  - `values:` Filter values.
  - `and_search:` Defines if all filter value must match or at least one.
  - `number_search`: Allow range searches. Ignores given values.

  ![criteria.json](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/master/media/criteria.svg)       
        

### Define comparison elements
For each thing, create a markdown file in `comparison-elements`.
You can base it on `template.md`.
If one column depends on a repository (`repo`-attribute in table.json true), you have to define a section (`## section title`) and add the repository as first list item, eg:

```markdown
## Repo
- https://github.com/ultimate-comparisons/ultimate-comparison-BASE
```

### Get notified for future framework updates
If you have two possibilities to get notified for future updates:
1. Tell us that you want to transfer ownership to us. We will keep the framework up-to-date.
2. Add your repository to our list in the file `repos-to-update.list` (via PR) and give write access to the user `ultimate-comparison-genie`. You'll get a PR every time the master branch is updated.
   The format for `repos-to-update.list` is `<your username>/<your repo name>`, eg. `ultimate-comparisons/ultimate-comparison-BASE`.

## Test it
1. Install [node.js](https://nodejs.org/en/)
  - Windows: `choco install nodejs` via [chocolatey](https://chocolatey.org/)
2. Windows: Install required tooling:
  - In an adminstrative shell: `npm install --global --production windows-build-tools` [source](https://github.com/nodejs/node-gyp#option-1)
3. Install [Java JDK8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
  - Windows: `choco install jdk8`
5. Install [pandoc](http://pandoc.org/installing.html) (Version 1.17.2) [pandoc-citeproc](https://hackage.haskell.org/package/pandoc-citeproc)
   - Linux:
     1. `wget https://github.com/jgm/pandoc/releases/download/1.17.2/pandoc-1.17.2-1-amd64.deb`
     2. `sudo dpkg -i pandoc-1.17.2-1-amd64.deb`
   - Windows: `choco install pandoc`
6. Update npm (sudo): `npm install -g npm`
7. Test dependencies:

        java -version
        npm -version

8. `npm install`
9. `npm start` (starts the web page)
10. [Setup automatic deployment of `www` directory using Travis CI](docs/Travis_Build_Deploy.md)

## Update your comparison

See [docs/Update_YOUR_Comparison.md](docs/Update_YOUR_Comparison.md)

## License

The code is licensed under [MIT], the content (located at `comparison-elements`) under [CC0-1.0].

  [CC0-1.0]: https://creativecommons.org/publicdomain/zero/1.0/

<hr />

See [README-THING.template](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/blob/master/README-THING.template.md) for a README skeletton for your ultimate-THING-comparison.

  [MIT]: https://opensource.org/licenses/MIT
  [CC-BY-SA-4.0]: http://creativecommons.org/licenses/by-sa/4.0/
# Docs
- [Travis_Build_Deploy](docs/Travis_Build_Deploy.md)
- [Update_YOUR_Comparison.md](docs/Update_YOUR_Comparison.md)
- [ADR Index](docs/adr)

# PRs
- [rewrite](prs/rewrite)

# Current Master
- [Demo](https://ultimate-comparisons.github.io/ultimate-comparison-BASE/demo/)
