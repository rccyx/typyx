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
