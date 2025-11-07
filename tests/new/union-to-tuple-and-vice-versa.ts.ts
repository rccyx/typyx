import { UnionToTuple, TupleToUnion } from 'src';
import { describe, it, check, is } from 'testyx';

describe('UnionToTuple', () => {
  it('should convert union to tuple', () => {
    check(is<UnionToTuple<'a' | 'b' | 'c'>, ['a', 'b', 'c']>());
  });

  it('should return empty tuple for empty union', () => {
    check(is<UnionToTuple<never>, []>());
  });
});

describe('TupleToUnion', () => {
  it('should convert tuple to union', () => {
    check(is<TupleToUnion<['a', 'b', 'c']>, 'a' | 'b' | 'c'>());
  });

  it('should return empty union for empty tuple', () => {
    check(is<TupleToUnion<[]>, never>());
  });
});
