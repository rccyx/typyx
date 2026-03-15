import { EmptyObject } from '../primitives';
import { Simplify } from '../utils';
import type { Keys } from './keys';

/**
 * @hidden
 */
type _OptionalKeys<T extends object> = {
  [K in Keys<T>]-?: EmptyObject extends Pick<T, K> ? K : never;
}[Keys<T>];

/**
 * @hidden
 */
type _RequiredKeys<T extends object> = Exclude<Keys<T>, _OptionalKeys<T>>;

/**
 * Constructs a new type from `T` where the specified keys `K` become optional,
 * while all other keys preserve their original modifiers.
 *
 * Unlike the naive `Omit<T, K> & Partial<Pick<T, K>>` form, this version also
 * preserves keys that were already optional in `T`, which makes it safer for
 * exact type-equality tests and library-grade type transforms.
 *
 * @template T The original object type.
 * @template K The keys within `T` that should be made optional.
 *
 * @example
 * ```ts
 * type User = {
 *   id: string;
 *   name: string;
 *   email: string;
 * };
 *
 * type Result = MakeOptional<User, 'email'>;
 *
 * // {
 * //   id: string;
 * //   name: string;
 * //   email?: string;
 * // }
 * ```
 *
 * @example
 * ```ts
 * type Config = {
 *   host?: string;
 *   port: number;
 *   secure: boolean;
 * };
 *
 * type Result = MakeOptional<Config, 'secure'>;
 *
 * // {
 * //   host?: string;
 * //   port: number;
 * //   secure?: boolean;
 * // }
 * ```
 */
export type MakeOptional<T extends object, K extends Keys<T>> = Simplify<
  Pick<T, Exclude<_RequiredKeys<T>, K>> &
    Partial<Pick<T, Extract<Keys<T>, _OptionalKeys<T> | K>>>
>;

/**
 * Constructs a new type from `T` where the specified keys `K` become required,
 * while all other keys preserve their original modifiers.
 *
 * This version correctly handles keys that were originally optional by using
 * `Required<Pick<...>>`, which removes the optional modifier in the same style
 * as TypeScript's built-in `Required<T>`.
 *
 * @template T The original object type.
 * @template K The keys within `T` that should be made required.
 *
 * @example
 * ```ts
 * type Config = {
 *   host?: string;
 *   port?: number;
 *   secure: boolean;
 * };
 *
 * type Result = MakeRequired<Config, 'host' | 'port'>;
 *
 * // {
 * //   host: string;
 * //   port: number;
 * //   secure: boolean;
 * // }
 * ```
 *
 * @example
 * ```ts
 * type User = {
 *   id?: string;
 *   name: string;
 *   email?: string;
 * };
 *
 * type Result = MakeRequired<User, 'id'>;
 *
 * // {
 * //   id: string;
 * //   name: string;
 * //   email?: string;
 * // }
 * ```
 */
export type MakeRequired<T extends object, K extends Keys<T>> = Simplify<
  Required<Pick<T, Extract<Keys<T>, _RequiredKeys<T> | K>>> &
    Partial<Pick<T, Exclude<_OptionalKeys<T>, K>>>
>;
