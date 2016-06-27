# Ultimate TSDB Comparison

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
        "tabletitle": "Comparison Elements",
        "details": {
            "header": "tag",
            "header-label": "Property 1",
            "header-url": "url",
            "body-main-title": "Description",
            "body": "Description",
            "body-attachment-tags": [
                "Property 2",
                "Property 3"
            ]
        }
    }
The tags `name, properties1, properties2, properties3` and  `url` must match tags in the data specification!

## Example for Criteria.json
Criteria.json defines the selection fields. The tag `selectOption` specifies if it at least one (false) selected option or all (true) options must be true.

    [
        {
            "name": "Property 1 Name",
            "description": "Current available properties of type 1",
            "placeholder": "Select dummy property 1 ...",
            "tag": "Property 1",
            "selectOption": false,
            "values": [
            {
                "name": "p11"
            },
            {
                "name": "p12"
            }
            ]
        },
        {
            "name": "Prop 2",
            "description": "Current available properties of type 2",
            "placeholder": "Select dummy property 2 ...",
            "tag": "Property 2",
            "selectOption": false,
            "values": [
            {
                "name": "p21"
            },
            {
                "name": "p22"
            },
            {
                "name": "p23"
            }
            ]
        }
    ]

The tag `tag` must match a tag in the data specification.

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
            "name": "Prop. 1 Name",
            "tag":  "Property 1",
            "style": "width: 5%",
            "display": false,
            "type": {
                "tag": "label",
                "class": "label label-info"
            }
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
            "name": "Property 2",
            "tag": "Property 2",
            "style": "width: 5%",
            "display": true,
            "type": {
                "tag": "label",
                "class": "label",
                "ngClass": {
                    "label-success": "p21",
                    "label-warning": "p22",
                    "label-danger": "p23"
                }
            }
            
        },
        {
            "name": "P3",
            "tag":  "Property 3",
            "style": "width: 5%",
            "display": true,
            "type": {
                "tag": "label",
                "class": "label label-info"
            }
        }
    ]

The tags `Property 1, Property 2, Property 3` must match a section title (level 2).

# Data Specification

The code below shows a sample data specification.

    # Dummy - http://dummy.com
    Dummy short description

    ## Property 1
    - p11
    - p12

    ## Property 2
    - p21
    - p22
    - p23

    ## Property 3 
    - p31
    - p32
    - p33
    - p34

    ## Description
    > #### Dummy Markdown

## License

The code and all content is licensed under [Apache 2.0]

  [Apache 2.0]: http://www.apache.org/licenses/LICENSE-2.0