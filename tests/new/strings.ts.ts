import { check, is, describe, it } from 'testyx';
import type {
  Strlen,
  StrMin,
  StrMax,
  StrBetween,
  EqualStrlen,
} from '../../src';

describe('string length meta-types', () => {
  it('Strlen works', () => {
    check(
      is<Strlen<''>, 0>()
        .and()
        .is<Strlen<'a'>, 1>()
        .and()
        .is<Strlen<'abc'>, 3>()
        .and()
        .isNot<Strlen<'abcd'>, 3>()
    );
  });

  it('EqualStrlen works', () => {
    check(
      is<EqualStrlen<'foo', 'bar'>, true>()
        .and()
        .is<EqualStrlen<'foo', 'four'>, false>()
    );
  });

  it('StrMax works', () => {
    check(
      is<StrMax<'abc', 3>, 'abc'>().and().isNot<StrMax<'abcd', 3>, 'abcd'>()
    );
  });

  it('StrMin works', () => {
    check(is<StrMin<'abc', 2>, 'abc'>().and().isNot<StrMin<'a', 2>, 'a'>());
  });

  it('StrBetween works', () => {
    check(
      is<StrBetween<'abcd', 2, 5>, 'abcd'>()
        .and()
        .isNot<StrBetween<'a', 2, 5>, 'a'>()
        .and()
        .isNot<StrBetween<'abcdef', 2, 5>, 'abcdef'>()
    );
  });
});
