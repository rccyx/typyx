/**
 * Represents a type that filters elements from an array based on a given predicate type.
 * @typeParam T The array to filter.
 * @typeParam P The predicate used for filtering elements from `T`.
 * @returns A new array type containing only the elements of `T` that match `P`.
 * @example
 * ```typescript
 * ArrayFilter<[0, 1, 2, 3], 0 | 1>; // Results in [0, 1]
 * ArrayFilter<[0, 1, 2], Falsy>; // Results in [0]
 * ArrayFilter<['7', 1, 2], Falsy>; // Results in []
 * ArrayFilter<['7', 1, 2, 7, 7, 7, 7], 7>; // Results in [7, 7, 7, 7]
 * ```
 */
export type ArrayFilter<T extends unknown[], P> = T extends [
  infer S,
  ...infer E,
]
  ? S extends P
    ? [S, ...ArrayFilter<E, P>]
    : ArrayFilter<E, P>
  : [];
