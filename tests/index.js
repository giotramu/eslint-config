/**
 * A simple JavaScript file on which `eslint` with generated config is ran
 * just to test that `@giotramu/eslint-config` is formally correct.
 */

import * as path from 'path';

export function test(_unused, is = 'is') {
  const [_, a, simple, Test] = ['not', 'a', 'simple', 'test'];

  return path.join('this', is, a, simple, Test);
}
