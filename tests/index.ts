/**
 * This is a simple typescript file on which `eslint` with generated config is ran
 * just to test that `eslint-config-contactlab` is formally correct
 */

import * as path from 'path';

export function test(_unused: unknown, is = 'is'): string {
  const [_, a, simple, Test] = ['not', 'a', 'simple', 'test'];

  return path.join('this', is, a, simple, Test);
}
