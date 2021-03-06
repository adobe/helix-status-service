# Helix Status Service

> Helix service that reports the status of the runtime environments

## Status
[![codecov](https://img.shields.io/codecov/c/github/adobe/helix-status-service.svg)](https://codecov.io/gh/adobe/helix-status-service)
[![CircleCI](https://img.shields.io/circleci/project/github/adobe/helix-status-service.svg)](https://circleci.com/gh/adobe/helix-status-service)
[![GitHub license](https://img.shields.io/github/license/adobe/helix-status-service.svg)](https://github.com/adobe/helix-status-service/blob/main/LICENSE.txt)
[![GitHub issues](https://img.shields.io/github/issues/adobe/helix-status-service.svg)](https://github.com/adobe/helix-status-service/issues)
[![LGTM Code Quality Grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/adobe/helix-status-service.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/adobe/helix-status-service)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## Installation

## Usage

The service is installed and available for Adobe I/O Runtime at `https://adobeioruntime.net/api/v1/web/helix/helix-services/status@latest`.

```bash
curl https://adobeioruntime.net/api/v1/web/helix/helix-services/status-service@v1
```

For more, see the [API documentation](docs/API.md).

## Development

### Deploying Helix Status Service

Deploying Helix Status Service requires the `wsk` command line client, authenticated to a namespace of your choice. For Project Helix, we use the `helix` namespace.

All commits to main that pass the testing will be deployed automatically. All commits to branches that will pass the testing will get commited as `/helix-services/status-service@ci<num>` and tagged with the CI build number.
