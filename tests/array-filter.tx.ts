import type { Is, Expect } from './__assertion';
import type { ArrayFilter } from '../src';

type Falsy = 0 | '' | false | null | undefined | 0n;

export type _ArrayFilterEmptyArray = Expect<Is<ArrayFilter<[], number>, []>>;

export type _ArrayFilterNoMatches = Expect<
  Is<ArrayFilter<[1, 2, 3], string>, []>
>;

export type _ArrayFilterAllMatches = Expect<
  Is<ArrayFilter<[1, 2, 3], number>, [1, 2, 3]>
>;

export type _ArrayFilterSingleValue = Expect<
  Is<ArrayFilter<[0, 1, 2, 3], 0>, [0]>
>;

export type _ArrayFilterPreservesOrder = Expect<
  Is<ArrayFilter<[1, 'a', 2, 'b', 3], number>, [1, 2, 3]>
>;

export type _ArrayFilterUnionPredicate = Expect<
  Is<ArrayFilter<[0, 1, 2, 3], 0 | 1>, [0, 1]>
>;

export type _ArrayFilterRepeatedMatches = Expect<
  Is<ArrayFilter<['7', 1, 2, 7, 7, 7, 7], 7>, [7, 7, 7, 7]>
>;

export type _ArrayFilterFalsyValues = Expect<
  Is<
    ArrayFilter<[0, 1, 2, '', 'hello', false, null], Falsy>,
    [0, '', false, null]
  >
>;

export type _ArrayFilterPrimitiveTypes = Expect<
  Is<ArrayFilter<[string, number, boolean, string], string>, [string, string]>
>;

export type _ArrayFilterObjectTypes = Expect<
  Is<
    ArrayFilter<[{ a: 1 }, { b: 2 }, { a: 2 }], { a: number }>,
    [{ a: 1 }, { a: 2 }]
  >
>;

export type _ArrayFilterNeverPredicate = Expect<
  Is<ArrayFilter<[1, 2, 3], never>, []>
>;

export type _ArrayFilterSubtypes = Expect<
  Is<ArrayFilter<['a', 'b', string, 123], 'a' | 'b'>, ['a', 'b']>
>;
