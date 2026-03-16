import { describe, expect, is, it } from 'testyx';
import type { Zip } from '../../src';

describe('Zip', () => {
  it('pairs elements from two tuples', () => {
    expect(
      is<
        Zip<[1, 2, 3], ['a', 'b', 'c']>,
        [[1, 'a'], [2, 'b'], [3, 'c']]
      >().describe('should pair elements by index')
    );
  });

  it('works with different types', () => {
    expect(
      is<
        Zip<[string, number], [boolean, Date]>,
        [[string, boolean], [number, Date]]
      >().describe('should preserve element types')
    );
  });

  it('stops when the first list ends', () => {
    expect(
      is<Zip<[1, 2], ['a', 'b', 'c']>, [[1, 'a'], [2, 'b']]>().describe(
        'should ignore extra elements in the second tuple'
      )
    );
  });

  it('stops when the second list ends', () => {
    expect(
      is<Zip<[1, 2, 3], ['a']>, [[1, 'a']]>().describe(
        'should ignore extra elements in the first tuple'
      )
    );
  });

  it('handles empty tuples', () => {
    expect(
      is<Zip<[], []>, []>()
        .describe('should return empty tuple for two empty inputs')
        .and()
        .is<Zip<[1, 2, 3], []>, []>()
        .describe('should return empty tuple if second list is empty')
        .and()
        .is<Zip<[], [1, 2, 3]>, []>()
        .describe('should return empty tuple if first list is empty')
    );
  });

  it('handles single element tuples', () => {
    expect(
      is<Zip<[1], ['a']>, [[1, 'a']]>().describe(
        'should pair single element tuples'
      )
    );
  });

  it('supports nested tuples', () => {
    expect(
      is<
        Zip<[[1], [2]], [['a'], ['b']]>,
        [[[1], ['a']], [[2], ['b']]]
      >().describe('should work with nested tuple elements')
    );
  });

  it('works with unions inside tuples', () => {
    expect(
      is<
        Zip<[1 | 2, 3], ['a', 'b' | 'c']>,
        [[1 | 2, 'a'], [3, 'b' | 'c']]
      >().describe('should preserve unions inside elements')
    );
  });

  it('is composable with other tuple utilities', () => {
    expect(
      is<Zip<[1, 2], ['a', 'b']>[0], [1, 'a']>().describe(
        'should allow indexed access after zip'
      )
    );
  });
});
