# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
