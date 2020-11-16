<h1 id='contents'>Table of Contents</h1>

- [SUITESPOT_SUITEPORTAL](#suitespot_suiteportal)
  - [Start Frontend](#start-frontend)
  - [Start Backend](#start-backend)
    - [Environment Variables](#environment-variables)

# SUITESPOT_SUITEPORTAL

[Go Back to Contents](#contents)

## Start Frontend

[Go Back to Contents](#contents)

- On `Terminal`

  ```Bash
    cd frontend
    npm i
    npm run start
  ```

## Start Backend

[Go Back to Contents](#contents)

- On `Terminal`

  ```Bash
    cd backend
    npm i
    npm run dev
  ```

### Environment Variables

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
