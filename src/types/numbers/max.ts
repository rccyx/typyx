import { Numeric } from '../primitives';
import { Abs, IsNegative } from './math';
import { _MinPositive } from './min';

export type _MaxPositive<
  A extends Numeric,
  B extends Numeric,
  A1 extends Numeric = A,
  B1 extends Numeric = B,
  areAllNegative extends boolean = false,
> = A extends _MinPositive<A, B>
  ? areAllNegative extends true
    ? A1
    : B1
  : areAllNegative extends true
    ? B1
    : A1;

export type _MaxNegative<
  A extends Numeric,
  B extends Numeric,
  A1 extends Numeric,
  B1 extends Numeric,
> = A extends _MinPositive<A, B> ? A1 : B1;

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
