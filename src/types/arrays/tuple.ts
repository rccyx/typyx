import type { PositiveInteger } from '../numbers/integer';

/**
 * Represents a tuple.
 * @example
 * ````ts
 * Tuple<['a', 'b']>; // Result: ['a', 'b']
 * Tuple<string[]>; // Result: never
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
 *
 * Represents a tuple of size `N`, where `N` is a positive integer.
 * The tuple's length is exactly `N`, with each element of the tuple being of type `T`.
 *
 * @template T The type of the elements in the tuple.
 * @template N The desired length of the tuple.
 * @template Acc Accumulator type for recursive construction.
 *
 * @example
 * ```
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
 * const valid: NonEmptyArray<number> = [1]; // ✅
 * const invalid: NonEmptyArray<number> = []; // ❌ Type error
 */
export type NonEmptyArray<T> = [T, ...T[]];
