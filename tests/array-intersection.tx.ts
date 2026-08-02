import type { Is, Expect } from './__assertion';
import type { ArrayIntersection } from '../src';

type ObjectA = { type: 'a' };
type ObjectB = { type: 'b' };
type ObjectC = { type: 'c' };

type NestedObjectA = {
  type: 'a';
  metadata: {
    enabled: true;
  };
};

type NestedObjectB = {
  type: 'b';
  metadata: {
    enabled: false;
  };
};

type StringFunction = (value: string) => number;
type NumberFunction = (value: number) => string;

export type _ArrayIntersectionEmpty = Expect<
  Is<ArrayIntersection<[]>, unknown>
>;

export type _ArrayIntersectionSingleEmptyTuple = Expect<
  Is<ArrayIntersection<[[]]>, never>
>;

export type _ArrayIntersectionSingleTuple = Expect<
  Is<ArrayIntersection<[[1, 2, 3]]>, 1 | 2 | 3>
>;

export type _ArrayIntersectionSingleTupleWithDuplicates = Expect<
  Is<ArrayIntersection<[[1, 1, 2, 2, 3]]>, 1 | 2 | 3>
>;

export type _ArrayIntersectionMultipleTuplesWithOverlap = Expect<
  Is<ArrayIntersection<[[1, 0, 1], [0, 1, -1], [0, 0, 1]]>, 0 | 1>
>;

export type _ArrayIntersectionSingleOverlap = Expect<
  Is<ArrayIntersection<[[1, 0], [0, 1], [0, 0]]>, 0>
>;

export type _ArrayIntersectionOverlapAtDifferentPositions = Expect<
  Is<ArrayIntersection<[[1, 2, 3], [4, 3, 5], [6, 7, 3]]>, 3>
>;

export type _ArrayIntersectionDuplicatesDoNotAffectResult = Expect<
  Is<ArrayIntersection<[[1, 1, 2], [1, 1, 3], [1, 1, 4]]>, 1>
>;

export type _ArrayIntersectionNoOverlap = Expect<
  Is<ArrayIntersection<[[1, 0], [-1, -1], [-8, -9]]>, never>
>;

export type _ArrayIntersectionEmptyTupleFirst = Expect<
  Is<ArrayIntersection<[[], [1, 2], [2, 3]]>, never>
>;

export type _ArrayIntersectionEmptyTupleMiddle = Expect<
  Is<ArrayIntersection<[[1, 2], [], [2, 3]]>, never>
>;

export type _ArrayIntersectionEmptyTupleLast = Expect<
  Is<ArrayIntersection<[[1, 2], [2, 3], []]>, never>
>;

export type _ArrayIntersectionStrings = Expect<
  Is<ArrayIntersection<[['a', 'b'], ['b', 'c'], ['b', 'd']]>, 'b'>
>;

export type _ArrayIntersectionMultipleStrings = Expect<
  Is<
    ArrayIntersection<[['a', 'b', 'c'], ['b', 'c', 'd'], ['b', 'c', 'e']]>,
    'b' | 'c'
  >
>;

export type _ArrayIntersectionBooleans = Expect<
  Is<ArrayIntersection<[[true, false], [false], [false, true]]>, false>
>;

export type _ArrayIntersectionNullAndUndefined = Expect<
  Is<
    ArrayIntersection<
      [[null, undefined, 1], [undefined, 2], [undefined, null]]
    >,
    undefined
  >
>;

export type _ArrayIntersectionMixedTypes = Expect<
  Is<ArrayIntersection<[[string | number], [number | boolean]]>, number>
>;

export type _ArrayIntersectionWidenedPrimitiveTypes = Expect<
  Is<
    ArrayIntersection<[[string, number], [boolean, string], [string, bigint]]>,
    string
  >
>;

export type _ArrayIntersectionUnionTupleMembers = Expect<
  Is<ArrayIntersection<[[1 | 2, 3], [2 | 3, 4], [2 | 3, 5]]>, 2 | 3>
>;

export type _ArrayIntersectionObjects = Expect<
  Is<ArrayIntersection<[[ObjectA, ObjectB], [ObjectB, ObjectC]]>, ObjectB>
>;

export type _ArrayIntersectionMultipleObjects = Expect<
  Is<
    ArrayIntersection<
      [[ObjectA, ObjectB, ObjectC], [ObjectB, ObjectC], [ObjectA, ObjectB]]
    >,
    ObjectB
  >
>;

export type _ArrayIntersectionObjectsIgnorePosition = Expect<
  Is<
    ArrayIntersection<
      [[ObjectA, ObjectB], [ObjectC, ObjectB], [ObjectB, ObjectA]]
    >,
    ObjectB
  >
>;

export type _ArrayIntersectionObjectsDoNotMerge = Expect<
  Is<
    ArrayIntersection<
      [[{ left: true }, { shared: true }], [{ right: true }, { shared: true }]]
    >,
    { shared: true }
  >
>;

export type _ArrayIntersectionObjectsWithoutOverlap = Expect<
  Is<ArrayIntersection<[[ObjectA], [ObjectB], [ObjectC]]>, never>
>;

export type _ArrayIntersectionNestedObjects = Expect<
  Is<
    ArrayIntersection<
      [
        [NestedObjectA, NestedObjectB],
        [NestedObjectB, ObjectC],
        [ObjectA, NestedObjectB],
      ]
    >,
    NestedObjectB
  >
>;

export type _ArrayIntersectionFunctions = Expect<
  Is<
    ArrayIntersection<
      [
        [StringFunction, NumberFunction],
        [NumberFunction, StringFunction],
        [StringFunction],
      ]
    >,
    StringFunction
  >
>;

export type _ArrayIntersectionNeverMember = Expect<
  Is<ArrayIntersection<[[1, 2], [never], [2, 3]]>, never>
>;

export type _ArrayIntersectionReadonlyTuples = Expect<
  Is<
    ArrayIntersection<
      readonly [readonly [1, 2, 3], readonly [2, 3, 4], readonly [3, 5]]
    >,
    3
  >
>;

export type _ArrayIntersectionMutableAndReadonlyTuples = Expect<
  Is<ArrayIntersection<[[1, 2, 3], readonly [2, 3, 4], [3, 5]]>, 3>
>;

export type _ArrayIntersectionArrayTypes = Expect<
  Is<ArrayIntersection<[Array<1 | 2>, ReadonlyArray<2 | 3>, Array<2 | 4>]>, 2>
>;
