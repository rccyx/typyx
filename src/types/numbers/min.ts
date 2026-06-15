import { Abs, IsNegative } from './math';
import { Numeric } from '../primitives';

/**
 * Returns the smaller of two non-negative numeric literals.
 *
 * This is the unsigned comparison primitive behind {@link Min}. It walks a tuple
 * from `0` upward until one of the two operands is reached.
 *
 * @internal
 *
 * @example
 * ```ts
 * type A = _MinPositive<3, 7>;
 * //   ^? 3
 * ```
 */
export type _MinPositive<
  N1 extends Numeric,
  N2 extends Numeric,
  L extends unknown[] = [],
> = L['length'] extends N1 | N2
  ? L['length'] extends N1
    ? N1
    : N2
  : _MinPositive<N1, N2, [-1, ...L]>;

/**
 * Returns the smaller original negative operand from two positive magnitudes.
 *
 * Negative numbers compare in the opposite direction of their absolute values:
 * `-9` is smaller than `-4`, while `9` is larger than `4`.
 *
 * @internal
 *
 * @example
 * ```ts
 * type A = _MinNegative<9, 4, -9, -4>;
 * //   ^? -9
 * ```
 */
export type _MinNegative<
  A extends Numeric,
  B extends Numeric,
  A1 extends Numeric,
  B1 extends Numeric,
> = A extends _MinPositive<A, B> ? B1 : A1;

/**
 * Returns the smaller of two numeric literals.
 *
 * Handles positive literals, negative literals, mixed signs, and zero.
 *
 * @example
 * ```ts
 * type A = Min<3, 7>;
 * //   ^? 3
 *
 * type B = Min<-9, -4>;
 * //   ^? -9
 *
 * type C = Min<-3, 0>;
 * //   ^? -3
 * ```
 */
export type Min<
  A extends Numeric,
  B extends Numeric,
> = IsNegative<A> extends true
  ? IsNegative<B> extends true
    ? _MinNegative<Abs<A>, Abs<B>, A, B>
    : A
  : IsNegative<B> extends true
    ? B
    : _MinPositive<A, B>;
