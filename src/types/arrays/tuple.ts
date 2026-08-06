import type { PositiveInteger } from '../numbers/integer';
import type { StringifyPrimitive } from '../strings';

/**
 * Represents a tuple.
 *
 * @example
 * ```ts
 * Tuple<['a', 'b']>; // Result: ['a', 'b']
 * Tuple<string[]>; // Result: never
 * ```
 */
export type Tuple<T> = T extends readonly unknown[]
  ? number extends T['length']
    ? never
    : T
  : never;

type BuildSizedTuple<
  T,
  N extends number,
  Acc extends T[] = [],
> = Acc['length'] extends N ? Acc : BuildSizedTuple<T, N, [...Acc, T]>;

/**
 * Represents a tuple of size `N`, where `N` is a positive integer.
 * The tuple's length is exactly `N`, with each element of the tuple being of type `T`.
 *
 * @template T The type of the elements in the tuple.
 * @template N The desired length of the tuple.
 * @template Acc Accumulator type for recursive construction.
 *
 * @example
 * ```ts
 * SizedTuple<string, 3>; // Result: [string, string, string]
 * SizedTuple<number, 2>; // Result: [number, number]
 * SizedTuple<number, 0>; // Result: []
 * ```
 *
 * @see Tuple
 */
export type SizedTuple<T, N extends number> = number extends N
  ? T[]
  : N extends 0
    ? []
    : N extends PositiveInteger<N>
      ? BuildSizedTuple<T, N>
      : never;

/**
 * Represents a non-empty array of elements of type `T`.
 * Ensures that the array has at least one item.
 *
 * @example
 * ```ts
 * const valid: NonEmptyArray<number> = [1]; // ✅
 * const invalid: NonEmptyArray<number> = []; // ❌ Type error
 * ```
 */
export type NonEmptyArray<T> = [T, ...T[]];

/**
 * Extracts a union of all duplicate elements present within a tuple.
 * Returns `never` if all tuple elements are unique or if the tuple is empty.
 *
 * @template T The tuple to evaluate for duplicate elements.
 * @template Seen Internal set accumulator tracking previously encountered elements.
 *
 * @example
 * ```ts
 * TupleDuplicates<['a', 'b', 'a']>; // Result: 'a'
 * TupleDuplicates<[1, 2, 3, 1, 2]>; // Result: 1 | 2
 * TupleDuplicates<['a', 'b', 'c']>; // Result: never
 * ```
 *
 * @see NoTupleDuplicates
 */
export type TupleDuplicates<T, Seen = never> = T extends readonly [
  infer Head,
  ...infer Tail,
]
  ? Head extends Seen
    ? Head | TupleDuplicates<Tail, Seen>
    : TupleDuplicates<Tail, Seen | Head>
  : never;

/**
 * Enforces tuple element uniqueness at compile time.
 * Resolves to `unknown` if the tuple contains no duplicates. If duplicates are found,
 * it returns an object type containing custom error keys to trigger a TypeScript error.
 *
 * @template T The tuple type to validate for duplicate values.
 * @template Message Prefix string used to construct readable compile-time error keys.
 *
 * @example
 * ```ts
 * type Valid = NoTupleDuplicates<['a', 'b', 'c']>;
 * // Result: unknown ✅
 *
 * type Invalid = NoTupleDuplicates<['a', 'b', 'a']>;
 * // Result: { readonly 'Duplicate tuple value: a': never } ❌
 *
 * type CustomError = NoTupleDuplicates<
 *   ['DATABASE_URL', 'DATABASE_URL'],
 *   'Duplicate ignored env variable'
 * >;
 * // Result: { readonly 'Duplicate ignored env variable: DATABASE_URL': never } ❌
 * ```
 *
 * @see TupleDuplicates
 */
export type NoTupleDuplicates<
  T extends readonly unknown[],
  Message extends string = 'Duplicate tuple value',
> = TupleDuplicates<T> extends never
  ? unknown
  : {
      readonly [K in StringifyPrimitive<
        TupleDuplicates<T>
      > as `${Message}: ${K}`]: never;
    };
