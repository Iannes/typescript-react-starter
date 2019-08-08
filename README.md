# Typescript & React Starter

### Setup

-   To install all dependencies, head over to your terminal and run the below command:
    `yarn install` or `npm install`
-   To run locally watching for changes:
    `yarn start` or `npm run start`

### What the TsLint Config Does

Lints (with TSLint) based on the latest Airbnb standards (eslint-config-airbnb)

Lints and fixes on every save (with Prettier)

Setup

Install [TSLint](https://github.com/Microsoft/typescript-tslint-plugin) and Prettier extensions via `VSCode > File > Preferences > Extensions`.
Open the settings `VSCode > File > Preferences > Settings`, then in the top right corner click the {} to open the settings.json file. Add following lines:

```
{
    "prettier.tslintIntegration": true,
    "editor.formatOnSave": true,
    "editor.tabSize": 2,
    "files.insertFinalNewline": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.tslint": true
    },

    // turn it off for JSX, we will do this via tslint

    "[javascript]": {
        "editor.formatOnSave": false
    },

    "prettier.disableLanguages": ["javascript", "javascriptreact"]
}


```
