import {BANNED_TYPES, ORDERING, STATUS} from './constants';

const TYPESCRIPT_RULES = {
  // --- Extended/Overridden Rules
  'constructor-super': STATUS.None,
  'getter-return': STATUS.None,
  'no-const-assign': STATUS.None,
  'no-dupe-args': STATUS.None,
  'no-dupe-class-members': STATUS.None,
  'no-dupe-keys': STATUS.None,
  'no-func-assign': STATUS.None,
  'no-import-assign': STATUS.None,
  'no-new-symbol': STATUS.None,
  'no-obj-calls': STATUS.None,
  'no-redeclare': STATUS.None,
  'no-setter-return': STATUS.None,
  'no-this-before-super': STATUS.None,
  'no-undef': STATUS.None,
  'no-unreachable': STATUS.None,
  'no-unsafe-negation': STATUS.None,
  'no-var': STATUS.Error,
  'prefer-const': STATUS.Error,
  'prefer-rest-params': STATUS.Error,
  'prefer-spread': STATUS.Error,
  'valid-typeof': STATUS.None,

  'no-array-constructor': STATUS.None,
  '@typescript-eslint/no-array-constructor': STATUS.Error,

  'no-duplicate-imports': STATUS.None,
  '@typescript-eslint/no-duplicate-imports': STATUS.Error,

  'no-empty-function': STATUS.None,
  '@typescript-eslint/no-empty-function': STATUS.Error,

  'no-extra-semi': STATUS.None,
  '@typescript-eslint/no-extra-semi': STATUS.Error,

  'no-invalid-this': STATUS.None,
  '@typescript-eslint/no-invalid-this': STATUS.Error,

  'no-loss-of-precision': STATUS.None,
  '@typescript-eslint/no-loss-of-precision': STATUS.Error,

  'no-shadow': STATUS.None,
  '@typescript-eslint/no-shadow': STATUS.Error,

  'no-unused-expressions': STATUS.None,
  '@typescript-eslint/no-unused-expressions': [
    STATUS.Error,
    {allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true}
  ],

  'no-unused-vars': STATUS.None,
  '@typescript-eslint/no-unused-vars': STATUS.Warn,

  'no-use-before-define': STATUS.None,
  '@typescript-eslint/no-use-before-define': STATUS.None,

  'no-useless-constructor': STATUS.None,
  '@typescript-eslint/no-useless-constructor': STATUS.Error,

  // --- Recommended
  '@typescript-eslint/adjacent-overload-signatures': STATUS.Error,
  '@typescript-eslint/array-type': [STATUS.Error, {default: 'array-simple'}],
  '@typescript-eslint/await-thenable': STATUS.None,
  '@typescript-eslint/ban-ts-comment': STATUS.Error,
  '@typescript-eslint/ban-tslint-comment': STATUS.Warn,
  '@typescript-eslint/ban-types': [STATUS.Error, {types: BANNED_TYPES}],
  '@typescript-eslint/class-literal-property-style': [STATUS.Error, 'fields'],
  '@typescript-eslint/consistent-generic-constructors': STATUS.None,
  '@typescript-eslint/consistent-indexed-object-style': STATUS.None,
  '@typescript-eslint/consistent-type-assertions': [
    STATUS.Error,
    {assertionStyle: 'as', objectLiteralTypeAssertions: 'never'}
  ],
  '@typescript-eslint/consistent-type-definitions': [STATUS.Error, 'interface'],
  '@typescript-eslint/explicit-function-return-type': [
    STATUS.Error,
    {allowExpressions: true}
  ],
  '@typescript-eslint/explicit-member-accessibility': STATUS.Error,
  '@typescript-eslint/member-ordering': [STATUS.Error, {default: ORDERING}],
  '@typescript-eslint/method-signature-style': STATUS.Error,
  '@typescript-eslint/no-base-to-string': STATUS.None,
  '@typescript-eslint/no-confusing-non-null-assertion': STATUS.None,
  '@typescript-eslint/no-duplicate-enum-values': STATUS.Error,
  '@typescript-eslint/no-dynamic-delete': STATUS.None,
  '@typescript-eslint/no-empty-interface': [
    STATUS.Error,
    {allowSingleExtends: true}
  ],
  '@typescript-eslint/no-explicit-any': STATUS.Warn,
  '@typescript-eslint/no-extra-non-null-assertion': STATUS.Error,
  '@typescript-eslint/no-extraneous-class': STATUS.None,
  '@typescript-eslint/no-floating-promises': STATUS.None,
  '@typescript-eslint/no-for-in-array': STATUS.None,
  '@typescript-eslint/no-inferrable-types': [
    STATUS.Error,
    {ignoreParameters: true}
  ],
  '@typescript-eslint/no-invalid-void-type': STATUS.Error,
  '@typescript-eslint/no-meaningless-void-operator': STATUS.None,
  '@typescript-eslint/no-misused-new': STATUS.Error,
  '@typescript-eslint/no-misused-promises': STATUS.None,
  '@typescript-eslint/no-namespace': [
    STATUS.Error,
    {allowDeclarations: true, allowDefinitionFiles: true}
  ],
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': STATUS.Error,
  '@typescript-eslint/no-non-null-asserted-optional-chain': STATUS.Error,
  '@typescript-eslint/no-non-null-assertion': STATUS.Warn,
  '@typescript-eslint/no-require-imports': STATUS.Error,
  '@typescript-eslint/no-this-alias': [
    STATUS.Error,
    {allowDestructuring: true}
  ],
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': STATUS.None,
  '@typescript-eslint/no-unnecessary-condition': STATUS.None,
  '@typescript-eslint/no-unnecessary-qualifier': STATUS.None,
  '@typescript-eslint/no-unnecessary-type-arguments': STATUS.None,
  '@typescript-eslint/no-unnecessary-type-assertion': STATUS.None,
  '@typescript-eslint/no-unnecessary-type-constraint': STATUS.Error,
  '@typescript-eslint/no-unsafe-argument': STATUS.None,
  '@typescript-eslint/no-unsafe-assignment': STATUS.None,
  '@typescript-eslint/no-unsafe-call': STATUS.None,
  '@typescript-eslint/no-unsafe-declaration-merging': STATUS.None,
  '@typescript-eslint/no-unsafe-member-access': STATUS.None,
  '@typescript-eslint/no-unsafe-return': STATUS.None,
  '@typescript-eslint/no-useless-empty-export': STATUS.None,
  '@typescript-eslint/no-var-requires': STATUS.Error,
  '@typescript-eslint/non-nullable-type-assertion-style': STATUS.None,
  '@typescript-eslint/prefer-as-const': STATUS.Error,
  '@typescript-eslint/prefer-for-of': STATUS.Error,
  '@typescript-eslint/prefer-function-type': STATUS.Error,
  '@typescript-eslint/prefer-literal-enum-member': STATUS.None,
  '@typescript-eslint/prefer-namespace-keyword': STATUS.Error,
  '@typescript-eslint/prefer-nullish-coalescing': STATUS.None,
  '@typescript-eslint/prefer-optional-chain': STATUS.Error,
  '@typescript-eslint/prefer-reduce-type-parameter': STATUS.None,
  '@typescript-eslint/prefer-return-this-type': STATUS.None,
  '@typescript-eslint/prefer-string-starts-ends-with': STATUS.None,
  '@typescript-eslint/prefer-ts-expect-error': STATUS.Warn,
  '@typescript-eslint/restrict-plus-operands': STATUS.None,
  '@typescript-eslint/restrict-template-expressions': STATUS.None,
  '@typescript-eslint/triple-slash-reference': [
    STATUS.Error,
    {path: 'never', types: 'always', lib: 'always'}
  ],
  '@typescript-eslint/typedef': [
    STATUS.Error,
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
  '@typescript-eslint/unbound-method': STATUS.None,
  '@typescript-eslint/unified-signatures': STATUS.Error
};

export = {
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],

      parser: '@typescript-eslint/parser',

      plugins: ['@typescript-eslint'],

      rules: TYPESCRIPT_RULES
    }
  ]
};
