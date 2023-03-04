# ESLint Config

```sh
# NPM
npm add --save-dev eslint @giotramu/eslint-config

# PNPM
pnpm add --save-dev eslint @giotramu/eslint-config

# Yarn
yarn add --dev eslint @giotramu/eslint-config
```

> **Nota bene:** Questa configurazione ESLint non include regole legate allo stile, che sono quindi delegate a [Prettier](https://prettier.io/). Si invita ad utilizzare la configurazione [`@giotramu/prettier`](https://github.com/giotramu/prettier-config) per gestire questo tipo di necessità.

Per utilizzare questa configurazione ESLint, dopo aver installato il pacchetto, è necessario creare un file `.eslintrc.json` nella root del progetto e scegliere una delle configurazioni in basso, a seconda delle tecnologie che si intende supportare. Al momento sono disponibili le seguenti opzioni:

- [JavaScript](#javascript)
- [TypeScript](#typescript)
- [JavaScript + React](#javascript--react)
- [TypeScript + React](#typescript--react)

## JavaScript

```diff
{
  "root": true,
  "extends": [
+   "@giotramu/eslint-config"
  ]
}
```

## TypeScript

```diff
{
  "root": true,
  "extends": [
    "@giotramu/eslint-config",
+   "@giotramu/eslint-config/typescript" // ← Aggiungere in coda
  ]
}
```

## JavaScript + React

```diff
{
  "root": true,
  "extends": [
    "@giotramu/eslint-config",
+   "@giotramu/eslint-config/react" // ← Aggiungere in coda
  ]
}
```

## TypeScript + React

```diff
{
  "root": true,
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "@giotramu/eslint-config",
    // ↓ Aggiungere in coda, in questo specifico ordine.
+   "@giotramu/eslint-config/typescript",
+   "@giotramu/eslint-config/react"
  ]
}
```
