# Typescript & React Starter

<details>
 <summary>Table Of Contents</summary>
 1. [Why](#why)
   1. [What the config does](#what-the-eslint-config-does)
1. [Setup](#setup)
</details>

### Why

`ESLint` is the one of the most widely-used linting tools in web development. It’s an invaluable tool for keeping the team’s code consistent by ensuring everyone is following the same style conventions.

### What the ESLint Config Does

Lints (with ESLint) based on the latest Airbnb standards (eslint-config-airbnb)

Lints and fixes on every save (with Prettier)

### Setup

-   To install all dependencies, head over to your terminal and run the below command:
    `yarn install` or `npm install`
-   To run locally watching for changes:
    `yarn start` or `npm run start`

Install ESLint and Prettier extensions via `Code > Preferences > Extensions`. 

In the `settings.json file`, add the following lines:

```
  "editor.formatOnSave": true,
  // turn it off for JS and JSX, we will do this via eslint
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false
  },
  // tell the ESLint plugin to run on save
  "eslint.autoFixOnSave": true,
    // If you have the prettier extension enabled for other languages, turn it off for JS since we're already doing this with ESLint 
  "prettier.disableLanguages": [
    "javascript",
    "javascriptreact"
  ],
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.suggest.snippetsPreventQuickSuggestions": false,
  "typescript.updateImportsOnFileMove.enabled": "always",

```
- Restart `VSCode`.
  - Note: The `ESLint` extension for `VSCode` relies on `node_modules/eslint`, so make sure you have run `yarn` before restarting `VSCode`.