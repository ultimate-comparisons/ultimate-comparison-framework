# Ultimate THING Comparison

[![Build Status](https://travis-ci.org/example.com/ultimate-THING-comparison.svg?branch=master)](https://travis-ci.org/example.com/ultimate-THING-comparison)

This is an ultimate comparison of THINGs.

## Test it
1. Install [node.js](https://nodejs.org/en/)
  - Windows: `choco install nodejs` via [chocolatey](https://chocolatey.org/)
2. Windows: Install required tooling:
  - In an adminstrative shell: `npm install --global --production windows-build-tools` [source](https://github.com/nodejs/node-gyp#option-1)
3. Install [Java JDK8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
  - Windows: `choco install jdk8`
5. Install [pandoc](http://pandoc.org/installing.html) (Version 1.17.2) [pandoc-citeproc](https://hackage.haskell.org/package/pandoc-citeproc)
   - Linux:
     1. `wget https://github.com/jgm/pandoc/releases/download/1.17.2/pandoc-1.17.2-1-amd64.deb`
     2. `sudo dpkg -i pandoc-1.17.2-1-amd64.deb`
   - Windows: `choco install pandoc`
6. Update npm (sudo): `npm install -g npm`
7. Test dependencies:

        java -version
        npm -version

8. `npm install`
9. `npm start` (starts the web page)
10. [Setup automatic deployment of `www` directory using Travis CI](docs/Travis_Build_Deploy.md)

## Ultimate-THING-Comparison Element Specification

The code below shows a sample element.

    # THING Element - http://example.com
    Element short description ...

    ## Description
    Element long __markdown__ description ...
    
    ## Property 1
    - label 1
    - label 2
    
    ## Property 2
    - label 3
    - label 4
    - label 5
    
    ## Rating
    - [1] Bad THING
    - [3] It is ok
    - [5] Good THING

## License

The code is licensed under [MIT], the content (located at `comparison-elements`) under [CC-BY-SA-4.0].

  [MIT]: https://opensource.org/licenses/MIT
  [CC-BY-SA-4.0]: http://creativecommons.org/licenses/by-sa/4.0/
