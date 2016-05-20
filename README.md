# Ultimate Comparision Framework

This is an ultimate comparision framework written in angular2.

## Usage
1. install node.js
2. `npm install`
3. `npm start`

## Example for Comparision.json
Defines properties for the webseite. The object `details` defines the interface of the detailed view for a single dataset.

    {
      "title": "Ultimate-Comparision",
      "subtitle": "Ultimate comparision framework",
      "selecttitle": "Criteria",
      "tabletitle": "Database Systems",
      "details": {
          "header": "name",
          "header-label": "properties1",
          "header-url": "url",
          "body-main-title": "Description",
          "body-attachment-tags": [
              "properties2",
              "properties3"
          ]
      }
    }
The tags `name, properties1, properties2, properties3` and  `url` must match tags in the data specification!

## Example for Criteria.json
Criteria.json defines the selection fields. The tag `selectOption` specifies if it at least one (false) selected option or all (true) options must be true.

    [
      {
        "name": "Properties 1",
        "description": "Current available properties of type 1",
        "placeholder": "Select dummy properties of type 1...",
        "tag": "properties1",
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
        "name": "Properties 2",
        "description": "Current available properties of type 2",
        "placeholder": "Select dummy properties of type 2...",
        "tag": "properties2",
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
            "tag":  "name",
            "style": "width: 5%",
            "display": true,
            "type": {
                "tag":"text"
                },
            "valign": "top"    
        },
        {
            "name": "Porperties 1",
            "tag":  "properties1",
            "style": "width: 5%",
            "display": false,
            "type": {
                "tag": "label",
                "class": "label label-info"
            }
        },
        {
            "name": "Description",
            "tag":  "description",
            "style": "width: 25%",
            "display": true,
            "type": {
                "tag": "text"
            }
        },
        {
            "name": "Properties 2",
            "tag": "properties2",
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
            "name": "Porperties 3",
            "tag":  "properties3",
            "style": "width: 5%",
            "display": true,
            "type": {
                "tag": "label",
                "class": "label label-info"
            }
        }
    ]

The tags `properties1, properties2, properties3, p11, p12, p21, p22, p23` must match a tag in the data specification.

# Data Specification

The code below shows a sample data specification.

    ---
    name: Dummy
    properties1:
    - p11
    - p12
    description:
    Dummy Text!!
    properties2:
    - p21
    - p22
    - p23
    properties3:
    - p31
    - p32
    - p33
    - p34
    url: 'http://dummy.com'
    ---
    > #### Dummy Markdown

## License

The code and all content is licensed under [Apache 2.0]

  [Apache 2.0]: http://www.apache.org/licenses/LICENSE-2.0
