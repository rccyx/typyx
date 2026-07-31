import { Min } from '../numbers';
import { Numeric } from '../primitives';

/**
 * Extracts the minimum numeric value in a given Array
 * @example
 * ```ts
 * ArrayMin<[-54, 2, 0, 999, 69, 2]>; // Result: -54
 * ArrayMin<[-54, -2, -90, -72, -69, -202]>; // Result: -202
 * ```
 */
export type ArrayMin<
  Arr extends Numeric[],
  M extends Numeric = Arr[0],
  Initial extends boolean = true,
> = Arr['length'] extends 0
  ? Initial extends true
    ? never
    : M
  : Arr extends [infer A extends Numeric, ...infer B extends Numeric[]]
    ? ArrayMin<B, Min<A, M>, false>
    : M;
