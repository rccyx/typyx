import type { Is, Expect } from './__assertion';
import type { ArrayMax } from '../src';
import { describe, it } from 'vitest';

describe('ArrayMax', () => {
  it('extracts maximum from positive numbers', () => {
    type _ = Expect<Is<ArrayMax<[10, 2, 8, 4]>, 10>>;
  });

  it('extracts maximum from negative numbers', () => {
    type _ = Expect<Is<ArrayMax<[-54, -2, -90, -72, -69, -202]>, -2>>;
  });

  it('extracts maximum from mixed positive, negative, and zero', () => {
    type _ = Expect<Is<ArrayMax<[-54, 2, 0, 999, 69, 2]>, 999>>;
  });

  it('handles array where zero is the maximum', () => {
    type _ = Expect<Is<ArrayMax<[-10, -5, 0]>, 0>>;
  });

  it('handles single-element positive array', () => {
    type _ = Expect<Is<ArrayMax<[42]>, 42>>;
  });

  it('handles single-element negative array', () => {
    type _ = Expect<Is<ArrayMax<[-15]>, -15>>;
  });

  it('returns never for empty array', () => {
    type _ = Expect<Is<ArrayMax<[]>, never>>;
  });

  it('handles duplicate values', () => {
    type _ = Expect<Is<ArrayMax<[5, 5, 5]>, 5>>;
  });

  it('handles arrays with repeated maximum values', () => {
    type _ = Expect<Is<ArrayMax<[100, 5, 100, 20]>, 100>>;
  });
});
