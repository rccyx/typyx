/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * tuple position helpers.
 *
 * these are the basic building blocks for reading or changing
 * tuple edges in a predictable way.
 */

/**
 * get the first element of a tuple.
 * @example
 * ```ts
 * type Result1 = Head<[1, 2, 3]>; // 1
 * type Result2 = Head<[]>; // never
 * ```
 */
export type Head<Arr extends unknown[]> = Arr extends [
  infer First,
  ...unknown[],
]
  ? First
  : never;

/**
 * get the last element of a tuple.
 * @example
 * ```ts
 * type Result1 = Last<[1, 2, 3]>; // 3
 * type Result2 = Last<[]>; // never
 * ```
 */
export type Last<Arr extends unknown[]> = Arr extends [
  ...unknown[],
  infer LastItem,
]
  ? LastItem
  : never;

/**
 * remove the first element of a tuple.
 * @example
 * ```ts
 * type Result1 = Tail<[1, 2, 3]>; // [2, 3]
 * type Result2 = Tail<[1]>; // []
 * type Result3 = Tail<[]>; // []
 * ```
 */
export type Tail<Arr extends unknown[]> = Arr extends [unknown, ...infer Rest]
  ? Rest
  : [];

/**
 * remove the last element of a tuple.
 * @example
 * ```ts
 * type Result1 = Pop<[1, 2, 3]>; // [1, 2]
 * type Result2 = Pop<[1]>; // []
 * type Result3 = Pop<[]>; // []
 * ```
 */
export type Pop<Arr extends unknown[]> = Arr extends [...infer Rest, unknown]
  ? Rest
  : [];

/**
 * add an item to the end of a tuple.
 * @example
 * ```ts
 * type Result1 = Append<[1, 2], 3>; // [1, 2, 3]
 * type Result2 = Append<[], 1>; // [1]
 * ```
 */
export type Append<Arr extends unknown[], Item> = [...Arr, Item];

/**
 * add an item to the start of a tuple.
 * @example
 * ```ts
 * type Result1 = Prepend<[2, 3], 1>; // [1, 2, 3]
 * type Result2 = Prepend<[], 1>; // [1]
 * ```
 */
export type Prepend<Arr extends unknown[], Item> = [Item, ...Arr];
