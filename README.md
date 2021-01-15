Just a reminder:

I was trying to set up a functional authentication feature:
- create the entities
- create migrations
- create authentication guard
- create sign in action
- create sign out action
- create delete account action
- as a poc, write-through/read-through cache interceptors

# Battle of State Managers

## Goal

This project aims to provide some insight over the available state managers stressing a real world application for state managers.
That being a multi-page form with feature flags and authentication on top of it all.

What we are trying to achieve here is to analyze how well does each of the state managers scale, how easily can they be tested or better yet how easily can it be extended and understood.

## Definition of done

The application:
- [ ] Authenticates a user before allowing for interacting with the forms
- [ ] Provides a multi-page form
- [ ] A feature flag allows for unauthenticated users to fill the forms before being prompt to login to submit this form
- [ ] Allows the form to be filled in any sequence the user sees fit 

## State Managers

As it was mentioned above, we are going to look at a number of state managers, some more well-known than others.
The list below can be outdated however we are working on to keep it current:

- [ ] Apollo
- [ ] Jotai
- [ ] Mobx
- [ ] Recoil
- [ ] Redux
- [ ] Relay
- [ ] Sweet State
- [ ] State While Revalidate
- [ ] Zustand 

As each library brings something different to the table, we quickly acknowledge the need to adapt the architecture to each of its needs.
We take this opportunity to understand how we can better decouple react applications from state management or, better yet, how to bring already existing best practices for backend applications such as dependency injection, SOLID, SOC, and others.

Please notice we are not trying to reinvent or discover design patterns, yet we want to experiment how best can those techniques fit into featureful frontend applications.

## Best-fit criteria

The state managers will be scored according to the criteria below.
These are initially some direct pains our team is going through went working with redux on a large scale and complex application.
There are more than two teams working directly on that application, so the most important aspects of the state manager should be simplicity and readability.
Testability and performance are next.
Finally, it's important to check if the library allows for complex behaviors such as an event driven architecture such as what we can do with redux-saga.
Only then we want to see how easily swappable is the library also how generic can we make of its usage. 

In descending order of evaluation criteria:
- Readability
- Simplicity
- Separation of Concerns (Domain Driven Design affinity / modelling)
- Testability
- Performance
- Lazy-loading capability
- Swappable
- Generality

## Documentation

Since architecture is going to be secondary to this experiment, we'll try to keep its documentation directly in the code through the use of [`typedocs`](https://typedoc.org/) and [`mermaidjs`](https://kamiazya.github.io/typedoc-plugin-mermaid/).

## TODO

- [ ] Add git hooks
- [ ] Improve on configuration. Strings dont seem to be the best choice
- [ ] Seguir o andamento [dessa issue](https://github.com/nestjs/typeorm/issues/66)

# Development

## Commands

- Running apps:

```shell
# Start main hub with it's dependencies
yarn serve:hubs:main
```

- Migrations

```shell
# Running migrations on api
yarn typeorm migration:run -f apps/apis/user/src/core/database/sources/api/ormconfig.json -c <connection name>

# Verifying if models are compatible with migrations
yarn typeorm schema:log -f apps/apis/user/src/core/database/sources/api/ormconfig.json -c <connection name>

# Drops table the connection targets
yarn typeorm schema:drop -f apps/apis/user/src/core/database/sources/api/ormconfig.json -c <connection name>
```


--- 

This project was generated using [Nx](https://nx.dev).

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Angular](https://angular.io)
  - `npm install --save-dev @nrwl/angular`
- [Nest](https://nestjs.com)
  - `npm install --save-dev @nrwl/nest`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/nx-community) you could add.

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are sharable across libraries and applications. They can be imported from `@battle-of-state-managers/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.

## ☁ Nx Cloud

### Computation Memoization in the Cloud

<p align="center"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-cloud-card.png"></p>

Nx Cloud pairs with Nx in order to enable you to build and test code more rapidly, by up to 10 times. Even teams that are new to Nx can connect to Nx Cloud and start saving time instantly.

Teams using Nx gain the advantage of building full-stack applications with their preferred framework alongside Nx’s advanced code generation and project dependency graph, plus a unified experience for both frontend and backend developers.

Visit [Nx Cloud](https://nx.app/) to learn more.
