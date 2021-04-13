# Amazing Talker assignment

## Getting Started

First, run the development server:

## Enviroment

```
node v15.11.0 (npm v7.6.3)
```

## start

```bash
$ yarn
$ yarn dev
```

## test

```bash
$ yarn test
```

## lint

```bash
$ yarn lint
```

## build

```bash
$ yarn build && yarn start
```

## run storybook

```bash
$ yarn storybook
```

## 1. 檔案命名, 結構

`[components].jsx`  
 `Button/index.jsx`

```bash
├── components        // root
│   ├── [components]  // folder
│   │   ├── [index].jsx
│   │   ├── [styles].module.scss
│   ├── Button
│   │   ├── index.jsx
│   │   ├── styles.module.scss
│   └── others...
```

### b. theme variable

```
├── styless             // root
│   ├── [global.scss]   // scss
```

## 2. writting test

```bash
├── __test__            // root
│   ├── [pages]         // folder
│   │   ├── [index].test.jsx
│   ├── [components]
│   │   ├── [index].test.jsx
│   └── others...
```

## 3. writting storybook

```bash
├── stories             // root
│   ├── [components]
│   │   ├── [index].stories.jsx
│   └── others...
```

## 4. vscode setting (formatting with prettier)

```
{
  "editor.formatOnSave": true,
  "editor.fontSize": 16,
  "editor.tabSize": 2,
  "editor.formatOnPaste": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "terminal.integrated.fontSize": 14,
  "javascript.format.enable": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "window.zoomLevel": 0,
  "[typescript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "typescript.updateImportsOnFileMove.enabled": "always",
  "diffEditor.ignoreTrimWhitespace": false,
  "workbench.editor.showTabs": true,
  "prettier.arrowParens": "avoid",
  "prettier.jsxSingleQuote": true,
  "prettier.singleQuote": true,
  "prettier.semi": false,
  "prettier.printWidth": 120,
  "prettier.trailingComma": "es5",
  "prettier.tabWidth": 2
}
```

## 3. vscode plugin

### a. [Auto Imoprt](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)

### b. [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### c. [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

### d. [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)

### e. [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
