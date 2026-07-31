import { Keys } from '../objects';
import { Primitive } from '../primitives';

/**
 * Transposes a matrix (2D array) by converting rows into columns and columns into rows
 * @typeParam M The input matrix type (2D array of primitives)
 * @typeParam N Helper type representing the first row of the matrix (default: M[0])
 * @example
 * ```ts
 * type Matrix = [
 *   [1, 2, 3],
 *   [4, 5, 6]
 * ];
 * Transpose<Matrix>; // Result: [[1, 4], [2, 5], [3, 6]]
 * ```
 */
export type Transpose<
  M extends Primitive[][],
  N extends Primitive[] = M[0],
> = M extends []
  ? []
  : {
      [KN in Keys<N>]: {
        [KM in Keys<M>]: KN extends Keys<M[KM]> ? M[KM][KN] : never;
      };
    };
