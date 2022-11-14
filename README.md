<!-- markdownlint-disable first-line-h1 -->

[![CircleCI](https://dl.circleci.com/status-badge/img/gh/r3wy/r3wy/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/r3wy/r3wy/tree/main)
[![Coverage Status](https://coveralls.io/repos/github/r3wy/r3wy/badge.svg)](https://coveralls.io/github/r3wy/r3wy)

# R3wy

> React application proof-of-concept with focus on maintainability, setting as
> many :guardsman: guard :railway_track: rails as possible.

<!-- vim-markdown-toc GFM -->

- [Features](#features)
- [Install](#install)
- [Application Stack](#application-stack)
- [Development flow](#development-flow)
- [Scripts](#scripts)
- [Todo](#todo)

<!-- vim-markdown-toc -->

## Features

- :dragon: [Lerna][intro_lerna] monorepo to encourage setting up your
  application domain as a sum of smaller packages
- :shipit: [CircleCI][intro_circleci] with [`jobs`][intro_cci-jobs] that read,
  almost, as pure functions + [Contexts][intro_cci-context]
- :suspect: [Typescript][intro_typescript], [ESLint][intro_eslint],
  [Prettier][intro_prettier], [LintStaged][intro_lint-staged],
  [CommitLint][intro_commit-lint] and [Githooks][intro_githooks] because I
  don't trust myself to be consistent
- :love_letter: Automated, [Conventional
  Commits][intro_conventional-commits] based, versioning and releases via
  [`commitlint`][intro_commit-lint] + [`lerna publish`][intro_lerna-publish]
- :hammer: E2E testing using [Cypress][intro_cypress] and Unit testing with
  [Jest][intro_jest]

[intro_circleci]: https://circleci.com
[intro_cci-jobs]: /.circleci/config.yml#27
[intro_conventional-commits]: https://www.conventionalcommits.org
[intro_lerna]: https://lerna.js.org
[intro_cci-context]: https://circleci.com/docs/contexts
[intro_typescript]: https://www.typescriptlang.org
[intro_eslint]: https://eslint.org
[intro_prettier]: https://prettier.io
[intro_lint-staged]: https://github.com/okonet/lint-staged
[intro_githooks]: https://git-scm.com/docs/githooks
[intro_commit-lint]: https://commitlint.js.org
[intro_lerna-publish]: https://lerna.js.org/docs/features/version-and-publish
[intro_cypress]: https://www.cypress.io
[intro_jest]: https://jestjs.io

## Install

```bash
git clone git@github.com:r3wy/r3wy.git && \
  cd r3wy && \
  npm run setup
```

Even if you are not contributing code and only updating docs or CI
configurations, you should still run once `npm run setup` or `npm install`.
Doing this will activate git hooks present in [.githooks](/.githooks) folder.

## Application Stack

- [webpack v5][app-stack_webpack] + [swc][app-stack_swc] - Most popular JS
  bundler + lightning fast, Rust based, compile times
- [typescript v4][app-stack_ts] - A strongly typed programming language that
  builds on JavaScript
- [react v18][app-stack_react] - A JavaScript library for building user
  interfaces
- [react-router v6][app-stack_react-router] - Declarative routing for React
- [chakra-ui][app-stack_chakra] - Simple, Modular & Accessible UI
  Components for your React Applications
- [rambda][app-stack_rambda] - Point-free style functional programming library.
  Faster, smaller and with TypeScript support alternative to
  [Ramda](https://ramdajs.com/)

[app-stack_react]: https://github.com/facebook/react
[app-stack_react-router]: https://github.com/remix-run/react-router
[app-stack_chakra]: https://github.com/chakra-ui/chakra-ui
[app-stack_rambda]: https://github.com/selfrefactor/rambda
[app-stack_ts]: https://www.typescriptlang.org
[app-stack_webpack]: https://github.com/webpack/webpack
[app-stack_swc]: https://swc.rs

## Development flow

[Trunk based development](https://trunkbaseddevelopment.com/) with friends. All
code changes flow one-way, bottom-up without diverging:

- `feat/pr-branch` -> `dev` -> `main`.

```text
+--------+
|  main  |
+--------+
   ^
   |  +--------+
   \--+  dev   |
      +--------+
         ^
         |   +-------------------------+
         |<--+  feat/login-form        |
         |   +-------------------------+
         |
         |   +-------------------------+
         \<--+  fix/login-remember-me  |
             +-------------------------+
```

| :warning: WARNING                                                             |
| :---------------------------------------------------------------------------- |
| Always use "Squash and Merge" when mearging a PR into `dev`.                  |
| Merge commits can still be done from the terminal - should never be the case. |

## Scripts

**Starts development servers:**

- [localhost:8080](http://localhost:8080) - Local development server
- [localhost:8888](http://localhost:8888) - Bundle analyzer

```bash
# repo root 
#  > "start": "npm run start --workspace=@r3wy/react"

# @r3wy/react
#  > "start": "webpack serve --mode development"
npm start
```

**Build `src/index.tsx` entry point into `dist` folder:**

```bash
# repo root
#  > "build": "npm run build --workspace=@r3wy/react"

# @r3wy/react
#  > "prebuild": "rm -rf dist",
#  > "build": "webpack --mode production"
npm run build
```

| :warning: WARNING                                                         |
| :------------------------------------------------------------------------ |
| `start` and `build` scripts will not throw on TypeScript or ESLint errors |

**Interactivly upgrade dependencies to the latest versions across all packages:**

```bash
# repo root
#  > ncu --deep --interactive
npm run update
```

## Todo

- [ ] :red_circle: Find way to locally install npm packages in lambda function
  repos. Currently they are not part of workspace as a workaround for the lack
  of npm's or lerna's `--nohoist`
- [ ] Use [`lerna run`][todo_lerna-run] to run scripts cross-package and
  benefit from [caching][todo_lerna-cache] and parallel running
- [ ] :red_circle: Increment versions and local dependencies of private repos
  also, not only of those who get published to npm ... prob via separate call
  to [`lerna version`][todo_lerna-version]
- [ ] Refactor `useCRUDStatus` to allow arbitrary actions
- [ ] :red_circle: Configure Lerna [canary builds][todo_lerna-canary] for `dev`
  branch
- [ ] :red_circle: Introduce [Terraform][todo_terraform] as [Infrastructure as
  Code][todo_iac] solution
- [ ] [Code splitting][todo_code-splitting]
- [ ] Export Typescript config to separate `@r3wy.ts-config` public package
- [ ] Export UI primitives to separate `@r3wy.react-ui` public package
- [ ] Export hooks to separate `@r3wy.react-hooks` public package
- [ ] I18n with [react-i18next][todo_react-i18next] + Google Spreadsheet data
  import
- [ ] SSR
- [ ] Update `CRUDStatusUI` to display all running operations
- [ ] OAuth API + `useAuth` support
- [ ] Realtime updates
- [ ] Refactor inline css styles in separate [Chakra Components][todo_chakra-components]

[todo_lerna-version]: https://github.com/lerna/lerna/tree/main/commands/version#readme
[todo_lerna-run]: https://github.com/lerna/lerna/tree/main/commands/run
[todo_lerna-cache]: https://lerna.js.org/docs/concepts/how-caching-works
[todo_terraform]: https://www.terraform.io
[todo_iac]: https://en.wikipedia.org/wiki/Infrastructure_as_code
[todo_react-i18next]: https://react.i18next.com
[todo_chakra-components]: https://chakra-ui.com/docs/styled-system/component-style
[todo_code-splitting]: https://www.copycat.dev/blog/react-lazy
[todo_lerna-canary]: https://github.com/lerna/lerna/tree/main/commands/publish#--canary
