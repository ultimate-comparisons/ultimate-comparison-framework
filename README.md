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
1. `comparison-configuration/comparison.json`
    ![comparison.json](https://cdn.rawgit.com/ultimate-comparisons/ultimate-comparison-BASE/master/media/comparison.svg)
2. `comparison-configuration/table.json`
3. `comparison-configuration/criteria`

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
