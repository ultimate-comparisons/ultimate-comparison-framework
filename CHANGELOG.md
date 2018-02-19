# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Introduction of Angular 5 [#30](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/issues/30)
- Introduction of Redux [#117](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/issues/117)
- Restructure comparison configuration [#128](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/issues/128)
- Publish `ultimate-comparison` on npmjs.org [#67](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/issues/67)
- Add extraction of missing information from comparison data [#89](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/issues/89)
- Add global style file to configuration folder 
- Add permanent display of all references [#18](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/issues/18)
- Add references to details page [#16](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/issues/16)
- Add tooltips for details page
- Add word-break property for tooltips
- Change some styles
- Change output directory location
- Fix moving content when modal opened [#26](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/issues/26)
- Fix quote markdown to json converting
- Fix Md2Json imports
- Remove pandoc dependency [#113](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/issues/113)

### Added
- Enabling and disabling elements
- Clicking labels for filtering

### Changed
- replaced angular2-select with ng2-select
- switched to angular 4 [#30](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/issues/30)

### Fixed
- Improved foreground colors when auto assigning
- Fixed problem with sorting `repo` columns [#114](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/issues/114)
- Fixed problem on first load after restart
- Add expand and shrink option for table [#90](https://github.com/ultimate-comparisons/ultimate-comparison-BASE/issues/90)

## 1.0.0 - 2017-08-24
### Added
- This file
- Static VersionInformation class
- Section about difference of `update` and `master` branch in README.md
- Added force push for deployment
- Moved deployment to .travis.yml
- Added tslint
- Added unknown label for empty values
- Enabling and disabling elements

### Fixed
- Rate Limit exceeded for GitHub for up to 60 elements.

[Unreleased]: https://github.com/ultimate-comparisons/ultimate-comparison-BASE/compare/1.0.0...HEAD
