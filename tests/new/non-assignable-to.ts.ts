import { check, is, describe, it } from 'testyx';
import type { NotAssignableTo } from '../../src';

describe('NotAssignableTo', () => {
  it('filters out members assignable to the second type', () => {
    check(
      is<NotAssignableTo<string | number, string>, number>()
        .and()
        .is<NotAssignableTo<'a' | 'b' | 1, string>, 1>()
        .and()
        .is<NotAssignableTo<'x' | 'y' | 'z', 'x'>, 'y' | 'z'>()
        .and()
        .is<NotAssignableTo<1 | 2 | 3, 2>, 1 | 3>()
    );
  });

  it('handles object and null cases correctly', () => {
    check(
      is<
        NotAssignableTo<{ a: 1 } | null | undefined, null | undefined>,
        { a: 1 }
      >()
        .and()
        .is<
          NotAssignableTo<{ x: string } | { y: number }, { x: string }>,
          { y: number }
        >()
    );
  });

  it('yields never when everything is assignable', () => {
    check(
      is<NotAssignableTo<string, string>, never>()
        .and()
        .is<NotAssignableTo<42, number>, never>()
        .and()
        .is<NotAssignableTo<true, boolean>, never>()
    );
  });

  it('preserves the input when nothing is assignable', () => {
    check(
      is<NotAssignableTo<string, number>, string>()
        .and()
        .is<NotAssignableTo<{ a: 1 }, { b: 2 }>, { a: 1 }>()
    );
  });
});
