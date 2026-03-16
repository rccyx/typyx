import { UnionToTuple, TupleToUnion } from 'src';
import { describe, it, expect, is } from 'testyx';

describe('UnionToTuple', () => {
  it('should convert union to tuple', () => {
    expect(is<UnionToTuple<'a' | 'b' | 'c'>, ['a', 'b', 'c']>());
  });

  it('should return empty tuple for empty union', () => {
    expect(is<UnionToTuple<never>, []>());
  });
});

describe('TupleToUnion', () => {
  it('should convert tuple to union', () => {
    expect(is<TupleToUnion<['a', 'b', 'c']>, 'a' | 'b' | 'c'>());
  });

  it('should return empty union for empty tuple', () => {
    expect(is<TupleToUnion<[]>, never>());
  });
});
