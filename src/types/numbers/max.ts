import { Numeric } from '../primitives';
import { Abs, IsNegative } from './math';
import { MinPositive } from './min';

export type MaxPositive<
  A extends Numeric,
  B extends Numeric,
  A1 extends Numeric = A,
  B1 extends Numeric = B,
  areAllNegative extends boolean = false,
> = A extends MinPositive<A, B>
  ? areAllNegative extends true
    ? A1
    : B1
  : areAllNegative extends true
    ? B1
    : A1;

export type MaxNegative<
  A extends Numeric,
  B extends Numeric,
  A1 extends Numeric,
  B1 extends Numeric,
> = A extends MinPositive<A, B> ? A1 : B1;

export type Max<
  A extends Numeric,
  B extends Numeric,
> = IsNegative<A> extends true
  ? IsNegative<B> extends true
    ? MaxNegative<Abs<A>, Abs<B>, A, B>
    : B
  : IsNegative<B> extends true
    ? A
    : MaxPositive<A, B>;
