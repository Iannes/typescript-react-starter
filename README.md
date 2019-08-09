# Typescript & React Starter

### Setup

-   To install all dependencies, head over to your terminal and run the below command:
    `yarn install` or `npm install`
-   To run locally watching for changes:
    `yarn start` or `npm run start`

### What the TSLint Config Does

Lints (with TSLint) based on the latest Airbnb standards (eslint-config-airbnb)

Lints and fixes on every save (with Prettier)

Setup

    - Install [TSLint](https://github.com/Microsoft/typescript-tslint-plugin) and Prettier extensions via `Code > Preferences > Extensions`. 
    - In the settings.json file. Add the following lines:

```
{
    "typescript.updateImportsOnFileMove.enabled": "always",
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[typescriptreact]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "editor.codeActionsOnSave": {
        "source.fixAll.tslint": true
    },
    "prettier.eslintIntegration": true,
    "prettier.tslintIntegration": true
}


```
