<h1 id='table-of-contents'>Table of Contents</h1>

- [FRONTEND](#frontend)
  - [New App](#new-app)
  - [Packages](#packages)
  - [Folder and Files](#folder-and-files)

# FRONTEND

## New App

[Go Back to Contents](#contents)

- On `Terminal`

  ```Bash
    npx create-react-app frontend --template typescript
  ```

## Packages

[Go Back to Contents](#contents)

- Dependencies

  ```Bash
    npm i react-router-dom
    # handle react routing

    npm i redux react-redux redux-thunk
    npm i redux-logger
    # redux thunk dependencies
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

## Folder and Files

[Go Back to Contents](#contents)

- Create base folder and files structure

  ```Bash
    touch src/css/styles.sass
    touch src/css/base/_base.sass
    touch src/css/components/_form.sass
    touch src/css/components/_item.sass
    touch src/css/components/_navbar.sass
    touch src/pages/Home.tsx
    touch src/pages/SingUp.tsx
    touch src/pages/Login.tsx
    touch src/pages/Admin.tsx
    touch src/redux/user.tsx
    touch src/redux/request.ts
    touch src/utils/api/apiService.ts
    touch src/utils/api/reqService.ts
    touch src/utils/api/tokenService.ts
    touch src/utils/types/types.ts
    touch src/store.ts
    touch src/components/Header.tsx
    touch src/components/FormLogin.tsx
    touch src/components/FormSignUp.tsx
    touch src/components/FormRequest.tsx
    touch src/components/Item.tsx
  ```
