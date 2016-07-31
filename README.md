# Ultimate Comparison BASE

[![Build Status](https://travis-ci.org/ultimate-comparisons/ultimate-comparison-BASE.svg?branch=master)](https://travis-ci.org/ultimate-comparisons/ultimate-comparison-BASE)

This is an ultimate comparison framework written in angular2.

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
1. The file `comparison-configuration/comparison.json` defines the main properties of the comparison and the details dialog.
  
  ![comparison.json](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/master/media/comparison.svg)
  
  In the details dialog the values of the keys `header-label`, `body`, and `body-attachment-tags` matches level 2 headers in the comparison-elements files. The type of the `body-attachment-tags` must be labels and `body` will be parsed as markdown formated text. 
2. The file `comparison-configuration/table.json` defines the table columns. 
  - `tag:` References a level 2 header of the comparison elements (`Performance`, `Description`, `License`, `Showcase`) or the level 1 header and its content (`tag`, `url`, `descr`).
  - `display:` Allows the user to hide a colum by default. It is possible to dynamically hide or display column by clicking on the configuration button and toggle the columns on/off.
  - `name:` Allows the user to change the display name (default display name is defined by `tag`).
  - `type:` Style of the content. 
  - `type.tag:` Either a label or a text. 
  - `type.class:` A label must have at least a class (`label label-info`).
  - `type.values:`
  ```json
  {
    "name": "slow",
    "description": "Overall performance above 200ms",
    "class": "label-danger"
  }
  ```
  - The label with the value "slow" has the tooltip "overall performance above 200ms", and will be red ("label-danger")

  ![table.json](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/master/media/table.svg) 
3. The file `comparison-configuration/criteria.json` defines filter criterias for the table data.
  - `tag:` References a level 2 header of the comparison elements (`Performance`, `Description`, `License`, `Showcase`)
  - `name:` Display name (replaces `tag`).
  - `placeholder:` Placeholder for the select box.
  - `values:` Filter values.
  - `and_search:` Defines if all filter value must match or at least one.
  
  ![criteria.json](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/master/media/criteria.svg)       
        

### Define comparison elements
For each thing, create a markdown file in `comparison-elements`.
You can base it on `defaeult.md`.

## Test it
1. Install [node.js](https://nodejs.org/en/)
2. Intall [Java JDK8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
3. Update npm (sudo): `npm install -g npm`
4. Test dependencies:

        java -version
        npm -version

4. `npm install`
5. `npm start` (starts the web page)
6. [Setup automatic deployment of `www` directory using Travis CI](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/wiki/Build-and-deploy-project-with-Travis-CI)

## License

The code is licensed under [Apache 2.0], the content (located at `comparison-elements`) under [CC0-1.0].

  [CC0-1.0]: https://creativecommons.org/publicdomain/zero/1.0/

<hr />

Here follows a skeletton for a README.md for your ultimate-THING-comparison.






# Ultimate THING comparision

This a ultimate comparison of THINGs.

See [ultimate-comparisons.org](http://ultimate-comparisons.org) for a list of ulimate comparisons.

...describe THING and the intention of the comparison here...

## License

The code is licensed under [Apache 2.0], the content (located at `comparison-elements`) under [CC-BY-SA-4.0]

  [Apache 2.0]: http://www.apache.org/licenses/LICENSE-2.0
  [CC-BY-SA-4.0]: http://creativecommons.org/licenses/by-sa/4.0/
