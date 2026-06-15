import type { Is, Expect } from './../__assertion';
import type { Zip } from '../../src';

export type _ZipPairsElementsByIndex = Expect<
  Is<Zip<[1, 2, 3], ['a', 'b', 'c']>, [[1, 'a'], [2, 'b'], [3, 'c']]>
>;

export type _ZipPreservesElementTypes = Expect<
  Is<
    Zip<[string, number], [boolean, Date]>,
    [[string, boolean], [number, Date]]
  >
>;

export type _ZipStopsWhenFirstTupleEnds = Expect<
  Is<Zip<[1, 2], ['a', 'b', 'c']>, [[1, 'a'], [2, 'b']]>
>;

export type _ZipStopsWhenSecondTupleEnds = Expect<
  Is<Zip<[1, 2, 3], ['a']>, [[1, 'a']]>
>;

export type _ZipEmptyTuples = Expect<Is<Zip<[], []>, []>>;

export type _ZipEmptySecondTuple = Expect<Is<Zip<[1, 2, 3], []>, []>>;

export type _ZipEmptyFirstTuple = Expect<Is<Zip<[], [1, 2, 3]>, []>>;

export type _ZipSingleElementTuples = Expect<Is<Zip<[1], ['a']>, [[1, 'a']]>>;

export type _ZipNestedTuples = Expect<
  Is<Zip<[[1], [2]], [['a'], ['b']]>, [[[1], ['a']], [[2], ['b']]]>
>;

export type _ZipPreservesUnionsInsideElements = Expect<
  Is<Zip<[1 | 2, 3], ['a', 'b' | 'c']>, [[1 | 2, 'a'], [3, 'b' | 'c']]>
>;

export type _ZipSupportsIndexedAccess = Expect<
  Is<Zip<[1, 2], ['a', 'b']>[0], [1, 'a']>
>;
