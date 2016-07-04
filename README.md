# Ultimate Comparison BASE

[![Build Status](https://travis-ci.org/ultimate-comparisons/ultimate-comparison-BASE.svg?branch=master)](https://travis-ci.org/ultimate-comparisons/ultimate-comparison-BASE)

This is an ultimate comparison framework written in angular2.

## Usage
1. install node.js
2. intall java + gradle
3. update npm (sudo): `npm install -g npm`
4. test dependencies:

        java -version
        gradle -version
        npm -version

4. `npm install`
5. `npm start` (starts the web page)
5. alternatively open `www/index.html`
    - tested with firefox
    - problems with chrome (CORS)

## Example for Comparison.json
Defines properties for the webseite. The object `details` defines the interface of the detailed view for a single dataset.

    {
        "title": "Ultimate-Comparison",
        "subtitle": "Ultimate comparison framework",
        "selecttitle": "Criteria",
        "tabletitle": "Comparison of DOM manipulation libraries",
        "details": {
            "header": "tag",
            "header-label": "Performance",
            "header-url": "url",
            "body-main-title": "Description",
            "body": "Description",
            "body-attachment-tags": [
                "Performance",
                "License",
                "Showcase 2.0"
            ]
        }
    }
    
The tags `Performance, License, Showcase 2.0` and `Description` must match tags in the data specification!

## Example for Criteria.json
Criteria.json defines the selection fields. The tag `selectOption` specifies if it at least one (false) selected option or all (true) options must be true.

    [
        {
            "name": "Performance",
            "tag": "Performance",
            "description": "Performace of entry.",
            "placeholder": "Select performace rating ...",
            "and_search": true,
            "values": [
                {
                    "name": "slow",
                    "description": "I am slow!"
                },
                {
                    "name": "fast",
                    "description": "I am fast!"    
                }
            ]
        },
        {
            "name": "Licenses",
            "tag": "License",
            "description": "Popular licenses for DOM manipulation libraries.",
            "placeholder": "Select license ...",
            "and_search": false,
            "values": [
                {
                    "name": "MIT"
                },
                {
                    "name": "Apache 2.0"
                },
                {
                    "name": "MPL 2.0"
                }
            ]
        }
    ]

The tag `tag:...` must match a tag in the data specification.

## Example for Table.json
Defines the styling for each property. Available display types are `text` and `label`. For the `label` type it is possible to use a value dependend styling (Property 2: `ngClass`).

    [
        {
            "name": "Name",
            "tag":  "tag",
            "style": "width: 5%",
            "display": true,
            "type": {
                "tag":"text"
                },
            "valign": "top"    
        },
        {
            "name": "Short Description",
            "tag":  "descr",
            "style": "width: 25%",
            "display": true,
            "type": {
                "tag": "text"
            }
        },
        {
            "name": "Performance",
            "tag":  "Performance",
            "style": "width: 5%",
            "display": true,
            "type": {
                "tag": "label",
                "class": "label",
                "values": [
                    {
                        "name": "slow",
                        "description": "Overall performance above 200ms.",
                        "class": "label-danger"
                    },
                    {
                        "name": "fast",
                        "description": "Overall performance below 200ms.",
                        "class": "label-success"
                    }   
                ]
            }
        },
        {
            "name": "License",
            "tag": "License",
            "display": false,
            "type": {
                "tag": "label",
                "class": "label label-info",
                "values": [
                    {
                        "name": "MIT",
                        "description": "http://choosealicense.com/licenses/mit/"
                    },
                    {
                        "name": "Apache 2.0",
                        "description": "http://choosealicense.com/licenses/apache-2.0/"
                    },
                    {
                        "name": "MPL 2.0",
                        "description": "http://choosealicense.com/licenses/mpl-2.0/"
                    }
                ]
            }
            
        },
        {
            "name": "Showcase",
            "tag":  "Showcase 2.0",
            "style": "width: 5%",
            "display": true,
            "type": {
                "tag": "label",
                "class": "label",
                "values": [
                    {
                        "name": "red 1",
                        "description": "Show case for red label 1",
                        "class": "label-danger"
                    },
                    {
                        "name": "red 2",
                        "description": "Show case for red label 2",
                        "class": "label-danger"
                    },
                    {
                        "name": "green",
                        "description": "Show case for green label",
                        "class": "label-success"
                    },
                    {
                        "name": "yellow",
                        "description": "Show case for yellow label",
                        "class": "label-warning"
                    },
                    {
                        "name": "dark blue",
                        "description": "Show case for dark blue label",
                        "class": "label-primary"
                    },
                    {
                        "name": "grey",
                        "description": "Show case for grey label",
                        "class": "label-default"
                    },
                    {
                        "name": "light blue",
                        "description": "Show case for light blue label",
                        "class": "label-info"
                    }
                ]
            }
        }
    ]

The tags `Performance, License, Showcase 2.0` must match a section title (level 2).

# Data Specification

The code below shows a sample data specification.

    # Default ALL - http://default-0-entry.com
    Default short description

    ## Performance
    - slow
    - fast

    ## License
    - MIT
    - Apache 2.0
    - MPL 2.0

    ## Showcase 2.0
    - red 1
    - red 2
    - green
        - green property
            - Nous sommes __markdown__
        - green property
        - third green property
    - yellow
        - yellow property
    - dark blue
    - grey
    - light blue

    ## Description
    Default long description in __markdown__.

## License

The code and all content is licensed under [Apache 2.0]

  [Apache 2.0]: http://www.apache.org/licenses/LICENSE-2.0
