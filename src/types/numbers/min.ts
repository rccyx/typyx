import { Numeric } from '../primitives';

export type MinPositive<
  N1 extends Numeric,
  N2 extends Numeric,
  L extends unknown[] = [],
> = L['length'] extends N1 | N2
  ? L['length'] extends N1
    ? N1
    : N2
  : MinPositive<N1, N2, [-1, ...L]>;

export type MinNegative<
  A extends Numeric,
  B extends Numeric,
  A1 extends Numeric,
  B1 extends Numeric,
> = A extends MinPositive<A, B> ? B1 : A1;
