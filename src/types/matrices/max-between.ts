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
