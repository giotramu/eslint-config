# ESLint Config

Modular and opinionated [ESLint](https://eslint.org) configurations for JavaScript, TypeScript, and React projects.

[![NPM Version][version_badge]][npm_url]
[![NPM Downloads][downloads_badge]][npm_url]
[![Build Status][ci_badge]][ci_url]

- [ESLint Config](#eslint-config)
  - [Available Configurations](#available-configurations)
  - [Extending the Configuration](#extending-the-configuration)
  - [Integrating ESLint into the IDEs/Editors](#integrating-eslint-into-the-ideseditors)
  - [Thanks](#thanks)
  - [License](#license)

> The following ESLint configurations do not include code formatting rules, which are therefore delegated to [Prettier](https://prettier.io/). Please, use the [`@giotramu/prettier`](https://github.com/giotramu/prettier-config) to handle this type of need.

## Available Configurations

<details>

<summary><strong>Base config (JavaScript)</strong></summary>

1. Install the dependencies:

   ```sh
   # NPM
   npm add --save-dev @giotramu/eslint-config eslint

   # PNPM
   pnpm add --save-dev @giotramu/eslint-config eslint

   # Yarn
   yarn add --dev @giotramu/eslint-config eslint
   ```

2. Create a `.eslintrc.json` file in the root of your project, and extend the following configuration from it:

   ```json
   {
     "extends": "@giotramu/eslint-config"
   }
   ```

3. Use the ESLint CLI to check supported files. Drop this line into your `package.json` under the `scripts` property:

   ```diff
   {
     "scripts": [
   +   "check:src": "eslint . --ignore-path .gitignore"
     ]
   }
   ```

4. Lint your code with ESLint:

   ```sh
   # NPM
   npm run check:src

   # PNPM
   pnpm run check:src

   # Yarn
   yarn check:src
   ```

   </details>

<details>

<summary><strong>TypeScript</strong></summary>

1. Install the dependencies:

   ```sh
   # NPM
   npm add --save-dev @giotramu/eslint-config eslint typescript

   # PNPM
   pnpm add --save-dev @giotramu/eslint-config eslint typescript

   # Yarn
   yarn add --dev @giotramu/eslint-config eslint typescript
   ```

2. Create a `.eslintrc.json` file in the root of your project, and extend the following configuration from it:

   ```json
   {
     "extends": [
       "@giotramu/eslint-config",
       "@giotramu/eslint-config/typescript"
     ]
   }
   ```

3. Use the ESLint CLI to check supported files. Drop this line into your `package.json` under the `scripts` property:

   ```diff
   {
     "scripts": [
   +   "check:src": "eslint . --ext .js,.ts --ignore-path .gitignore"
     ]
   }
   ```

4. Lint your code with ESLint:

   ```sh
   # NPM
   npm run check:src

   # PNPM
   pnpm run check:src

   # Yarn
   yarn check:src
   ```

</details>

<details>

<summary><strong>JavaScript + React</strong></summary>

1. Install the dependencies:

   ```sh
   # NPM
   npm add --save-dev @giotramu/eslint-config eslint react react-dom

   # PNPM
   pnpm add --save-dev @giotramu/eslint-config eslint react react-dom

   # Yarn
   yarn add --dev @giotramu/eslint-config eslint react react-dom
   ```

2. Create a `.eslintrc.json` file in the root of your project, and extend the following configuration from it:

   ```json
   {
     "extends": ["@giotramu/eslint-config", "@giotramu/eslint-config/react"]
   }
   ```

3. Use the ESLint CLI to check supported files. Drop this line into your `package.json` under the `scripts` property:

   ```diff
   {
     "scripts": [
   +   "check:src": "eslint . --ext .js,.jsx --ignore-path .gitignore"
     ]
   }
   ```

4. Lint your code with ESLint:

   ```sh
   # NPM
   npm run check:src

   # PNPM
   pnpm run check:src

   # Yarn
   yarn check:src
   ```

</details>

<details>

<summary><strong>TypeScript + React</strong></summary>

1. Install the dependencies:

   ```sh
   # NPM
   npm add --save-dev @giotramu/eslint-config eslint typescript react react-dom

   # PNPM
   pnpm add --save-dev @giotramu/eslint-config eslint typescript react react-dom

   # Yarn
   yarn add --dev @giotramu/eslint-config eslint typescript react react-dom
   ```

2. Create a `.eslintrc.json` file in the root of your project, and extend the following configuration from it:

   ```json
   {
     "extends": [
       "@giotramu/eslint-config",
       "@giotramu/eslint-config/typescript"
       "@giotramu/eslint-config/react"
     ]
   }
   ```

3. Use the ESLint CLI to check supported files. Drop this line into your `package.json` under the `scripts` property:

   ```diff
   {
     "scripts": [
   +   "check:src": "eslint . --ext .js,.jsx,.ts,.tsx --ignore-path .gitignore"
     ]
   }
   ```

4. Lint your code with ESLint:

   ```sh
   # NPM
   npm run check:src

   # PNPM
   pnpm run check:src

   # Yarn
   yarn check:src
   ```

</details>

## Extending the Configuration

You can extend the configuration and override some rules. Add the `rules` property inside the `.eslintrc.json` file and then choose what to turn on or off.

```jsonc
{
  "extends": ["@giotramu/eslint-config", "@giotramu/eslint-config/typescript"],
  "env": [
    // Your environments (which contains several predefined global variables)
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  ],
  "globals": {
    // Your global variables (setting to false means it's not allowed to be reassigned)
    //
    // myGlobal: false
  },
  "rules": {
    // Customize your rules
  }
}
```

## Integrating ESLint into the IDEs/Editors

<details>
<summary><strong>Visual Studio Code</strong></summary>

1. Install the [ESLint Plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

2. Add the following code to your `.vscode/settings.json`:
   ```jsonc
   "editor.codeActionsOnSave": {
     "source.fixAll.eslint": true
   },
   "eslint.validate": ["javascript"] // Add the types of files you want to validate (e.g. "typescript", "javascriptreact", "typescriptreact"])
   ```
   </details>

## Thanks

- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)

## License

[MIT License](./LICENSE)

<!-- Badges -->

[ci_badge]: https://img.shields.io/github/actions/workflow/status/giotramu/eslint-config/tests.yml?style=flat-square&colorA=313133&colorB=4169E1
[downloads_badge]: https://img.shields.io/npm/dm/@giotramu/eslint-config?style=flat-square&colorA=313133&colorB=4169E1
[version_badge]: https://img.shields.io/npm/v/@giotramu/eslint-config?style=flat-square&colorA=313133&colorB=4169E1

<!-- Links -->

[ci_url]: https://github.com/giotramu/eslint-config/actions/workflows/tests.yml
[npm_url]: https://www.npmjs.com/package/@giotramu/eslint-config
