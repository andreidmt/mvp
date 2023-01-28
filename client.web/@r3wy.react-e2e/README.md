# R3wy's Cypress E2E tests

> The more your tests resemble the way your software is used, the more
> confidence they can give you.  
> [:bird: Kent C. Dodds](https://twitter.com/kentcdodds/status/977018512689455106)

![Cypress + Cucumber](docs/preview.png)

## Table of contents

<!-- vim-markdown-toc GFM -->

- [Stack](#stack)
- [Folder structure](#folder-structure)
- [Environment variables](#environment-variables)
  - [Local](#local)
  - [CI](#ci)
- [Scripts](#scripts)

<!-- vim-markdown-toc -->

## Stack

- [Cypress][stack_cypress] - Fast, easy and reliable testing for anything that
  runs in a browser.
- [Cucumber][stack_cucumber] - Add support for [Cucumber Gherkin
  syntax][stack_gherkin] when writing Cypress tests.
- [Cypress Testing Library][stack_ctl] - Cypress Testing Library allows the use
  of dom-testing queries within Cypress end-to-end browser tests.

[stack_cypress]: https://www.cypress.io
[stack_cucumber]:
  https://github.com/TheBrainFamily/cypress-cucumber-preprocessor
[stack_gherkin]: https://cucumber.io/docs/gherkin/reference
[stack_ctl]: https://testing-library.com/docs/cypress-testing-library/intro

## Folder structure

- [`core.steps`](src/core.steps) - Cucumber global steps/primitives definitions
- [`page.*`](src) - Folders with tests split by page (mirror same structure as
  in [`@oauth-ui/react`](../@oauth-ui.react/src/)

## Environment variables

- `CYPRESS_BASE_URL` - URL used as prefix for `cy.visit()` or `cy.request()`
  command's URL

### Local

Copy and rename `.env.template` to `.env`. Variables get picked up by
[`cypress-dotenv`][local_cypress-dotenv].

[local_cypress-dotenv]: https://github.com/morficus/cypress-dotenv

### CI

CircleCI secrets are split into reusable/composable "buckets" called
[Contexts](https://circleci.com/docs/2.0/contexts/):

- [R3wy - Cypress @andreidmt][ci_andreidmt-bucket] - passed from
  [`release_development`][ci_release-worflow] workflow to
  [`test-e2e`][ci_test-e2e-job] job

[ci_andreidmt-bucket]: https://circleci.com
[ci_release-worflow]: /.circleci/config.xml#L100
[ci_test-e2e-job]: /.circleci/config.xml#L100

## Scripts

- Before running any script, make sure to configure `CYPRESS_BASE_URL`
- Run `npm` commands from the monorepo root folder

**Start interactive debug session:**

```bash
# "start": "cypress open"
npm run start --workspace=@oauth-ui/e2e
```

**Run tests once:**

```bash
# "test": "cypress run --headed --config video=false,screenshotOnRunFailure=false",
npm run test --workspace=@oauth-ui/e2e
```

**Run tests once with reporter configs meant to run in CI:**

```bash
# "test.ci": "cypress run --reporter junit --reporter-options mochaFile=test_reports/e2e/result-[hash].xml,toConsole=true"
npm run test.ci --workspace=@oauth-ui/e2e
```
