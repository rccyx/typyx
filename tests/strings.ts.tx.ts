import type { Is, Expect } from './../__assertion';
import type {
  Strlen,
  StrMin,
  StrMax,
  StrBetween,
  EqualStrlen,
} from '../../src';

export type _StrlenEmptyString = Expect<Is<Strlen<''>, 0>>;

export type _StrlenSingleCharacter = Expect<Is<Strlen<'a'>, 1>>;

export type _StrlenMultipleCharacters = Expect<Is<Strlen<'abc'>, 3>>;

export type _StrlenFourCharacters = Expect<Is<Strlen<'abcd'>, 4>>;

export type _EqualStrlenSameLength = Expect<
  Is<EqualStrlen<'foo', 'bar'>, true>
>;

export type _EqualStrlenDifferentLength = Expect<
  Is<EqualStrlen<'foo', 'four'>, false>
>;

export type _StrMaxAcceptsExactBoundary = Expect<Is<StrMax<'abc', 3>, 'abc'>>;

export type _StrMaxRejectsAboveBoundary = Expect<
  Is<Is<StrMax<'abcd', 3>, 'abcd'>, false>
>;

export type _StrMinAcceptsAboveBoundary = Expect<Is<StrMin<'abc', 2>, 'abc'>>;

export type _StrMinRejectsBelowBoundary = Expect<
  Is<Is<StrMin<'a', 2>, 'a'>, false>
>;

export type _StrBetweenAcceptsInsideRange = Expect<
  Is<StrBetween<'abcd', 2, 5>, 'abcd'>
>;

export type _StrBetweenRejectsBelowRange = Expect<
  Is<Is<StrBetween<'a', 2, 5>, 'a'>, false>
>;

export type _StrBetweenRejectsAboveRange = Expect<
  Is<Is<StrBetween<'abcdef', 2, 5>, 'abcdef'>, false>
>;
