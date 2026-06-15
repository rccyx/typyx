import type { Is, Expect } from './../__assertion';
import type { Append, Head, Last, Pop, Prepend, Tail } from '../../src';

export type _HeadNumericTuple = Expect<Is<Head<[1, 2, 3]>, 1>>;

export type _HeadStringTuple = Expect<Is<Head<['a', 'b', 'c']>, 'a'>>;

export type _HeadEmptyTuple = Expect<Is<Head<[]>, never>>;

export type _HeadSingleItemTuple = Expect<Is<Head<[true]>, true>>;

export type _LastNumericTuple = Expect<Is<Last<[1, 2, 3]>, 3>>;

export type _LastStringTuple = Expect<Is<Last<['a', 'b', 'c']>, 'c'>>;

export type _LastEmptyTuple = Expect<Is<Last<[]>, never>>;

export type _LastSingleItemTuple = Expect<Is<Last<[true]>, true>>;

export type _TailNumericTuple = Expect<Is<Tail<[1, 2, 3]>, [2, 3]>>;

export type _TailStringTuple = Expect<Is<Tail<['a', 'b', 'c']>, ['b', 'c']>>;

export type _TailEmptyTuple = Expect<Is<Tail<[]>, []>>;

export type _TailSingleItemTuple = Expect<Is<Tail<[1]>, []>>;

export type _PopNumericTuple = Expect<Is<Pop<[1, 2, 3]>, [1, 2]>>;

export type _PopStringTuple = Expect<Is<Pop<['a', 'b', 'c']>, ['a', 'b']>>;

export type _PopEmptyTuple = Expect<Is<Pop<[]>, []>>;

export type _PopSingleItemTuple = Expect<Is<Pop<[1]>, []>>;

export type _AppendNumericTuple = Expect<Is<Append<[1, 2], 3>, [1, 2, 3]>>;

export type _AppendStringTuple = Expect<
  Is<Append<['a', 'b'], 'c'>, ['a', 'b', 'c']>
>;

export type _AppendEmptyTuple = Expect<Is<Append<[], 1>, [1]>>;

export type _PrependNumericTuple = Expect<Is<Prepend<[2, 3], 1>, [1, 2, 3]>>;

export type _PrependStringTuple = Expect<
  Is<Prepend<['b', 'c'], 'a'>, ['a', 'b', 'c']>
>;

export type _PrependEmptyTuple = Expect<Is<Prepend<[], 1>, [1]>>;

export type _PopThenAppendComposition = Expect<
  Is<Append<Pop<[1, 2, 3]>, 4>, [1, 2, 4]>
>;

export type _TailThenPrependComposition = Expect<
  Is<Prepend<Tail<[1, 2, 3]>, 0>, [0, 2, 3]>
>;
