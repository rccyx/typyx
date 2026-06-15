import type { Is, Expect } from './__assertion';
import type { NotAssignableTo } from '../src';

export type _NotAssignableToRemovesString = Expect<
  Is<NotAssignableTo<string | number, string>, number>
>;

export type _NotAssignableToRemovesStringAssignableLiterals = Expect<
  Is<NotAssignableTo<'a' | 'b' | 1, string>, 1>
>;

export type _NotAssignableToRemovesSpecificStringLiteral = Expect<
  Is<NotAssignableTo<'x' | 'y' | 'z', 'x'>, 'y' | 'z'>
>;

export type _NotAssignableToRemovesSpecificNumberLiteral = Expect<
  Is<NotAssignableTo<1 | 2 | 3, 2>, 1 | 3>
>;

export type _NotAssignableToRemovesNullish = Expect<
  Is<NotAssignableTo<{ a: 1 } | null | undefined, null | undefined>, { a: 1 }>
>;

export type _NotAssignableToRemovesMatchingObject = Expect<
  Is<
    NotAssignableTo<{ x: string } | { y: number }, { x: string }>,
    { y: number }
  >
>;

export type _NotAssignableToStringToStringIsNever = Expect<
  Is<NotAssignableTo<string, string>, never>
>;

export type _NotAssignableToLiteralToNumberIsNever = Expect<
  Is<NotAssignableTo<42, number>, never>
>;

export type _NotAssignableToTrueToBooleanIsNever = Expect<
  Is<NotAssignableTo<true, boolean>, never>
>;

export type _NotAssignableToPreservesStringAgainstNumber = Expect<
  Is<NotAssignableTo<string, number>, string>
>;

export type _NotAssignableToPreservesObjectAgainstDifferentObject = Expect<
  Is<NotAssignableTo<{ a: 1 }, { b: 2 }>, { a: 1 }>
>;
