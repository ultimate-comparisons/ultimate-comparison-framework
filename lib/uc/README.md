# Ultimate THING Comparison

[![Build Status](https://travis-ci.org/example.com/ultimate-THING-comparison.svg?branch=master)](https://travis-ci.org/example.com/ultimate-THING-comparison)

This is an ultimate comparison of THINGs.

## Start the comparison

1. Install dependencies `npm install`
2. Start webserver `npm start`
3. Alternatively start development mode `npm run dev`

## Deploy comparison with github and travis

1. [Setup Git](https://help.github.com/articles/set-up-git/)
2. [Setup Travis](https://docs.travis-ci.com/user/getting-started/)
    - Changes to `.travis.yml` are not required
3. [Create a personal access token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
4. [Add the environment variable `GITHUB_TOKEN` to travis](https://docs.travis-ci.com/user/environment-variables#Defining-Variables-in-Repository-Settings)

## Ultimate-THING-Comparison Element Specification

The code below shows a sample element.

    # THING Element - http://example.com
    Element short description ...

    ## Description
    Element long __markdown__ description ...
    
    ## Property 1
    - Label 1
        - Tooltip for label 1
    - Label 2
        - Itemized tooltip for label 1
        - Second tooltip item
    
    ## Property 2
    - Label 3
    - Label 4
    - Label 5
    
    ## Rating
    - [1] Bad THING
    - [3] It is ok
    - [5] Good THING

## License

The code is licensed under [MIT], the content (located at `data`) under [CC-BY-SA-4.0].

  [MIT]: https://opensource.org/licenses/MIT
  [CC-BY-SA-4.0]: http://creativecommons.org/licenses/by-sa/4.0/
