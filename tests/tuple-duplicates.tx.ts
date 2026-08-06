import type { Is, Expect } from './__assertion';
import type { TupleDuplicates, NoTupleDuplicates, Not } from '../src';

export type _TupleDuplicatesEmpty = Expect<Is<TupleDuplicates<[]>, never>>;
export type _TupleDuplicatesSingle = Expect<Is<TupleDuplicates<['a']>, never>>;
export type _TupleDuplicatesNone = Expect<
  Is<TupleDuplicates<['a', 'b']>, never>
>;

export type _TupleDuplicatesStrings = Expect<
  Is<TupleDuplicates<['a', 'b', 'a', 'c', 'b']>, 'a' | 'b'>
>;

export type _TupleDuplicatesNumbers = Expect<
  Is<TupleDuplicates<[1, 2, 3, 1]>, 1>
>;

export type _TupleDuplicatesBooleans = Expect<
  Is<TupleDuplicates<[true, false, true]>, true>
>;

export type _TupleDuplicatesNullish = Expect<
  Is<TupleDuplicates<[null, undefined, null]>, null>
>;

export type _NoTupleDuplicatesEmpty = Expect<
  Is<NoTupleDuplicates<[]>, unknown>
>;
export type _NoTupleDuplicatesValid = Expect<
  Is<NoTupleDuplicates<['A', 'B']>, unknown>
>;

export type _NoTupleDuplicatesString = Expect<
  Is<
    NoTupleDuplicates<['A', 'B', 'A']>,
    { readonly 'Duplicate tuple value: A': never }
  >
>;

export type _NoTupleDuplicatesCustomMessage = Expect<
  Is<
    NoTupleDuplicates<['A', 'B', 'A'], 'Duplicate Env'>,
    { readonly 'Duplicate Env: A': never }
  >
>;


export type _NoTupleDuplicatesCustomMessageNegation = Expect<
  Is<Not<
    NoTupleDuplicates<['A', 'B', 'A'], 'Duplicate Env'>,
    { readonly 'Duplicate zEnv: A': never }
  >
>>;

export type _NoTupleDuplicatesNumber = Expect<
  Is<
    NoTupleDuplicates<[1, 2, 1]>,
    { readonly 'Duplicate tuple value: 1': never }
  >
>;

// Fails because K & PropertyKey drops booleans entirely
export type _NoTupleDuplicatesBoolean = Expect<
  Is<
    NoTupleDuplicates<[true, false, true]>,
    { readonly 'Duplicate tuple value: true': never }
  >
>;

// Fails because K & PropertyKey drops null entirely
export type _NoTupleDuplicatesNull = Expect<
  Is<
    NoTupleDuplicates<[null, undefined, null]>,
    { readonly 'Duplicate tuple value: null': never }
  >
>;

// Multiple distinct primitive duplicates
export type _NoTupleDuplicatesMixedPrimitives = Expect<
  Is<
    NoTupleDuplicates<['a', 1, true, 'a', 1, true]>,
    {
      readonly 'Duplicate tuple value: a': never;
      readonly 'Duplicate tuple value: 1': never;
      readonly 'Duplicate tuple value: true': never;
    }
  >
>;
