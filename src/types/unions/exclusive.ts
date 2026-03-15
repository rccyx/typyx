import type { Simplify } from '../utils';

/**
 * @hidden
 */
type _KeysOfUnion<T> = T extends T ? keyof T : never;

/**
 * @hidden
 */
type _ExclusiveUnionMember<
  T extends object,
  AllKeys extends PropertyKey,
> = Simplify<T & Partial<Record<Exclude<AllKeys, keyof T>, never>>>;

/**
 * Constructs a strict exclusive union from a union of object types.
 *
 * Each member keeps its own properties unchanged, while properties that belong
 * to other union members are added as optional `never` fields.
 *
 * This makes the union mutually exclusive at the type level and is especially
 * useful for configuration objects, variant props, and discriminated unions.
 *
 * @template T The union of object types to make exclusive.
 * @template AllKeys The full key set across all members of `T`.
 *
 * @example
 * ```ts
 * type Config = ExclusiveUnion<
 *   | { dbConnectionString: string; maxConnections: number }
 *   | { apiEndpoint: string; apiKey: string }
 * >;
 *
 * // Result:
 * // | {
 * //     dbConnectionString: string;
 * //     maxConnections: number;
 * //     apiEndpoint?: never;
 * //     apiKey?: never;
 * //   }
 * // | {
 * //     dbConnectionString?: never;
 * //     maxConnections?: never;
 * //     apiEndpoint: string;
 * //     apiKey: string;
 * //   }
 * ```
 */
export type ExclusiveUnion<
  T extends object,
  AllKeys extends PropertyKey = _KeysOfUnion<T>,
> = T extends unknown ? _ExclusiveUnionMember<T, AllKeys> : never;
