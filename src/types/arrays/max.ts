import { Max } from '../numbers';
import { Numeric } from '../primitives';

/**
 * Extracts the maximum numeric value in a given Array
 * @example
 * ```ts
 * ArrayMax<[-54, 2, 0, 999, 69, 2]>; // Result: 999
 * ArrayMax<[-54, -2, -90, -72, -69, -202]>; // Result: -2
 * ```
 */
export type ArrayMax<
  Arr extends Numeric[],
  M extends Numeric = Arr[0],
  Initial extends boolean = true,
> = Arr['length'] extends 0
  ? Initial extends true
    ? never
    : M
  : Arr extends [infer A extends Numeric, ...infer B extends Numeric[]]
    ? ArrayMax<B, Max<A, M>, false>
    : M;
