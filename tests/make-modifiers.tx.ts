import type { Is, Expect } from './__assertion';
import type { MakeOptional, MakeRequired } from '../src';

export type _MakeOptionalSingleKey = Expect<
  Is<
    MakeOptional<{ a: number; b: string; c: boolean }, 'b'>,
    { a: number; b?: string; c: boolean }
  >
>;

export type _MakeOptionalMultipleKeys = Expect<
  Is<
    MakeOptional<{ a: number; b: string; c: boolean }, 'b' | 'c'>,
    { a: number; b?: string; c?: boolean }
  >
>;

export type _MakeOptionalPreservesOtherKeys = Expect<
  Is<
    MakeOptional<{ id: string; name: string; email: string }, 'email'>,
    { id: string; name: string; email?: string }
  >
>;

export type _MakeOptionalPreservesAlreadyOptionalKey = Expect<
  Is<MakeOptional<{ a?: number; b: string }, 'a'>, { a?: number; b: string }>
>;

export type _MakeOptionalEmptyKeys = Expect<
  Is<MakeOptional<{ a: number; b: string }, never>, { a: number; b: string }>
>;

export type _MakeOptionalAllKeys = Expect<
  Is<
    MakeOptional<{ a: number; b: string }, 'a' | 'b'>,
    { a?: number; b?: string }
  >
>;

export type _MakeOptionalPreservesReadonly = Expect<
  Is<
    MakeOptional<{ readonly a: number; b: string }, 'b'>,
    { readonly a: number; b?: string }
  >
>;

export type _MakeOptionalPreservesUnionPropertyTypes = Expect<
  Is<
    MakeOptional<{ a: string | number; b: boolean }, 'a'>,
    { a?: string | number; b: boolean }
  >
>;

export type _MakeOptionalIdempotent = Expect<
  Is<
    MakeOptional<MakeOptional<{ a: number; b: string }, 'a'>, 'a'>,
    { a?: number; b: string }
  >
>;

export type _MakeRequiredSingleKey = Expect<
  Is<
    MakeRequired<{ a?: number; b?: string; c: boolean }, 'a'>,
    { a: number; b?: string; c: boolean }
  >
>;

export type _MakeRequiredMultipleKeys = Expect<
  Is<
    MakeRequired<{ a?: number; b?: string; c?: boolean }, 'a' | 'b'>,
    { a: number; b: string; c?: boolean }
  >
>;

export type _MakeRequiredPreservesOtherKeys = Expect<
  Is<
    MakeRequired<{ id?: string; name: string; email?: string }, 'id'>,
    { id: string; name: string; email?: string }
  >
>;

export type _MakeRequiredPreservesAlreadyRequiredKey = Expect<
  Is<MakeRequired<{ a: number; b?: string }, 'a'>, { a: number; b?: string }>
>;

export type _MakeRequiredEmptyKeys = Expect<
  Is<
    MakeRequired<{ a?: number; b?: string }, never>,
    { a?: number; b?: string }
  >
>;

export type _MakeRequiredAllKeys = Expect<
  Is<
    MakeRequired<{ a?: number; b?: string }, 'a' | 'b'>,
    { a: number; b: string }
  >
>;

export type _MakeRequiredPreservesReadonly = Expect<
  Is<
    MakeRequired<{ readonly a?: number; b?: string }, 'a'>,
    { readonly a: number; b?: string }
  >
>;

export type _MakeRequiredPreservesExplicitUndefined = Expect<
  Is<
    MakeRequired<{ a?: number | undefined; b: string }, 'a'>,
    { a: number | undefined; b: string }
  >
>;

export type _MakeRequiredIdempotent = Expect<
  Is<
    MakeRequired<MakeRequired<{ a?: number; b?: string }, 'a'>, 'a'>,
    { a: number; b?: string }
  >
>;

export type _MakeRequiredOptionalRoundtrip = Expect<
  Is<
    MakeOptional<MakeRequired<{ a?: number; b: string }, 'a'>, 'a'>,
    { a?: number; b: string }
  >
>;
