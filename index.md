<a href="https://github.com/ultimate-comparisons/ultimate-comparison-BASE" class="github-corner" aria-label="View source on Github"><svg width="80" height="80" viewBox="0 0 250 250" style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true"><path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path><path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path><path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" class="octo-body"></path></svg></a><style>.github-corner:hover .octo-arm{animation:octocat-wave 560ms ease-in-out}@keyframes octocat-wave{0%,100%{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{animation:none}.github-corner .octo-arm{animation:octocat-wave 560ms ease-in-out}}</style>

This is an ultimate comparison framework written in [Angular](https://angular.io/).
It is released on [npm](https://www.npmjs.com/package/ultimate-comparison) under **ultimate-comparison**.

[![Build Status](https://travis-ci.org/ultimate-comparisons/ultimate-comparison-BASE.svg?branch=master)](https://travis-ci.org/ultimate-comparisons/ultimate-comparison-BASE)
[![Issue Count](https://codeclimate.com/github/ultimate-comparisons/ultimate-comparison-BASE/badges/issue_count.svg)](https://codeclimate.com/github/ultimate-comparisons/ultimate-comparison-BASE)
[![Code Triagers Badge](https://www.codetriage.com/ultimate-comparisons/ultimate-comparison-base/badges/users.svg)](https://www.codetriage.com/ultimate-comparisons/ultimate-comparison-base)
[![dependencies Status](https://david-dm.org/ultimate-comparisons/ultimate-comparison-BASE/status.svg)](https://david-dm.org/ultimate-comparisons/ultimate-comparison-BASE)

## Create your own ultimate comparison
1. Install the **ultimate-comparison**-package globally on your system via `npm install --global ultimate-comparison`
2. Create the directory which should contain the comparison and change into it, e. g. with `mkdir MY_COMPARISON && cd MY_COMPARISON`
3. Set up your comparison with `uc setup`
    1. Enter the name of your comparison press enter
    2. Enter the [semantic version](https://semver.org/) of your comparison and press enter
    3. Enter a short description of your comparison and press enter (not required)
4. Make sure a `node_modules` directory exists in your current one.
    - If it doesn't exist look at the error message and run `npm install` afterwards
    - The error is most likely a malformed name or version of your comparison
5. Run `uc start` to start the comparison.

### Configuration

The configuration files are located in the **configuration** directory.

**description.md**: It contains the description of your comparison which can be seen by visitors.
It is located underneath the headline of your comparison.
![Description location on page](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/85cc1e93/docs/images/descritpion.png)

**comparison-example.yml**: Example configuration file containing comments on fields to explain their meaning.

**comparison-default.yml**: Default configuration, intended as backup of your local comparison.

**comparison.yml**: The used configuration. Missing values are taken from **comparison-default.yml** and written back into this file.
A **comparison.yml** has following attributes:

- *title*: The title of the comparison. It is the headline of the page.
  ![Title location on page](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/85cc1e93/docs/images/title.png)
- *subtitle*: The subtitle of the comparison. It is next to the headline of the page.
  ![Subtitle location on page](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/85cc1e93/docs/images/subtitle.png)
- *selectTitle*: It is the headline for the search criteria, meaning that the area meant to enter search parameters uses this as headline.
- *tableTitle*: It is the headline for the table, meaning that the area containing the table uses this as headline.
  ![Title of the table on page](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/85cc1e93/docs/images/tabletitle.png)
- *repository*: The link to the repository containing the comparison.
- *header*: The heading of the details page
    - *nameRef*: Heading of details page (field name) (1)
    - *labelRef*: Which label to add to the heading of the details page (field name) (2)
    - *urlRef*: Which url to show next to the heading of the details page (field name) (3)
  ![Details header construction](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/85cc1e93/docs/images/detailsheader.png)
- *body*: The body of the details page
    - *title*: The heading of the used field (1)
    - *bodyRef*: The field to use as content of the body (2)
  ![Details body construction](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/85cc1e93/docs/images/detailsbody.png)
- *citation*: Configures the citation of sources
    - *csl*: The style of the citation as [bibtex](http://www.bibtex.org/) class. Example classes: https://github.com/citation-style-language/styles
    - *bib*: The file containing the used sources in [bibtex](http://www.bibtex.org/) style
- *criteria*: List of fields that all comparison-elements use. The attributes for each criteria are:
    - *name*: The display name of the criteria. Type: `string` (1)
    - *search*: Whether a text box should be added to the search form. Allowed values: `true` (1), `false`
    - *table*: Whether it should be included in the comparison table by default. Allowed values: `true` (2), `false`
    - *detail*: Whether it is in the detail page. Allowed values: `true`, `false`
    - *type*: The content type of the field. Allowed values: `url`, `markdown`, `text`, `label`, `rating`, `repository`
    - *andSearch*: Whether the search should be **match all** (`true`) or **match one** (`false`). Allowed values: `true` (3), `false` (3)
    - *values*: All allowed values the field can assume. Values can have the following attributes:
        - *description*: Part of the tooltip for every instance of the value. Type: `string`
        - *class*: CSS-class of the label. Type: `string` (label-only)
        - *backgroundColor*: The background color of the label. Applies only if no class is given. Type: `string` (label-only)
        - *color*: The text color of the label. Applies only if no class is given. Type: `string` (label-only)
        - *minAge*: The minimum age of the last commit to apply this value. Type: `number` (repository-only)
        - *minAgeUnit*: The unit to apply to the minAge attribute. Allowed values: https://momentjs.com/docs/#/durations/as-iso-string/ (repository-only)
        - *maxAge*: The maximum age of the last commit to apply this value. Type: `number` (repository-only)
        - *maxAgeUnit*: The unit to apply to the maxAge attribute. Allowed values: https://momentjs.com/docs/#/durations/as-iso-string/ (repository-only)
    - *placeholder*: Text shown in the search bar if it is empty (4)
    - *rangeSearch*: Changes search to allow searching for number ranges. It allows searching for numbers and ranges of numbers. Only supports integers. (5)
    ![Various elements of criteria on the page](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/85cc1e93/docs/images/variouselements.png)

### Define comparison elements

For each thing, create a markdown file in comparison-elements.
You can base it on template.md.
If one column depends on a repository (repo-attribute in **comparison.yml** true), you have to define a `repo` section (## section title) and add the repository as first list item, eg:

    ## Repo
    - https://github.com/ultimate-comparisons/ultimate-comparison-BASE

## Update your comparison

To update the ultimate comparison framework that your comparison uses, just run `npm update` in the directory that contains your comparison.
It installs the latest version with the same major version number (ie. `2.x.x`).

## License

The code is licensed under [MIT], the content (located at `data`) under [CC0-1.0].

  [CC0-1.0]: https://creativecommons.org/publicdomain/zero/1.0/
  [MIT]: https://opensource.org/licenses/MIT
# Docs
- [ADR Index](docs/adr)

# PRs

# Current Master
- [Demo](https://ultimate-comparisons.github.io/ultimate-comparison-BASE/demo/)
