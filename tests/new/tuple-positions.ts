import { describe, expect, is, it } from 'testyx';
import type { Append, Head, Last, Pop, Prepend, Tail } from '../../src';

describe('Head', () => {
  it('gets the first element of a tuple', () => {
    expect(
      is<Head<[1, 2, 3]>, 1>()
        .describe('should return the first element of a numeric tuple')
        .and()
        .is<Head<['a', 'b', 'c']>, 'a'>()
        .describe('should return the first element of a string tuple')
    );
  });

  it('returns never for empty tuples', () => {
    expect(
      is<Head<[]>, never>().describe('should return never for an empty tuple')
    );
  });

  it('handles single-item tuples', () => {
    expect(
      is<Head<[true]>, true>().describe(
        'should return the only element when the tuple has one item'
      )
    );
  });
});

describe('Last', () => {
  it('gets the last element of a tuple', () => {
    expect(
      is<Last<[1, 2, 3]>, 3>()
        .describe('should return the last element of a numeric tuple')
        .and()
        .is<Last<['a', 'b', 'c']>, 'c'>()
        .describe('should return the last element of a string tuple')
    );
  });

  it('returns never for empty tuples', () => {
    expect(
      is<Last<[]>, never>().describe('should return never for an empty tuple')
    );
  });

  it('handles single-item tuples', () => {
    expect(
      is<Last<[true]>, true>().describe(
        'should return the only element when the tuple has one item'
      )
    );
  });
});

describe('Tail', () => {
  it('removes the first element of a tuple', () => {
    expect(
      is<Tail<[1, 2, 3]>, [2, 3]>()
        .describe('should remove the first element of a numeric tuple')
        .and()
        .is<Tail<['a', 'b', 'c']>, ['b', 'c']>()
        .describe('should remove the first element of a string tuple')
    );
  });

  it('returns an empty tuple for empty and single-item tuples', () => {
    expect(
      is<Tail<[]>, []>()
        .describe('should return an empty tuple for an empty tuple')
        .and()
        .is<Tail<[1]>, []>()
        .describe('should return an empty tuple for a single-item tuple')
    );
  });
});

describe('Pop', () => {
  it('removes the last element of a tuple', () => {
    expect(
      is<Pop<[1, 2, 3]>, [1, 2]>()
        .describe('should remove the last element of a numeric tuple')
        .and()
        .is<Pop<['a', 'b', 'c']>, ['a', 'b']>()
        .describe('should remove the last element of a string tuple')
    );
  });

  it('returns an empty tuple for empty and single-item tuples', () => {
    expect(
      is<Pop<[]>, []>()
        .describe('should return an empty tuple for an empty tuple')
        .and()
        .is<Pop<[1]>, []>()
        .describe('should return an empty tuple for a single-item tuple')
    );
  });
});

describe('Append', () => {
  it('adds an item to the end of a tuple', () => {
    expect(
      is<Append<[1, 2], 3>, [1, 2, 3]>()
        .describe('should append an item to the end of a numeric tuple')
        .and()
        .is<Append<['a', 'b'], 'c'>, ['a', 'b', 'c']>()
        .describe('should append an item to the end of a string tuple')
    );
  });

  it('handles empty tuples', () => {
    expect(
      is<Append<[], 1>, [1]>().describe(
        'should create a single-item tuple when appending to an empty tuple'
      )
    );
  });
});

describe('Prepend', () => {
  it('adds an item to the start of a tuple', () => {
    expect(
      is<Prepend<[2, 3], 1>, [1, 2, 3]>()
        .describe('should prepend an item to the start of a numeric tuple')
        .and()
        .is<Prepend<['b', 'c'], 'a'>, ['a', 'b', 'c']>()
        .describe('should prepend an item to the start of a string tuple')
    );
  });

  it('handles empty tuples', () => {
    expect(
      is<Prepend<[], 1>, [1]>().describe(
        'should create a single-item tuple when prepending to an empty tuple'
      )
    );
  });
});

describe('positions composition', () => {
  it('composes position helpers correctly', () => {
    expect(
      is<Append<Pop<[1, 2, 3]>, 4>, [1, 2, 4]>()
        .describe('should allow pop then append composition')
        .and()
        .is<Prepend<Tail<[1, 2, 3]>, 0>, [0, 2, 3]>()
        .describe('should allow tail then prepend composition')
    );
  });
});
