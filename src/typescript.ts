const ORDERING = [
  'public-static-field',
  'protected-static-field',
  'private-static-field',
  'static-field',
  'public-static-method',
  'protected-static-method',
  'private-static-method',
  'static-method',
  'public-instance-field',
  'protected-instance-field',
  'private-instance-field',
  'public-field',
  'protected-field',
  'private-field',
  'instance-field',
  'field',
  'constructor',
  'public-instance-method',
  'protected-instance-method',
  'private-instance-method',
  'public-method',
  'protected-method',
  'private-method',
  'instance-method',
  'method'
];

const BANNED_TYPES = {
  Boolean: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
  Function: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
  Number: 'Avoid using the `Number` type. Did you mean `number`?',
  Object: 'Avoid using the `Object` type. Did you mean `object`?',
  String: 'Avoid using the `String` type. Did you mean `string`?',
  Symbol: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
};

export = {
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],

  rules: {
    // * 👀 = Try to enable the rule in the future. For now, it is too strict.

    // --- Recommended - Overrides
    // Ref. https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/recommended.ts
    '@typescript-eslint/ban-types': ['error', {types: BANNED_TYPES}],
    '@typescript-eslint/no-empty-interface': [
      'error',
      {allowSingleExtends: true}
    ],
    '@typescript-eslint/no-explicit-any': 'off', // 👀
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {ignoreParameters: true}
    ],
    '@typescript-eslint/no-namespace': [
      'error',
      {allowDeclarations: true, allowDefinitionFiles: true}
    ],
    '@typescript-eslint/no-this-alias': ['error', {allowDestructuring: true}],
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {path: 'never', types: 'always', lib: 'always'}
    ],

    // --- Basic Rules
    '@typescript-eslint/array-type': ['error', {default: 'array-simple'}],
    '@typescript-eslint/await-thenable': 'off', // 👀
    '@typescript-eslint/ban-tslint-comment': 'warn',
    '@typescript-eslint/class-literal-property-style': ['error', 'fields'],
    '@typescript-eslint/consistent-generic-constructors': 'off', // 👀
    '@typescript-eslint/consistent-indexed-object-style': 'off', // 👀
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {assertionStyle: 'as', objectLiteralTypeAssertions: 'never'}
    ],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {allowExpressions: true}
    ],
    '@typescript-eslint/explicit-member-accessibility': 'error',
    '@typescript-eslint/member-ordering': ['error', {default: ORDERING}],
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/no-base-to-string': 'off', // 👀
    '@typescript-eslint/no-confusing-non-null-assertion': 'off', // 👀
    '@typescript-eslint/no-duplicate-enum-values': 'off', // 👀
    '@typescript-eslint/no-dynamic-delete': 'off', // 👀
    '@typescript-eslint/no-extraneous-class': 'off', // 👀
    '@typescript-eslint/no-floating-promises': 'off', // 👀
    '@typescript-eslint/no-for-in-array': 'off', // 👀
    '@typescript-eslint/no-invalid-void-type': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'off', // 👀
    '@typescript-eslint/no-misused-promises': 'off', // 👀
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'off', // 👀
    '@typescript-eslint/no-unnecessary-condition': 'off', // 👀
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-arguments': 'off', // 👀
    '@typescript-eslint/no-unnecessary-type-assertion': 'off', // 👀
    '@typescript-eslint/no-unsafe-argument': 'off', // 👀
    '@typescript-eslint/no-unsafe-assignment': 'off', // 👀
    '@typescript-eslint/no-unsafe-call': 'off', // 👀
    '@typescript-eslint/no-unsafe-declaration-merging': 'off', // 👀
    '@typescript-eslint/no-unsafe-member-access': 'off', // 👀
    '@typescript-eslint/no-unsafe-return': 'off', // 👀
    '@typescript-eslint/no-useless-empty-export': 'off',
    '@typescript-eslint/non-nullable-type-assertion-style': 'off', // 👀
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'off', // 👀
    '@typescript-eslint/prefer-nullish-coalescing': 'off', // 👀
    '@typescript-eslint/prefer-optional-chain': 'off', // 👀
    '@typescript-eslint/prefer-reduce-type-parameter': 'off', // 👀
    '@typescript-eslint/prefer-return-this-type': 'off', // 👀
    '@typescript-eslint/prefer-string-starts-ends-with': 'off', // 👀
    '@typescript-eslint/prefer-ts-expect-error': 'off', // 👀
    '@typescript-eslint/restrict-plus-operands': 'off', // 👀
    '@typescript-eslint/restrict-template-expressions': 'off', // 👀
    '@typescript-eslint/typedef': [
      'error',
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: true,
        variableDeclaration: false
      }
    ],
    '@typescript-eslint/unbound-method': 'off', // 👀
    '@typescript-eslint/unified-signatures': 'error',

    // --- Extended Rules
    'no-duplicate-imports': 'off',
    '@typescript-eslint/no-duplicate-imports': 'error',

    'no-invalid-this': 'off',
    '@typescript-eslint/no-invalid-this': 'error',

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error'
  }
};
