import { Abs, IsNegative } from './math';
import { Numeric } from '../primitives';

export type _MinPositive<
  N1 extends Numeric,
  N2 extends Numeric,
  L extends unknown[] = [],
> = L['length'] extends N1 | N2
  ? L['length'] extends N1
    ? N1
    : N2
  : _MinPositive<N1, N2, [-1, ...L]>;

export type _MinNegative<
  A extends Numeric,
  B extends Numeric,
  A1 extends Numeric,
  B1 extends Numeric,
> = A extends _MinPositive<A, B> ? B1 : A1;

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
