export const STATUS = {
  None: 'off',
  Warn: 'warn',
  Error: 'error'
} as const;

export const ORDERING = [
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

export const BANNED_TYPES = {
  Boolean: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
  Function:
    'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
  Number: 'Avoid using the `Number` type. Did you mean `number`?',
  Object: 'Avoid using the `Object` type. Did you mean `object`?',
  String: 'Avoid using the `String` type. Did you mean `string`?',
  Symbol: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
};
