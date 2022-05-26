# unpollito's full-stack starter template

- Frontend app: React
- Backend: Node.js with PostgreSQL backend. Uses `dbmate` for DB migrations
  and Zapatos as an ORM.

## Installation

1. Ensure that you have `node`, `npm` and `yarn` globally installed.
2. Run `yarn setup`.
3. Set up the env variables `.env` in `apps/app/.env`, `apps/service/.env`
   and `libs/db-client/.env` with the correct values using the `.env.sample`
   files as a reference.
4. Set up the DB: `cd libs/db-client` and `dbmate up`.
5. Start the server: `cd apps/service`, `yarn build` and `yarn start`.
6. Start the app: `cd apps/app` and `yarn start`.

## Project structure

This is structured as a monorepo, using [Lerna](https://github.com/lerna/lerna) to
manage the different packages. The repo is divided in five packages:
- `apps/app`: the web client.
- `apps/service`: the backend.
- `libs/db-client`: handles DB access (server-side only).
    - Having this as a separate package is not strongly needed, but I find it's good
      practice to decouple this from the service, and I have come across projects in
      the past which had several independent definitions of DB access, which resulted
      in some trouble.
- `libs/types`: type definitions reused across the app and backend, and some helper
  functions to convert from one type to another.

### DB client

The DB access is achieved using [Zapatos](https://jawj.github.io/zapatos/), an ORM
which generates a TypeScript schema out of the database structure and offers goodies
such as autocompletion, compilation errors if I try to access an incorrect
table/field and so on.

I'm also using [dbmate](https://github.com/amacneil/dbmate) for DB migrations.
