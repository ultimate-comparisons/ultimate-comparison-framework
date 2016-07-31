# Ultimate Comparison BASE

[![Build Status](https://travis-ci.org/ultimate-comparisons/ultimate-comparison-BASE.svg?branch=master)](https://travis-ci.org/ultimate-comparisons/ultimate-comparison-BASE)

This is an ultimate comparison framework written in angular2.

## Create your own ultimate comparison 
1. Become member of the [ultimate-comparisons organization](https://github.com/ultimate-comparisons) ...
2. Create local repository:

        cd ultimate-...-comparison
        git init
        git fetch --depth=1 -n https://github.com/ultimate-comparisons/ultimate-comparison-BASE.git
        git reset --hard $(git commit-tree FETCH_HEAD^{tree} -m "initial commit")

3. Create new git repository
        
        git remote add origin https://github.com/ultimate-comparisons/ultimate-...-comparison.git
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
                {
                    "name": "slow",
                    "description": "Overall performance above 200ms",
                    "class": "label-danger"
                }
          The label with the value "slow" has the tooltip "overall performance above 200ms", and will be red ("label-danger")
![comparison.json](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/master/media/table.svg)        
3. The file `comparison-configuration/criteria.json` defines filter criterias for the table data.
        - `tag:` References a level 2 header of the comparison elements (`Performance`, `Description`, `License`, `Showcase`)
        - `name:` Display name (replaces `tag`).
        - `placeholder:` Placeholder for the select box.
        - `values:` Filter values.
        - `and_search:` Defines if all filter value must match or at least one.
![comparison.json](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/master/media/criteria.svg)       
        

### Define comparison elements
`comparison-elements/default.md`:

        # Default ALL - http://default-0-entry.example.com
        Default short description
        
"tag": "Default ALL",
"url": "http://default-0-entry.example.com",
"descr": "Default short description",

        ## Description
        Default long description in __markdown__.

"Description": {...}

        ## Performance
        - slow
        - fast
        
"Performance": {...}

        ## License
        - MIT
        - Apache 2.0
        - MPL 2.0
        
"License": {...}

        ## Showcase 2.0
        - red 1
        - red 2
        - green
            - green property
                1. Nous sommes __markdown__
            - green property
            - third green property
        - yellow
            - yellow property
        - dark blue
        - grey
        - light blue
        
"Showcase 2.0": {...}

## Test it
1. Install node.js
2. Intall java + gradle
3. Update npm (sudo): `npm install -g npm`
4. Test dependencies:

        java -version
        gradle -version
        npm -version

4. `npm install`
5. `npm start` (starts the web page)
6. Deploy `www` directory

## License

The code and all content is licensed under [Apache 2.0]

  [Apache 2.0]: http://www.apache.org/licenses/LICENSE-2.0
