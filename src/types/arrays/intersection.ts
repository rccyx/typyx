
/**
 * Calculates the intersection of the types within an array `Arr` of tuple types.
 * @returns
 * The types that repeat, if exists
 * @example
 * ```ts
 * ArrayIntersection<[[1, 0, 1], [0, 1, -1], [0, 0, 1]]>; // 0 | 1
 * ArrayIntersection<[[1, 0], [0, 1], [0, 0]]>; // 0
 * ArrayIntersection<[[1, 0], [-1, -1], [-8, -9]]>; // never
 * ```
 */
export type ArrayIntersection<Arr extends unknown[]> = Arr extends [
  infer S,
  ...infer E,
]
  ? (S extends unknown[] ? S[number] : S) & ArrayIntersection<E>
  : unknown;
