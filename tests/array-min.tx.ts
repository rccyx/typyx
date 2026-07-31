import type { Is, Expect } from './__assertion';
import type { ArrayMin } from '../src';
import { describe, it } from 'vitest';

describe('ArrayMin', () => {
  it('extracts minimum from positive numbers', () => {
    type _ = Expect<Is<ArrayMin<[10, 2, 8, 4]>, 2>>;
  });

  it('extracts minimum from negative numbers', () => {
    type _ = Expect<Is<ArrayMin<[-54, -2, -90, -72, -69, -202]>, -202>>;
  });

  it('extracts minimum from mixed positive, negative, and zero', () => {
    type _ = Expect<Is<ArrayMin<[-54, 2, 0, 999, 69, 2]>, -54>>;
  });

  it('handles array where zero is the minimum', () => {
    type _ = Expect<Is<ArrayMin<[0, 5, 12, 100]>, 0>>;
  });

  it('handles single-element positive array', () => {
    type _ = Expect<Is<ArrayMin<[42]>, 42>>;
  });

  it('handles single-element negative array', () => {
    type _ = Expect<Is<ArrayMin<[-15]>, -15>>;
  });

  it('returns never for empty array', () => {
    type _ = Expect<Is<ArrayMin<[]>, never>>;
  });

  it('handles duplicate values', () => {
    type _ = Expect<Is<ArrayMin<[5, 5, 5]>, 5>>;
  });

  it('handles arrays with repeated minimum values', () => {
    type _ = Expect<Is<ArrayMin<[-10, 5, -10, 20]>, -10>>;
  });
});
