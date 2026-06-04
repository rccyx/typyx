import { Numeric } from '../primitives';
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
