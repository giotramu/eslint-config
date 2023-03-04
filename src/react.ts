export = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],

  rules: {
    // * 👀 = Try to enable the rule in the future. For now, it is too strict.

    // --- Recommended - Overrides
    // Ref. https://github.com/jsx-eslint/eslint-plugin-react/blob/master/configs/recommended.js
    'react/display-name': 'off', // 👀
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true
      }
    ],

    // --- Basic Rules
    'react/boolean-prop-naming': 'off', // 👀
    'react/button-has-type': 'off', // 👀
    'react/function-component-definition': 'off', // 👀
    'react/hook-use-state': 'off', // 👀
    'react/iframe-missing-sandbox': 'error',
    'react/jsx-boolean-value': 'off', // 👀
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-handler-names': 'off', // 👀
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-leaked-render': 'off', // 👀
    'react/jsx-no-script-url': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/no-array-index-key': 'off', // 👀
    'react/no-arrow-function-lifecycle': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-namespace': 'error',
    'react/no-object-type-as-default-prop': 'off', // 👀
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unsafe': ['error', {checkAliases: true}],
    'react/no-unstable-nested-components': 'error',
    'react/prefer-es6-class': ['error', 'always'],
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/static-property-placement': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error'
  }
};
