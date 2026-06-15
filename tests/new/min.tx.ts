import { describe, expect, is, it } from 'testyx';
import type { Min } from '../../src';

describe('Min', () => {
  it('returns the smaller positive numeric literal', () => {
    expect(
      is<Min<1, 2>, 1>()
        .describe('1 is smaller than 2')
        .and()
        .is<Min<2, 1>, 1>()
        .describe('1 is smaller than 2 in reversed order')
        .and()
        .is<Min<4, 9>, 4>()
        .describe('4 is smaller than 9')
        .and()
        .is<Min<9, 4>, 4>()
        .describe('4 is smaller than 9 in reversed order')
    );
  });

  it('handles equal positive numeric literals', () => {
    expect(
      is<Min<1, 1>, 1>()
        .describe('equal literals return the shared value')
        .and()
        .is<Min<8, 8>, 8>()
        .describe('larger equal literals return the shared value')
    );
  });

  it('handles zero as a neutral numeric boundary', () => {
    expect(
      is<Min<0, 1>, 0>()
        .describe('zero is smaller than one')
        .and()
        .is<Min<1, 0>, 0>()
        .describe('zero is smaller than one in reversed order')
        .and()
        .is<Min<0, 0>, 0>()
        .describe('zero equals zero')
    );
  });

  it('returns negative numeric literals below zero', () => {
    expect(
      is<Min<0, -1>, -1>()
        .describe('negative one is smaller than zero')
        .and()
        .is<Min<-1, 0>, -1>()
        .describe('negative one is smaller than zero in reversed order')
        .and()
        .is<Min<0, -20>, -20>()
        .describe('negative twenty is smaller than zero')
        .and()
        .is<Min<-20, 0>, -20>()
        .describe('negative twenty is smaller than zero in reversed order')
    );
  });

  it('returns the negative operand across mixed signs', () => {
    expect(
      is<Min<-1, 2>, -1>()
        .describe('negative one is smaller than positive two')
        .and()
        .is<Min<2, -1>, -1>()
        .describe('negative one is smaller than positive two in reversed order')
        .and()
        .is<Min<-20, 12>, -20>()
        .describe('negative twenty is smaller than positive twelve')
        .and()
        .is<Min<12, -20>, -20>()
        .describe(
          'negative twenty is smaller than positive twelve in reversed order'
        )
    );
  });

  it('returns the negative operand farthest from zero', () => {
    expect(
      is<Min<-1, -2>, -2>()
        .describe('-2 is smaller than -1')
        .and()
        .is<Min<-2, -1>, -2>()
        .describe('-2 is smaller than -1 in reversed order')
        .and()
        .is<Min<-4, -9>, -9>()
        .describe('-9 is smaller than -4')
        .and()
        .is<Min<-9, -4>, -9>()
        .describe('-9 is smaller than -4 in reversed order')
    );
  });

  it('handles equal negative numeric literals', () => {
    expect(
      is<Min<-1, -1>, -1>()
        .describe('equal negative literals return the shared value')
        .and()
        .is<Min<-8, -8>, -8>()
        .describe('larger equal negative literals return the shared value')
    );
  });

  it('stays exact across larger literals and magnitudes', () => {
    expect(
      is<Min<12, 20>, 12>()
        .describe('12 is smaller than 20')
        .and()
        .is<Min<20, 12>, 12>()
        .describe('12 is smaller than 20 in reversed order')
        .and()
        .is<Min<-12, -20>, -20>()
        .describe('-20 is smaller than -12')
        .and()
        .is<Min<-20, -12>, -20>()
        .describe('-20 is smaller than -12 in reversed order')
        .and()
        .isNot<Min<12, 20>, 20>()
        .describe('20 is not the minimum of 12 and 20')
        .and()
        .isNot<Min<-12, -20>, -12>()
        .describe('-12 is not the minimum of -12 and -20')
    );
  });

  it('composes with nested Min calls', () => {
    expect(
      is<Min<Min<1, 2>, 3>, 1>()
        .describe('nested positive minimum returns the smallest operand')
        .and()
        .is<Min<Min<-1, -2>, -3>, -3>()
        .describe(
          'nested negative minimum returns the farthest operand from zero'
        )
        .and()
        .is<Min<Min<-9, 3>, 0>, -9>()
        .describe('nested mixed-sign minimum preserves the negative minimum')
        .and()
        .is<Min<0, Min<9, 3>>, 0>()
        .describe('zero is smaller than a nested positive minimum')
    );
  });
});
