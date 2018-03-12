<a href="https://github.com/ultimate-comparisons/ultimate-comparison-BASE"><img style="position: absolute; top: 0; left: 0; border: 0;" src="https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"></a>

[![Build Status](https://travis-ci.org/ultimate-comparisons/ultimate-comparison-BASE.svg?branch=master)](https://travis-ci.org/ultimate-comparisons/ultimate-comparison-BASE)
[![Issue Count](https://codeclimate.com/github/ultimate-comparisons/ultimate-comparison-BASE/badges/issue_count.svg)](https://codeclimate.com/github/ultimate-comparisons/ultimate-comparison-BASE)
[![Code Triagers Badge](https://www.codetriage.com/ultimate-comparisons/ultimate-comparison-base/badges/users.svg)](https://www.codetriage.com/ultimate-comparisons/ultimate-comparison-base)
[![dependencies Status](https://david-dm.org/ultimate-comparisons/ultimate-comparison-BASE/status.svg)](https://david-dm.org/ultimate-comparisons/ultimate-comparison-BASE)

This is an ultimate comparison framework written in [Angular](https://angular.io/).
It is released on [npm](https://www.npmjs.com/package/ultimate-comparison) under **ultimate-comparison**.

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

# Current Master
- [Demo](https://ultimate-comparisons.github.io/ultimate-comparison-BASE/demo/)
