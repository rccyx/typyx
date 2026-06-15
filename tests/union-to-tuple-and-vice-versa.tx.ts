import type { Is, Expect } from './__assertion';
import type { TupleToUnion, UnionToTuple } from '../src';

export type _UnionToTupleStringLiterals = Expect<
  Is<UnionToTuple<'a' | 'b' | 'c'>, ['a', 'b', 'c']>
>;

export type _UnionToTupleNever = Expect<Is<UnionToTuple<never>, []>>;

export type _TupleToUnionStringLiterals = Expect<
  Is<TupleToUnion<['a', 'b', 'c']>, 'a' | 'b' | 'c'>
>;

export type _TupleToUnionEmptyTuple = Expect<Is<TupleToUnion<[]>, never>>;
