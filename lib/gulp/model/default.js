const yaml2json = require("js-yaml");

module.exports = yaml2json.safeLoad("" +
  "title: Ultimate-X-Comparison\n" +
  "subtitle: Ultimate X comparison framework\n" +
  "selectTitle: Criteria\n" +
  "tableTitle: Comparison of ...\n" +
  "repository:\n" +
  "  template: \"https://github.com/ultimate-comparisons/{}.git\"\n" +
  "  variables: [\"title\"]\n" +
  "details:\n" +
  "  header:\n" +
  "    nameRef: id\n" +
  "    labelRef: \"\"\n" +
  "    urlRef: id\n" +
  "  body:\n" +
  "    title: Description\n" +
  "    bodyRef: description\n" +
  "  tooltipAsText: false\n" +
  "\n" +
  "citation:\n" +
  "  csl: acm-siggraph.csl\n" +
  "  bib: literature.bib\n" +
  "\n" +
  "criteria:\n" +
  "  - id:\n" +
  "      name: Name\n" +
  "      search: false\n" +
  "      table: true\n" +
  "      detail: false\n" +
  "      type: name-url\n" +
  "  - description:\n" +
  "      name: Short Description\n" +
  "      search: false\n" +
  "      detail: false\n" +
  "      type: text\n" +
  "  - default-id:\n" +
  "      ignore: true\n" +
  "      id: id\n" +
  "      name: Name\n" +
  "      search: false\n" +
  "      table: true\n" +
  "      description: \"\"\n" +
  "      placeholder: \"\"\n" +
  "      order: \"\"\n" +
  "      andSearch: false\n" +
  "      rangeSearch: false\n" +
  "      type: name-url\n" +
  "      lock:\n" +
  "        id: true\n" +
  "        type: true\n" +
  "        detail: true\n" +
  "  - default-description:\n" +
  "      ignore: true\n" +
  "      id: description\n" +
  "      name: Description\n" +
  "      search: false\n" +
  "      table: false\n" +
  "      detail: false\n" +
  "      description: \"\"\n" +
  "      placeholder: \"\"\n" +
  "      order: \"\"\n" +
  "      andSearch: false\n" +
  "      rangeSearch: false\n" +
  "      type: markdown\n" +
  "      lock:\n" +
  "        id: true\n" +
  "        type: true\n" +
  "  - default-text:\n" +
  "      ignore: true\n" +
  "      id: Text-Criteria\n" +
  "      name:\n" +
  "        template: \"{}\"\n" +
  "        variables: [\"id\"]\n" +
  "      search: false\n" +
  "      table: true\n" +
  "      detail: true\n" +
  "      description: \"\"\n" +
  "      placeholder: \"\"\n" +
  "      order: \"\"\n" +
  "      andSearch: false\n" +
  "      rangeSearch: false\n" +
  "      type: text\n" +
  "  - default-rating:\n" +
  "      ignore: true\n" +
  "      id: Rating-Criteria\n" +
  "      name: \"\"\n" +
  "      search: false\n" +
  "      table: false\n" +
  "      detail: false\n" +
  "      description: \"\"\n" +
  "      placeholder: \"\"\n" +
  "      order: \"\"\n" +
  "      andSearch: false\n" +
  "      rangeSearch: false\n" +
  "      type: rating\n" +
  "  - default-label: # Used for defining missing criteria (with labels)\n" +
  "      ignore: true\n" +
  "      id: Label-Criteria\n" +
  "      name:\n" +
  "        template: \"{}\"\n" +
  "        variables: [\"id\"]\n" +
  "      search: true\n" +
  "      table: true\n" +
  "      detail: true\n" +
  "      description:\n" +
  "        template: \"Default description for {}\"\n" +
  "        variables: [\"name\"]\n" +
  "      placeholder:\n" +
  "        template: \"Select {} ...\"\n" +
  "        variables: [\"name\"]\n" +
  "      order: \"\"\n" +
  "      andSearch: false\n" +
  "      rangeSearch: false\n" +
  "      type: label\n" +
  "  - default-markdown: # Used for defining missing criteria (without labels)\n" +
  "      ignore: true\n" +
  "      id: Markdown-Criteria\n" +
  "      name:\n" +
  "        template: \"{}\"\n" +
  "        variables: [\"id\"]\n" +
  "      search: false\n" +
  "      table: true\n" +
  "      detail: true\n" +
  "      description: \"\"\n" +
  "      placeholder: \"\"\n" +
  "      order: \"\"\n" +
  "      andSearch: false\n" +
  "      rangeSearch: false\n" +
  "      type: markdown\n" +
  "  - default-name-url:\n" +
  "      ignore: true\n" +
  "      id: Name-Url-Criteria\n" +
  "      name:\n" +
  "        template: \"{}\"\n" +
  "        variables: [\"id\"]\n" +
  "      search: false\n" +
  "      table: true\n" +
  "      detail: false\n" +
  "      description: \"\"\n" +
  "      placeholder: \"\"\n" +
  "      order: \"\"\n" +
  "      andSearch: false\n" +
  "      rangeSearch: false\n" +
  "      type: name-url\n" +
  "  - default-repository:\n" +
  "      ignore: true\n" +
  "      id: Repository-Criteria\n" +
  "      name:\n" +
  "        template: \"{}\"\n" +
  "        variables: [\"id\"]\n" +
  "      search: false\n" +
  "      table: false\n" +
  "      detail: false\n" +
  "      description: \"\"\n" +
  "      placeholder: \"Select development status...\"\n" +
  "      order: \"\"\n" +
  "      andSearch: false\n" +
  "      rangeSearch: false\n" +
  "      type: repository\n" +
  "  - default-color: # Used for coloring labels\n" +
  "      ignore: true\n" +
  "      values:\n" +
  "        1:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(15, 100%, 70%)'\n" +
  "        2:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(30, 100%, 70%)'\n" +
  "        3:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(45, 100%, 70%)'\n" +
  "        4:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(60, 100%, 70%)'\n" +
  "        5:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(75, 100%, 70%)'\n" +
  "        6:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(90, 100%, 70%)'\n" +
  "        7:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(105, 100%, 70%)'\n" +
  "        8:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(120, 100%, 70%)'\n" +
  "        9:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(135, 100%, 70%)'\n" +
  "        10:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(150, 100%, 70%)'\n" +
  "        11:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(165, 100%, 70%)'\n" +
  "        12:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(180, 100%, 70%)'\n" +
  "        13:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(195, 100%, 70%)'\n" +
  "        14:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(210, 100%, 70%)'\n" +
  "        15:\n" +
  "          color: '#ffff00'\n" +
  "          backgroundColor: 'hsl(225, 100%, 70%)'\n" +
  "        16:\n" +
  "          color: '#ffff00'\n" +
  "          backgroundColor: 'hsl(240, 100%, 70%)'\n" +
  "        17:\n" +
  "          color: '#ffff00'\n" +
  "          backgroundColor: 'hsl(255, 100%, 70%)'\n" +
  "        18:\n" +
  "          color: '#ffff00'\n" +
  "          backgroundColor: 'hsl(270, 100%, 70%)'\n" +
  "        19:\n" +
  "          color: '#ffff00'\n" +
  "          backgroundColor: 'hsl(285, 100%, 70%)'\n" +
  "        20:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(300, 100%, 70%)'\n" +
  "        21:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(315, 100%, 70%)'\n" +
  "        22:\n" +
  "          color: '#0d0d0d'\n" +
  "          backgroundColor: 'hsl(330, 100%, 70%)'\n");
