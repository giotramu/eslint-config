export = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },

  plugins: ['node', 'import'],

  extends: ['eslint:recommended', 'plugin:jsdoc/recommended'],

  rules: {
    // * 👀 = Try to enable the rule in the future. For now, it is too strict.

    // --- Recommended - Overrides
    // Ref. https://github.com/eslint/eslint/blob/main/conf/eslint-recommended.js
    'no-inner-declarations': ['error', 'both'],
    'no-irregular-whitespace': 'off',

    // --- Basic Rules
    'accessor-pairs': ['error', {setWithoutGet: true, getWithoutSet: false}],
    'array-callback-return': 'error',
    camelcase: ['error', {properties: 'never'}],
    complexity: ['error', {max: 20}],
    curly: 'error',
    'default-case-last': 'error',
    'dot-notation': 'error',
    eqeqeq: ['error', 'always'],
    'func-name-matching': [
      'error',
      'always',
      {includeCommonJSModuleExports: false}
    ],
    'grouped-accessor-pairs': 'error',
    'guard-for-in': 'error',
    'id-match': 'error',
    'max-depth': ['error', 5],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 3],
    'new-cap': ['error', {newIsCap: true, capIsNew: false, properties: true}],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-console': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-duplicate-imports': 'error',
    'no-empty-static-block': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': ['error', {allow: ['!!']}],
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-iterator': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-mixed-operators': 'off', // 👀
    'no-multi-assign': 'off', // 👀
    'no-multi-str': 'error',
    'no-negated-condition': 'off', // 👀
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'error',
    'no-promise-executor-return': 'error',
    'no-proto': 'error',
    'no-return-assign': ['error', 'always'],
    'no-script-url': 'error',
    'no-sequences': 'error',
    'no-self-compare': 'error',
    'no-shadow': ['error', {hoist: 'all'}],
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off', // 👀
    'no-underscore-dangle': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'off', // 👀
    'no-unreachable-loop': 'error',
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'no-unused-private-class-members': 'error',
    'no-use-before-define': [
      'error',
      {variables: false, functions: false, classes: false}
    ],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'off', // 👀
    'no-var': 'error',
    'no-void': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'off', // 👀
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-regex-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'spaced-comment': [
      'error',
      'always',
      {markers: ['/'], block: {exceptions: ['*'], balanced: true}}
    ],
    strict: ['error', 'never'],
    'symbol-description': 'error',
    'vars-on-top': 'error',
    yoda: ['error', 'never', {onlyEquality: true}],

    // --- Node
    'node/global-require': 'error',
    'node/no-unsupported-features/es-syntax': 'off',

    // --- Import
    'import/no-deprecated': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', ['sibling', 'index']],
        pathGroups: [
          {
            pattern: './*.css',
            group: 'index',
            position: 'after'
          },
          {
            pattern: './*.html',
            group: 'index',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc'
        }
      }
    ],

    // --- JSDoc
    'jsdoc/check-tag-names': ['error', {definedTags: ['jest-environment']}],
    'jsdoc/no-multi-asterisks': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-param-name': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-returns-check': 'off',
    'jsdoc/require-returns-description': 'off',
    'jsdoc/require-returns-type': 'off'
  }
};
