import type { Is, Expect } from './__assertion';
import type { Transpose } from '../src';
import { describe, it } from 'vitest';

describe('Transpose', () => {
  it('transposes a 2x3 matrix into a 3x2 matrix', () => {
    type Matrix = [[1, 2, 3], [4, 5, 6]];
    type Expected = [[1, 4], [2, 5], [3, 6]];

    type _ = Expect<Is<Transpose<Matrix>, Expected>>;
  });

  it('transposes a 2x2 square matrix', () => {
    type Matrix = [['a', 'b'], ['c', 'd']];
    type Expected = [['a', 'c'], ['b', 'd']];

    type _ = Expect<Is<Transpose<Matrix>, Expected>>;
  });

  it('transposes a single-row matrix into a single-column matrix (1x3 -> 3x1)', () => {
    type Matrix = [[1, 2, 3]];
    type Expected = [[1], [2], [3]];

    type _ = Expect<Is<Transpose<Matrix>, Expected>>;
  });

  it('transposes a single-column matrix into a single-row matrix (3x1 -> 1x3)', () => {
    type Matrix = [[1], [2], [3]];
    type Expected = [[1, 2, 3]];

    type _ = Expect<Is<Transpose<Matrix>, Expected>>;
  });

  it('handles 1x1 single element matrix', () => {
    type Matrix = [[42]];
    type Expected = [[42]];

    type _ = Expect<Is<Transpose<Matrix>, Expected>>;
  });

  it('handles empty matrix', () => {
    type Matrix = [];
    type Expected = [];

    type _ = Expect<Is<Transpose<Matrix>, Expected>>;
  });

  it('preserves mixed primitive types across rows and columns', () => {
    type Matrix = [[1, 'foo', true], [2, 'bar', false]];
    type Expected = [[1, 2], ['foo', 'bar'], [true, false]];

    type _ = Expect<Is<Transpose<Matrix>, Expected>>;
  });

  it('handles nullable and symbol primitives inside matrix', () => {
    type Sym1 = symbol;
    type Sym2 = symbol;
    type Matrix = [[null, undefined], [Sym1, Sym2]];
    type Expected = [[null, Sym1], [undefined, Sym2]];

    type _ = Expect<Is<Transpose<Matrix>, Expected>>;
  });
});
