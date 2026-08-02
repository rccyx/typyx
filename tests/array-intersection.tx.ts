import type { Is, Expect } from './__assertion';
import type { ArrayIntersection } from '../src';

export type _ArrayIntersectionEmpty = Expect<
  Is<ArrayIntersection<[]>, unknown>
>;

export type _ArrayIntersectionSingleTuple = Expect<
  Is<ArrayIntersection<[[1, 2, 3]]>, 1 | 2 | 3>
>;

export type _ArrayIntersectionMultipleTuplesWithOverlap = Expect<
  Is<ArrayIntersection<[[1, 0, 1], [0, 1, -1], [0, 0, 1]]>, 0 | 1>
>;

export type _ArrayIntersectionSingleOverlap = Expect<
  Is<ArrayIntersection<[[1, 0], [0, 1], [0, 0]]>, 0>
>;

export type _ArrayIntersectionNoOverlap = Expect<
  Is<ArrayIntersection<[[1, 0], [-1, -1], [-8, -9]]>, never>
>;

export type _ArrayIntersectionStrings = Expect<
  Is<ArrayIntersection<[['a', 'b'], ['b', 'c'], ['b', 'd']]>, 'b'>
>;

export type _ArrayIntersectionObjects = Expect<
  Is<
    ArrayIntersection<
      [[{ type: 'a' }, { type: 'b' }], [{ type: 'b' }, { type: 'c' }]]
    >,
    { type: 'b' }
  >
>;

export type _ArrayIntersectionMixedTypes = Expect<
  Is<ArrayIntersection<[[string | number], [number | boolean]]>, number>
>;