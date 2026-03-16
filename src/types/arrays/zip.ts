import { Append, Head, Tail } from './positions';

/**
 * @internal
 *
 * Recursive engine used by {@link Zip}.
 *
 * This walks both tuples simultaneously and accumulates paired entries
 * into `Acc`. On each step:
 *
 * 1. The first element of `L` and `L1` are read (`Head`).
 * 2. They are combined into a pair `[Head<L>, Head<L1>]`.
 * 3. The pair is appended to the accumulator.
 * 4. Recursion continues on the remaining elements (`Tail`).
 *
 * Recursion stops when either tuple runs out of elements.
 */
type _Zip<
  L extends unknown[],
  L1 extends unknown[],
  Acc extends unknown[] = [],
> = L extends []
  ? Acc
  : L1 extends []
    ? Acc
    : _Zip<Tail<L>, Tail<L1>, Append<Acc, [Head<L>, Head<L1>]>>;

/**
 * Pair up the entries of two tuples.
 *
 * `Zip` takes two tuple types and returns a new tuple where each element
 * is a pair containing the values from the same index in both tuples.
 *
 * The resulting tuple length is determined by the shorter input tuple.
 *
 * @typeParam L - The first tuple.
 * @typeParam L1 - The second tuple.
 *
 * @returns A tuple of paired elements.
 *
 * @example
 * ```ts
 * type Result = Zip<[1, 2, 3], ['a', 'b', 'c']>;
 * // [[1,'a'], [2,'b'], [3,'c']]
 * ```
 *
 * @example
 * ```ts
 * type Result = Zip<[1, 2], ['a', 'b', 'c']>;
 * // [[1,'a'], [2,'b']]
 * ```
 *
 * @example
 * ```ts
 * type Result = Zip<[], [1, 2, 3]>;
 * // []
 * ```
 */
export type Zip<L extends unknown[], L1 extends unknown[]> = _Zip<L, L1>;
