type ArrayValue<T> = T extends readonly unknown[] ? T[number] : T;

/**
 * Calculates the intersection of the types within an array `Arr` of tuple types.
 * @returns
 * The types present in every tuple, if any.
 * @example
 * ```ts
 * ArrayIntersection<[[1, 0, 1], [0, 1, -1], [0, 0, 1]]>; // 0 | 1
 * ArrayIntersection<[[1, 0], [0, 1], [0, 0]]>; // 0
 * ArrayIntersection<[[1, 0], [-1, -1], [-8, -9]]>; // never
 * ```
 */
export type ArrayIntersection<Arr extends readonly unknown[]> =
  Arr extends readonly [infer First, ...infer Rest]
    ? Extract<ArrayValue<First>, ArrayIntersection<Rest>>
    : unknown;
