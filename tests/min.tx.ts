import type { Is, Expect } from './__assertion';
import type { Min } from '../src';

// positive literals

export type _MinPositiveAscending = Expect<Is<Min<1, 2>, 1>>;

export type _MinPositiveDescending = Expect<Is<Min<2, 1>, 1>>;

export type _MinPositiveLargerAscending = Expect<Is<Min<4, 9>, 4>>;

export type _MinPositiveLargerDescending = Expect<Is<Min<9, 4>, 4>>;

// equal positive literals

export type _MinEqualPositiveSmall = Expect<Is<Min<1, 1>, 1>>;

export type _MinEqualPositiveLarge = Expect<Is<Min<8, 8>, 8>>;

// zero boundary

export type _MinZeroAndPositive = Expect<Is<Min<0, 1>, 0>>;

export type _MinPositiveAndZero = Expect<Is<Min<1, 0>, 0>>;

export type _MinZeroAndZero = Expect<Is<Min<0, 0>, 0>>;

// zero against negative literals

export type _MinZeroAndNegative = Expect<Is<Min<0, -1>, -1>>;

export type _MinNegativeAndZero = Expect<Is<Min<-1, 0>, -1>>;

export type _MinZeroAndLargerNegative = Expect<Is<Min<0, -20>, -20>>;

export type _MinLargerNegativeAndZero = Expect<Is<Min<-20, 0>, -20>>;

// mixed signs

export type _MinNegativeAndPositive = Expect<Is<Min<-1, 2>, -1>>;

export type _MinPositiveAndNegative = Expect<Is<Min<2, -1>, -1>>;

export type _MinLargeNegativeAndPositive = Expect<Is<Min<-20, 12>, -20>>;

export type _MinPositiveAndLargeNegative = Expect<Is<Min<12, -20>, -20>>;

// negative literals

export type _MinNegativeAscendingMagnitude = Expect<Is<Min<-1, -2>, -2>>;

export type _MinNegativeDescendingMagnitude = Expect<Is<Min<-2, -1>, -2>>;

export type _MinLargeNegativeAscendingMagnitude = Expect<Is<Min<-4, -9>, -9>>;

export type _MinLargeNegativeDescendingMagnitude = Expect<Is<Min<-9, -4>, -9>>;

// equal negative literals

export type _MinEqualNegativeSmall = Expect<Is<Min<-1, -1>, -1>>;

export type _MinEqualNegativeLarge = Expect<Is<Min<-8, -8>, -8>>;

// larger literals and magnitudes

export type _MinLargerPositiveAscending = Expect<Is<Min<12, 20>, 12>>;

export type _MinLargerPositiveDescending = Expect<Is<Min<20, 12>, 12>>;

export type _MinLargerNegativeAscending = Expect<Is<Min<-12, -20>, -20>>;

export type _MinLargerNegativeDescending = Expect<Is<Min<-20, -12>, -20>>;

// negative equality contracts

export type _MinPositiveDoesNotReturnMaximum = Expect<
  Is<Is<Min<12, 20>, 20>, false>
>;

export type _MinNegativeDoesNotReturnMaximum = Expect<
  Is<Is<Min<-12, -20>, -12>, false>
>;

// nested composition

export type _MinNestedPositive = Expect<Is<Min<Min<1, 2>, 3>, 1>>;

export type _MinNestedNegative = Expect<Is<Min<Min<-1, -2>, -3>, -3>>;

export type _MinNestedMixedSigns = Expect<Is<Min<Min<-9, 3>, 0>, -9>>;

export type _MinNestedZeroAndPositive = Expect<Is<Min<0, Min<9, 3>>, 0>>;

// somewhat huge literals, before exceeding recursion

export type _MinHugePositiveAscending = Expect<Is<Min<444, 778>, 444>>;

export type _MinHugePositiveDescending = Expect<Is<Min<778, 779>, 778>>;

export type _MinHugePositiveAndZero = Expect<Is<Min<8557, 0>, 0>>;

export type _MinZeroAndHugePositive = Expect<Is<Min<0, 8557>, 0>>;

export type _MinHugeNegativeAndZero = Expect<Is<Min<-8557, 0>, -8557>>;

export type _MinZeroAndHugeNegative = Expect<Is<Min<0, -8557>, -8557>>;

export type _MinHugeMixedSigns = Expect<Is<Min<-8557, 8557>, -8557>>;

export type _MinHugeMixedSignsReversed = Expect<Is<Min<8557, -8557>, -8557>>;
