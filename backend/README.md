<h1 id='table-of-contents'>Table of Contents</h1>

- [BACKEND](#backend)
  - [Start Server](#start-server)
  - [Folder and Files](#folder-and-files)

# BACKEND

[Go Back to Contents](#table-of-contents)

## Start Server

[Go Back to Contents](#contents)

- Init new server

  ```Bash
    npm init -y
    # new node project
    npm i express
    # express server
    npm i bcrypt
    # hash password
    npm i env-cmd
    # environment variables
    npm i jsonwebtoken
    # JWT - authorization
    npm i mongoose
    # ODM - Object data model
    npm i morgan
    # logger
    npm i helmet
    # secure express apps
    npm i cors
    # cross browsing
  ```

  ```Bash
    npm i -D jest
    # test library
    npm i -D supertest
    # test library - api calls
    npm i -D ts-jest
    # ts compiler - ts to js
    npm i -D typescript
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

## Folder and Files

[Go Back to Contents](#contents)

```Bash
  touch env/dev.env
  touch env/test.env
  touch src/utils/types/types.ts
  touch src/config/database.ts
  touch src/controllers/users.ts
  touch src/controllers/requests.ts
  touch src/middlewares/auth.ts
  touch src/models/user.ts
  touch src/models/request.ts
  touch src/routes/users.ts
  touch src/routes/requests.ts
  touch src/tests/database/database.ts
  touch src/tests/user.test.ts
  touch src/tests/request.test.ts
  touch src/app.ts
  touch src/index.ts
```

```Bash
  .
  ├── env
  │   ├── dev.env
  │   └── test.env
  ├── src
  │   ├── config
  │   │   └── database.ts
  │   ├── controllers
  │   │   ├── requests.ts
  │   │   └── users.ts
  │   ├── middlewares
  │   │   └── auth.ts
  │   ├── models
  │   │   ├── request.ts
  │   │   └── user.ts
  │   ├── routes
  │   │   ├── requests.ts
  │   │   └── users.ts
  │   ├── tests
  │   │   ├── database
  │   │   │   └── database.ts
  │   │   ├── request.test.ts
  │   │   └── user.test.ts
  │   ├── utils
  │   │   └── types.ts
  │   ├── app.ts
  │   └── index.ts
  ├── package-lock.json
  ├── package.json
  └── README.md
```
