import { describe, expect, is, it } from 'testyx';
import type { Max } from '../../src';

describe('Max', () => {
  it('returns the larger positive numeric literal', () => {
    expect(
      is<Max<1, 2>, 2>()
        .describe('2 is larger than 1')
        .and()
        .is<Max<2, 1>, 2>()
        .describe('2 is larger than 1 in reversed order')
        .and()
        .is<Max<4, 9>, 9>()
        .describe('9 is larger than 4')
        .and()
        .is<Max<9, 4>, 9>()
        .describe('9 is larger than 4 in reversed order')
    );
  });

  it('handles equal positive numeric literals', () => {
    expect(
      is<Max<1, 1>, 1>()
        .describe('equal literals return the shared value')
        .and()
        .is<Max<8, 8>, 8>()
        .describe('larger equal literals return the shared value')
    );
  });

  it('handles zero as a neutral numeric boundary', () => {
    expect(
      is<Max<0, 1>, 1>()
        .describe('one is larger than zero')
        .and()
        .is<Max<1, 0>, 1>()
        .describe('one is larger than zero in reversed order')
        .and()
        .is<Max<0, 0>, 0>()
        .describe('zero equals zero')
    );
  });

  it('returns zero over negative numeric literals', () => {
    expect(
      is<Max<0, -1>, 0>()
        .describe('zero is greater than negative one')
        .and()
        .is<Max<-1, 0>, 0>()
        .describe('zero is greater than negative one in reversed order')
        .and()
        .is<Max<0, -20>, 0>()
        .describe('zero is greater than negative twenty')
        .and()
        .is<Max<-20, 0>, 0>()
        .describe('zero is greater than negative twenty in reversed order')
    );
  });

  it('returns the positive operand across mixed signs', () => {
    expect(
      is<Max<-1, 2>, 2>()
        .describe('positive two is greater than negative one')
        .and()
        .is<Max<2, -1>, 2>()
        .describe('positive two is greater than negative one in reversed order')
        .and()
        .is<Max<-20, 12>, 12>()
        .describe('positive twelve is greater than negative twenty')
        .and()
        .is<Max<12, -20>, 12>()
        .describe(
          'positive twelve is greater than negative twenty in reversed order'
        )
    );
  });

  it('returns the negative operand closest to zero', () => {
    expect(
      is<Max<-1, -2>, -1>()
        .describe('-1 is greater than -2')
        .and()
        .is<Max<-2, -1>, -1>()
        .describe('-1 is greater than -2 in reversed order')
        .and()
        .is<Max<-4, -9>, -4>()
        .describe('-4 is greater than -9')
        .and()
        .is<Max<-9, -4>, -4>()
        .describe('-4 is greater than -9 in reversed order')
    );
  });

  it('handles equal negative numeric literals', () => {
    expect(
      is<Max<-1, -1>, -1>()
        .describe('equal negative literals return the shared value')
        .and()
        .is<Max<-8, -8>, -8>()
        .describe('larger equal negative literals return the shared value')
    );
  });

  it('stays exact across larger literals and magnitudes', () => {
    expect(
      is<Max<12, 20>, 20>()
        .describe('20 is larger than 12')
        .and()
        .is<Max<20, 12>, 20>()
        .describe('20 is larger than 12 in reversed order')
        .and()
        .is<Max<-12, -20>, -12>()
        .describe('-12 is greater than -20')
        .and()
        .is<Max<-20, -12>, -12>()
        .describe('-12 is greater than -20 in reversed order')
        .and()
        .isNot<Max<12, 20>, 12>()
        .describe('12 is not the maximum of 12 and 20')
        .and()
        .isNot<Max<-12, -20>, -20>()
        .describe('-20 is not the maximum of -12 and -20')
    );
  });

  it('composes with nested Max calls', () => {
    expect(
      is<Max<Max<1, 2>, 3>, 3>()
        .describe('nested positive maximum returns the largest operand')
        .and()
        .is<Max<Max<-1, -2>, -3>, -1>()
        .describe('nested negative maximum returns the closest operand to zero')
        .and()
        .is<Max<Max<-9, 3>, 0>, 3>()
        .describe('nested mixed-sign maximum preserves the positive maximum')
        .and()
        .is<Max<0, Max<-9, -3>>, 0>()
        .describe('zero is greater than a nested negative maximum')
    );
  });
});
