import { describe, expect, is, it } from 'testyx';
import type { MaxPositive, MinPositive, MaxNegative } from '../../src';

describe('MaxPositive', () => {
  it('returns the larger positive numeric literal', () => {
    expect(
      is<MaxPositive<1, 2>, 2>()
        .describe('2 is larger than 1')
        .and()
        .is<MaxPositive<2, 1>, 2>()
        .describe('2 is larger than 1 in reversed order')
        .and()
        .is<MaxPositive<4, 9>, 9>()
        .describe('9 is larger than 4')
        .and()
        .is<MaxPositive<9, 4>, 9>()
        .describe('9 is larger than 4 in reversed order')
    );
  });

  it('handles equal numeric literals', () => {
    expect(
      is<MaxPositive<1, 1>, 1>()
        .describe('equal literals return the shared value')
        .and()
        .is<MaxPositive<8, 8>, 8>()
        .describe('larger equal literals return the shared value')
    );
  });

  it('handles zero as the lower boundary', () => {
    expect(
      is<MaxPositive<0, 1>, 1>()
        .describe('one is larger than zero')
        .and()
        .is<MaxPositive<1, 0>, 1>()
        .describe('one is larger than zero in reversed order')
        .and()
        .is<MaxPositive<0, 0>, 0>()
        .describe('zero equals zero')
    );
  });

  it('stays exact across larger literals', () => {
    expect(
      is<MaxPositive<12, 20>, 20>()
        .describe('20 is larger than 12')
        .and()
        .is<MaxPositive<20, 12>, 20>()
        .describe('20 is larger than 12 in reversed order')
        .and()
        .isNot<MaxPositive<12, 20>, 12>()
        .describe('12 is not the maximum of 12 and 20')
    );
  });

  it('preserves original operands in all-negative mode', () => {
    expect(
      is<MaxPositive<2, 5, -2, -5, true>, -2>()
        .describe('all-negative mode maps max positive 5 to -2')
        .and()
        .is<MaxPositive<5, 2, -5, -2, true>, -2>()
        .describe('all-negative mode maps max positive 5 to -2 reversed')
        .and()
        .is<MaxPositive<3, 3, -3, -3, true>, -3>()
        .describe('all-negative mode preserves equal negative operands')
    );
  });

  it('composes with MinPositive', () => {
    expect(
      is<MaxPositive<MinPositive<2, 9>, 7>, 7>()
        .describe('maximum of min 2 and 9 against 7 is 7')
        .and()
        .is<MaxPositive<MinPositive<3, 5>, 9>, 9>()
        .describe('maximum of min 3 and 5 against 9 is 9')
    );
  });
});

describe('MaxNegative', () => {
  it('returns the negative operand closest to zero', () => {
    expect(
      is<MaxNegative<1, 2, -1, -2>, -1>()
        .describe('-1 is greater than -2')
        .and()
        .is<MaxNegative<2, 1, -2, -1>, -1>()
        .describe('-1 is greater than -2 in reversed order')
        .and()
        .is<MaxNegative<4, 9, -4, -9>, -4>()
        .describe('-4 is greater than -9')
        .and()
        .is<MaxNegative<9, 4, -9, -4>, -4>()
        .describe('-4 is greater than -9 in reversed order')
    );
  });

  it('handles equal negative operands', () => {
    expect(
      is<MaxNegative<1, 1, -1, -1>, -1>()
        .describe('equal negative literals return the shared value')
        .and()
        .is<MaxNegative<8, 8, -8, -8>, -8>()
        .describe('larger equal negative literals return the shared value')
    );
  });

  it('handles zero against negative operands', () => {
    expect(
      is<MaxNegative<0, 1, 0, -1>, 0>()
        .describe('zero is greater than negative one')
        .and()
        .is<MaxNegative<1, 0, -1, 0>, 0>()
        .describe('zero is greater than negative one in reversed order')
        .and()
        .is<MaxNegative<0, 0, 0, 0>, 0>()
        .describe('zero equals zero')
    );
  });

  it('stays exact across larger magnitudes', () => {
    expect(
      is<MaxNegative<12, 20, -12, -20>, -12>()
        .describe('-12 is greater than -20')
        .and()
        .is<MaxNegative<20, 12, -20, -12>, -12>()
        .describe('-12 is greater than -20 in reversed order')
        .and()
        .isNot<MaxNegative<12, 20, -12, -20>, -20>()
        .describe('-20 is not returned as the maximum of -12 and -20')
    );
  });
});
