import {STATUS} from './constants';

const REACT_RULES = {
  // --- Recommended - Overrides
  'react/display-name': STATUS.None,
  'react/jsx-key': [
    STATUS.Error,
    {
      checkFragmentShorthand: true
    }
  ],

  // --- Strict Rules
  'react/boolean-prop-naming': STATUS.None,
  'react/button-has-type': STATUS.None,
  'react/function-component-definition': STATUS.None,
  'react/hook-use-state': STATUS.None,
  'react/iframe-missing-sandbox': STATUS.Error,
  'react/jsx-boolean-value': STATUS.None,
  'react/jsx-curly-brace-presence': [STATUS.Error, 'never'],
  'react/jsx-fragments': [STATUS.Error, 'syntax'],
  'react/jsx-handler-names': STATUS.None,
  'react/jsx-no-constructed-context-values': STATUS.Error,
  'react/jsx-no-leaked-render': STATUS.None,
  'react/jsx-no-script-url': STATUS.Error,
  'react/jsx-no-useless-fragment': STATUS.Error,
  'react/jsx-pascal-case': STATUS.Error,
  'react/no-array-index-key': STATUS.None,
  'react/no-arrow-function-lifecycle': STATUS.Error,
  'react/no-danger': STATUS.Error,
  'react/no-danger-with-children': STATUS.Error,
  'react/no-did-update-set-state': STATUS.Error,
  'react/no-namespace': STATUS.Error,
  'react/no-object-type-as-default-prop': STATUS.None,
  'react/no-redundant-should-component-update': STATUS.Error,
  'react/no-this-in-sfc': STATUS.Error,
  'react/no-typos': STATUS.Error,
  'react/no-unsafe': [STATUS.Error, {checkAliases: true}],
  'react/no-unstable-nested-components': STATUS.Error,
  'react/prefer-es6-class': [STATUS.Error, 'always'],
  'react/self-closing-comp': STATUS.Error,
  'react/sort-comp': STATUS.Error,
  'react/static-property-placement': STATUS.Error,
  'react/style-prop-object': STATUS.Error,
  'react/void-dom-elements-no-children': STATUS.Error
};

export = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended'
  ],

  rules: REACT_RULES
};
