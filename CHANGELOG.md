# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [2.1.0] 2025-07-13

### Added

[assets] added placeholder icon for tech bullet images

## [2.0.1] 2025-07-13

### Fixed

[deploy] made it so images are deployed to github pages

## [2.0.0] 2025-07-13

### Added

- [deploy] setup build artifacts to deploy to github pages
- [dev] eslint v9
- [assets] images and icons
- [assets] content data

### Changed

- [dependencies] updated angular to v19, TS to v5
- [dependencies] move from npm to pnpm and update to use node v22
- [components] updated all components to follow moduler pattern, only import components into components they are used
- [services] removed api call and fetching data from /assets

### Removed

- [dev] tslint

### Security

- [dependencies] upgraded all deprecated dependencies and vulnerable packages

## [1.6.3] 2022-05-15

### Fixed

- [meta-tag] correct og type tag

## [1.6.2] 2022-05-15

### Fixed

- [dev/meta-tag] add .png for og image tag

### Security

- [dependencies] run audit fix to remove vulnerable dependencies

## [1.6.1] 2022-05-15

### Fixed

- [meta-tags] added prefix for og: in html tag

## [1.6.0] 2022-05-15

### Added

- [meta-tags] added meta tags for description and open graph
- [dev] Shell script for server for updating other applications
- [dev] Heroku app and S3 bucket naming and purposes for additional apps

## [1.4.1] - 2021-09-11

### Added

- Version details in footer
- Error message shows when API fails

### Fixed

- Fixed color of loader to be visible during loading

## [1.4.0] - 2021-09-11

### Added

- Added HTTP service for fetching JSON data from heroku service
- Load indicator when waiting for API data

### Changed

- Source of images moved to S3 instead of on relative route

### Fixed

- Set footer to be sticky as intended

### Removed

- Image and JSON data from assets directory

## [1.3.1] - 2021-09-08

### Changed

- URL for deployed Augmented app

## [1.3.0] - 2021-09-04

### Changed
- Updated Angular framework from v9 to v12

### Fixed
- Security vulnerabilites from Github and npm audit
- JSON import modules issue

## [1.2.0] - 2021-01-04
### Added
- Server configuration documentation

### Changed
- Application naming to homepage
- Log note application details and updated name
- Element tag prefix from md to nssd

### Fixed
- Security issue with "ini" package
- Package author URL

## [1.1.2] - 2020-11-15

### Fixed
- Vulnerable dependency

## [1.1.1] - 2020-09-17

### Fixed
- Vulnerable dependency

## [1.1.0] - 2020-09-17

### Added
- Changelog

### Changed
- Setup application to handle data retrieval similar to API requests

### Fixed
- Security vulnerability

## [1.0.0] - 2020-07-09
- Initial project.
