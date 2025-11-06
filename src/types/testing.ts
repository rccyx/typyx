import type { Equals, Not } from './logic';

/**
 * Determines if two types match.
 * @template T1 The first  type to compare.
 * @template T2 The second  type to compare.
 * @template Expected A boolean literal indicating whether `T1` should match `T2`.
 * If you expect the types to match, set this to ``true``; if not, set it to false.
 * This utility will return a boolean that is ``true`` if your expectation was correct, otherwise false.
 * @example
```typescript
type ResultType = TestType<Type1, Type2, true>;
```
``TestType`` accepts three arguments: the types you're comparing (``Type1`` and ``Type2``) and a boolean (``true`` if you expected them to match, ``false`` otherwise). The resulting type will tell if your expectation is correct, ``true`` if it is, else ``false``.

You can use it however you want, maybe to test a type on the go, or,
test using a testing framework. Here's an example with [`vitest`](https://vitest.dev)

````ts
import type { Abs, TestType } from 'typyx';
import { test, expect , expectTypeOf} from 'vitest';

test('|-54| should be 54',() => {
  type ShouldPass = true;
  expectTypeOf<TestType<Abs<-54>, 54, true>>().toEqualTypeOf<ShouldPass>();
});
 * ````
 * */
export type TestType<T1, T2, Expected extends boolean> = Equals<
  Equals<T1, T2>,
  Expected
>;

/**
 * Checks if two types are exactly equal, same as `Equals` but with a more descriptive name.
 * @example
 *  type Result1 = Is<string, string>; // is true
 *  type Result2 = Is<number, string>; // is false
 *  type Result3 = Is<boolean | string, string | boolean>; // is true
 */
export type Is<One, Two> = Equals<One, Two>;

/**
 * Checks if two types are not exactly equal.
 * @example
 *  type Result1 = IsNot<string, string>; // is false
 *  type Result2 = IsNot<number, string>; // is true
 *  type Result3 = IsNot<boolean | string, string | boolean>; // is false
 */
export type IsNot<One, Two> = Not<Is<One, Two>>;
