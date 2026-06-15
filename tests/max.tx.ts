import type { Is, Expect } from './__assertion';
import type { Max } from '../src';

// positive literals

export type _MaxPositiveAscending = Expect<Is<Max<1, 2>, 2>>;

export type _MaxPositiveDescending = Expect<Is<Max<2, 1>, 2>>;

export type _MaxPositiveLargerAscending = Expect<Is<Max<4, 9>, 9>>;

export type _MaxPositiveLargerDescending = Expect<Is<Max<9, 4>, 9>>;

// equal positive literals

export type _MaxEqualPositiveSmall = Expect<Is<Max<1, 1>, 1>>;

export type _MaxEqualPositiveLarge = Expect<Is<Max<8, 8>, 8>>;

// zero boundary

export type _MaxZeroAndPositive = Expect<Is<Max<0, 1>, 1>>;

export type _MaxPositiveAndZero = Expect<Is<Max<1, 0>, 1>>;

export type _MaxZeroAndZero = Expect<Is<Max<0, 0>, 0>>;

// zero against negative literals

export type _MaxZeroAndNegative = Expect<Is<Max<0, -1>, 0>>;

export type _MaxNegativeAndZero = Expect<Is<Max<-1, 0>, 0>>;

export type _MaxZeroAndLargerNegative = Expect<Is<Max<0, -20>, 0>>;

export type _MaxLargerNegativeAndZero = Expect<Is<Max<-20, 0>, 0>>;

// mixed signs

export type _MaxNegativeAndPositive = Expect<Is<Max<-1, 2>, 2>>;

export type _MaxPositiveAndNegative = Expect<Is<Max<2, -1>, 2>>;

export type _MaxLargeNegativeAndPositive = Expect<Is<Max<-20, 12>, 12>>;

export type _MaxPositiveAndLargeNegative = Expect<Is<Max<12, -20>, 12>>;

// negative literals

export type _MaxNegativeAscendingMagnitude = Expect<Is<Max<-1, -2>, -1>>;

export type _MaxNegativeDescendingMagnitude = Expect<Is<Max<-2, -1>, -1>>;

export type _MaxLargeNegativeAscendingMagnitude = Expect<Is<Max<-4, -9>, -4>>;

export type _MaxLargeNegativeDescendingMagnitude = Expect<Is<Max<-9, -4>, -4>>;

// equal negative literals

export type _MaxEqualNegativeSmall = Expect<Is<Max<-1, -1>, -1>>;

export type _MaxEqualNegativeLarge = Expect<Is<Max<-8, -8>, -8>>;

// larger literals and magnitudes

export type _MaxLargerPositiveAscending = Expect<Is<Max<12, 20>, 20>>;

export type _MaxLargerPositiveDescending = Expect<Is<Max<20, 12>, 20>>;

export type _MaxLargerNegativeAscending = Expect<Is<Max<-12, -20>, -12>>;

export type _MaxLargerNegativeDescending = Expect<Is<Max<-20, -12>, -12>>;

// negative equality contracts

export type _MaxPositiveDoesNotReturnMinimum = Expect<
  Is<Is<Max<12, 20>, 12>, false>
>;

export type _MaxNegativeDoesNotReturnMinimum = Expect<
  Is<Is<Max<-12, -20>, -20>, false>
>;

// nested composition

export type _MaxNestedPositive = Expect<Is<Max<Max<1, 2>, 3>, 3>>;

export type _MaxNestedNegative = Expect<Is<Max<Max<-1, -2>, -3>, -1>>;

export type _MaxNestedMixedSigns = Expect<Is<Max<Max<-9, 3>, 0>, 3>>;

export type _MaxNestedZeroAndNegative = Expect<Is<Max<0, Max<-9, -3>>, 0>>;

// big literals

export type _MaxHugePositiveAscending = Expect<Is<Max<557, 558>, 558>>;

export type _MaxHugePositiveDescending = Expect<Is<Max<558, 557>, 558>>;

export type _MaxHugePositiveAndZero = Expect<Is<Max<8557, 0>, 8557>>;

export type _MaxZeroAndHugePositive = Expect<Is<Max<0, 8557>, 8557>>;

export type _MaxHugeNegativeAndZero = Expect<Is<Max<-8557, 0>, 0>>;

export type _MaxZeroAndHugeNegative = Expect<Is<Max<0, -8557>, 0>>;

export type _MaxHugeMixedSigns = Expect<Is<Max<-8557, 8557>, 8557>>;

export type _MaxHugeMixedSignsReversed = Expect<Is<Max<8557, -8557>, 8557>>;
