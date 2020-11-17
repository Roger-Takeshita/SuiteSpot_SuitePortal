<h1 id='contents'>Table of Contents</h1>

- [SUITESPOT_SUITEPORTAL](#suitespot_suiteportal)
  - [Environment Variables](#environment-variables)
  - [Start Frontend](#start-frontend)
    - [Packages](#packages)
  - [Start Backend](#start-backend)
    - [Packages](#packages-1)
  - [Run Test](#run-test)
  - [Postman](#postman)

# SUITESPOT_SUITEPORTAL

## Environment Variables

[Go Back to Contents](#contents)

- in `backend/env/dev.env`

  ```Bash
    DATABASE_URL=mongodb://127.0.0.1:27017/SuitePortalDev
    JWT_SECRET_KEY=SuperSecretKey
    JWT_SECRET_EXPIRES_IN=7d
    PASSWORD_LEN=4
    PORT=3001
  ```

- in `backend/env/test.env`

  ```Bash
    DATABASE_URL=mongodb://127.0.0.1:27017/SuitePortalTest
    JWT_SECRET_KEY=SuperSecretKey
    JWT_SECRET_EXPIRES_IN=7d
    PASSWORD_LEN=4
    PORT=3001
  ```

## Start Frontend

[Go Back to Contents](#contents)

- On `Terminal`

  ```Bash
    cd frontend
    npm i
    npm run start
  ```

### Packages

[Go Back to Contents](#contents)

- Dependencies

  ```Bash
    npm i react-router-dom
    # handle react routing (necessary for react)

    npm i redux
    npm i react-redux
    npm i redux-thunk
    # redux and redux thunk dependencies
    # single source of truth

    npm i redux-logger
    # redux dependency, not necessary but it's a way to view the redux changes
  ```

- Dev dependencies

  ```Bash
    npm i -D @types/react
    npm i -D @types/react-dom
    npm i -D @types/react-redux
    npm i -D @types/react-router-dom
    npm i -D @types/redux-logger
    npm i -D @types/redux-thunk
  ```

## Start Backend

[Go Back to Contents](#contents)

- On `Terminal`

  ```Bash
    cd backend
    npm i
    npm run dev
  ```

### Packages

[Go Back to Contents](#contents)

- Dependencies

  ```Bash
    npm i express
    # express server
    npm i bcrypt
    # hash password before saving in the database
    npm i env-cmd
    # environment variables
    npm i jsonwebtoken
    # JWT - token, authorization
    npm i mongoose
    # ODM - Object data model
    npm i morgan
    # routes logger, not necessary but it's a good way to view the incoming api request
    npm i helmet
    # secure express apps
    npm i cors
    # cross browsing
  ```

- Dev Dependencies

  ```Bash
    npm i -D jest
    # test library

    npm i -D supertest
    # test library - api calls

    npm i -D ts-jest
    # ts compiler - ts to js

    npm i -D typescript
    # typescript
    npm i -D ts-node-dev
    # typescript dependency
    npm i -D tsconfig-paths
    # typescript dependency

    npm i -D @types/bcrypt
    npm i -D @types/cors
    npm i -D @types/express
    npm i -D @types/jsonwebtoken
    npm i -D @types/mongoose
    npm i -D @types/morgan
    npm i -D @types/node
    npm i -D @types/supertest
  ```

## Run Test

[Go Back to Contents](#contents)

- On `Terminal`

  ```Bash
    cd backend
    npm i
    npm run test
  ```

## Postman

[Go Back to Contents](#contents)

- [Postman API Calls](https://github.com/Roger-Takeshita/SuiteSpot_SuitePortal/blob/master/SuiteSpot.postman_collection.json)
