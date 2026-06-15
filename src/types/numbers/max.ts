import { Abs, IsNegative } from './math';
import { Numeric } from '../primitives';
import { _MinPositive } from './min';

/**
 * Returns the larger of two non-negative numeric literals.
 *
 * This is the unsigned comparison primitive behind {@link Max}. It reuses
 * {@link _MinPositive} to find the smaller operand, then returns the other one.
 *
 * @internal
 *
 * @example
 * ```ts
 * type A = _MaxPositive<3, 7>;
 * //   ^? 7
 * ```
 */
export type _MaxPositive<
  A extends Numeric,
  B extends Numeric,
> = A extends _MinPositive<A, B> ? B : A;

/**
 * Returns the larger original negative operand from two positive magnitudes.
 *
 * Negative numbers compare in the opposite direction of their absolute values:
 * `-4` is larger than `-9`, while `4` is smaller than `9`.
 *
 * @internal
 *
 * @example
 * ```ts
 * type A = _MaxNegative<9, 4, -9, -4>;
 * //   ^? -4
 * ```
 */
export type _MaxNegative<
  A extends Numeric,
  B extends Numeric,
  A1 extends Numeric,
  B1 extends Numeric,
> = A extends _MinPositive<A, B> ? A1 : B1;

/**
 * Returns the larger of two numeric literals.
 *
 * Handles positive literals, negative literals, mixed signs, and zero.
 *
 * @example
 * ```ts
 * type A = Max<3, 7>;
 * //   ^? 7
 *
 * type B = Max<-9, -4>;
 * //   ^? -4
 *
 * type C = Max<-3, 0>;
 * //   ^? 0
 * ```
 */
export type Max<
  A extends Numeric,
  B extends Numeric,
> = IsNegative<A> extends true
  ? IsNegative<B> extends true
    ? _MaxNegative<Abs<A>, Abs<B>, A, B>
    : B
  : IsNegative<B> extends true
    ? A
    : _MaxPositive<A, B>;
