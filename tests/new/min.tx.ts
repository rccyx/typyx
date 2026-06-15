import { describe, expect, is, it } from 'testyx';
import type { MinNegative, MaxPositive, MinPositive } from '../../src';

describe('MinNegative', () => {
  it('returns the negative operand farthest from zero', () => {
    expect(
      is<MinNegative<1, 2, -1, -2>, -2>()
        .describe('-2 is smaller than -1')
        .and()
        .is<MinNegative<2, 1, -2, -1>, -2>()
        .describe('-2 is smaller than -1 in reversed order')
        .and()
        .is<MinNegative<4, 9, -4, -9>, -9>()
        .describe('-9 is smaller than -4')
        .and()
        .is<MinNegative<9, 4, -9, -4>, -9>()
        .describe('-9 is smaller than -4 in reversed order')
    );
  });

  it('handles equal negative operands', () => {
    expect(
      is<MinNegative<1, 1, -1, -1>, -1>()
        .describe('equal negative literals return the shared value')
        .and()
        .is<MinNegative<8, 8, -8, -8>, -8>()
        .describe('larger equal negative literals return the shared value')
    );
  });

  it('handles zero against negative operands', () => {
    expect(
      is<MinNegative<0, 1, 0, -1>, -1>()
        .describe('negative one is smaller than zero')
        .and()
        .is<MinNegative<1, 0, -1, 0>, -1>()
        .describe('negative one is smaller than zero in reversed order')
        .and()
        .is<MinNegative<0, 0, 0, 0>, 0>()
        .describe('zero equals zero')
    );
  });

  it('stays exact across larger magnitudes', () => {
    expect(
      is<MinNegative<12, 20, -12, -20>, -20>()
        .describe('-20 is smaller than -12')
        .and()
        .is<MinNegative<20, 12, -20, -12>, -20>()
        .describe('-20 is smaller than -12 in reversed order')
        .and()
        .isNot<MinNegative<12, 20, -12, -20>, -12>()
        .describe('-12 is not returned as the minimum of -12 and -20')
    );
  });
});

describe('MinPositive', () => {
  it('returns the smaller positive numeric literal', () => {
    expect(
      is<MinPositive<1, 2>, 1>()
        .describe('1 is smaller than 2')
        .and()
        .is<MinPositive<2, 1>, 1>()
        .describe('1 is smaller than 2 in reversed order')
        .and()
        .is<MinPositive<4, 9>, 4>()
        .describe('4 is smaller than 9')
        .and()
        .is<MinPositive<9, 4>, 4>()
        .describe('4 is smaller than 9 in reversed order')
    );
  });

  it('handles equal numeric literals', () => {
    expect(
      is<MinPositive<1, 1>, 1>()
        .describe('equal literals return the shared value')
        .and()
        .is<MinPositive<8, 8>, 8>()
        .describe('larger equal literals return the shared value')
    );
  });

  it('handles zero as the lower boundary', () => {
    expect(
      is<MinPositive<0, 1>, 0>()
        .describe('zero is smaller than one')
        .and()
        .is<MinPositive<1, 0>, 0>()
        .describe('zero is smaller than one in reversed order')
        .and()
        .is<MinPositive<0, 0>, 0>()
        .describe('zero equals zero')
    );
  });

  it('stays exact across larger literals', () => {
    expect(
      is<MinPositive<12, 20>, 12>()
        .describe('12 is smaller than 20')
        .and()
        .is<MinPositive<20, 12>, 12>()
        .describe('12 is smaller than 20 in reversed order')
        .and()
        .isNot<MinPositive<12, 20>, 20>()
        .describe('20 is not the minimum of 12 and 20')
    );
  });

  it('composes with MaxPositive', () => {
    expect(
      is<MinPositive<MaxPositive<2, 9>, 7>, 7>()
        .describe('minimum of max 2 and 9 against 7 is 7')
        .and()
        .is<MinPositive<MaxPositive<3, 5>, 9>, 5>()
        .describe('minimum of max 3 and 5 against 9 is 5')
    );
  });
});
