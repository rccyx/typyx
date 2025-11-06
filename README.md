<div align="center">

# typyx

Bullet proof TypeScript even more.

[![CI](https://github.com/rccyx/typyx/actions/workflows/ci.yml/badge.svg)](https://github.com/rccyx/typyx/actions/workflows/ci.yml)
[![@latest](https://img.shields.io/npm/v/typyx.svg)](https://www.npmjs.com/package/typyx)
[![npm downloads](https://img.shields.io/npm/dm/ts-roids.svg)](https://www.npmjs.com/package/typyx)
<hr/>
</div>

## Installation
**npm**
```bash
npm i -D typyx
````

**pnpm**

```bash
pnpm i -D typyx
```

Requires TypesScript `v5.0`+

## Documentation

Checkout the full [API reference](https://typyx.rccyx.com/) for all usage examples with details.

#### Types

* [`ExclusiveUnion<T>`](https://typyx.rccyx.com/types/ExclusiveUnion.html) - Creates a union type where each variant has its specific properties required, while other properties are optional.
* [`UniqueArray<T>`](https://typyx.rccyx.com/types/UniqueArray.html) - Create unique array type from a given array type `T`, a set perse.
* [`Prune<T,N = NotIncluded>`](https://typyx.rccyx.com/types/Prune.html) - Prune a type `T` by recursively omitting properties of type `N` (defaults to [`NotIncluded`](https://typyx.rccyx.com/types/NotIncluded.html)).
* [`PositiveRange<N,M>`](https://typyx.rccyx.com/types/PositiveRange.html) - Represents a range of positive integers from N to M (inclusive), useful for enforcing numeric bounds.
* [`UnionToTuple<T>`](https://typyx.rccyx.com/types/UnionToTuple.html) - Converts a union type `T` into a tuple type, allowing for ordered access to the union's members.
* [`EnforcedString<Prefix, Contains, Suffix>`](https://typyx.rccyx.com/types/EnforcedString.html) - Constructs a type that restricts a string based on three optional constraints:
  a prefix, a substring (must be contained), and a suffix.
* [`FilledString<Obj>`](https://typyx.rccyx.com/types/FilledString.html) - Error out on an empty ('') string.
* [`DeepToPrimitive<Obj>`](https://typyx.rccyx.com/types/DeepToPrimitive.html) - Recursively transforms an object type T into a type where all properties are replaced with their corresponding primitive types.
* [`Assign<Obj,ObjArr>`](https://typyx.rccyx.com/types/Assign.html) - Copies all enumerable own properties from one target object to a source array of objects.
* [`CapitalizeFirst<T>`](https://typyx.rccyx.com/types/CapitalizeFirst.html) - Capitalizes the first character of a string literal type while preserving the rest.
* [`Is<T,U>`](https://typyx.rccyx.com/types/Is.html) - Checks if two types `T` and `U` are exactly identical and resolves to true or false at the type level.
* [`IsNot<T,U>`](https://typyx.rccyx.com/types/IsNot.html) - Check if `T` and `U` are not the same.
* [`Paths<Obj`](https://typyx.rccyx.com/types/Paths.html) - Generates all possible dot-separated key paths from a nested object type.
* [`NonEmptyArray<T>`](https://typyx.rccyx.com/types/NonEmptyArray.html) - The array type must contain at least one element of type `T`.
* [`DeepAwaited<T>`](https://typyx.rccyx.com/types/DeepAwaited.html) - Recursively resolves all nested `Promise` types to their underlying value.
* [`Flip<Obj>`](https://typyx.rccyx.com/types/Flip.html) - Flips keys with values of an object type `Obj`.
* [`DeepImmutable<Obj>`](https://typyx.rccyx.com/types/DeepImmutable.html) - Recursively turns the proprties within a given object type `T` immutable, as in have all the properties with the `readonly` modifier.
* [`Deepmutable<Obj>`](https://typyx.rccyx.com/types/DeepMutable.html) - Recursively mutates all the proprties within a given object type `T`, as in have all the properties without the `readonly` modifier.
* [`DeepRequired<Obj>`](https://typyx.rccyx.com/types/DeepRequired.html) - Recursively make all object properties required.
* [`DeepNotRequired<Obj>`](https://typyx.rccyx.com/types/DeepNotRequired.html) - Recursively make all object properties not required.
* [`DeepOmit<Obj,P>`](https://typyx.rccyx.com/types/DeepOmit.html) - Recursively omits specified nested properties from an object, based on a given predicate `P`.
* [`DeepPick<Obj,P>`](https://typyx.rccyx.com/types/DeepPick.html) - Deeply pick properties from a nested object, based on a given predicate `P`.
* [`EmptyObject`](https://typyx.rccyx.com/types/EmptyObject.html) - Represents any non-nullish value, basically `{}`.
* [`EqualStrlen<S1, S2>`](https://typyx.rccyx.com/types/EqualStrlen.html) - Check if two strings `S1` and `S2` have the same length.
* [`Strlen<S>`](https://typyx.rccyx.com/types/Strlen.html) - Computes the length of a string `S` at the type level.
* [`StrMin<S, Min>`](https://typyx.rccyx.com/types/StrMin.html) - Enforces that a string `S` has a length greater than or equal to `Min`, returning a [`Message`](https://typyx.rccyx.com/types/Message.html) on violation.
* [`StrMax<S, Max>`](https://typyx.rccyx.com/types/StrMax.html) - Enforces that a string `S` has a length less than or equal to `Max`, returning a [`Message`](https://typyx.rccyx.com/types/Message.html) on violation.
* [`StrBetween<S, Min, Max>`](https://typyx.rccyx.com/types/StrBetween.html) - Ensures a string `S` has a length within `[Min, Max]`, inclusive, returning a [`Message`](https://typyx.rccyx.com/types/Message.html) if outside the range.
* [`PartialExcept<T, P>`](https://typyx.rccyx.com/types/PartialExcept.html) - Makes all properties in `T` optional except those in `K` which remain required.
* [`FilterBy<Obj, P>`](https://typyx.rccyx.com/types/FilterBy.html) -  Filters keys from the object type `Obj` based on a specified predicate `P`.
* [`Float<N>`](https://typyx.rccyx.com/types/Float.html) - Type representing a float.
* [`If<C, Do, Else>`](https://typyx.rccyx.com/types/If.html) - If `C` evaluates `true`, `Do`, otherwise return `Else`.
* [`IfEquals<T, P, Do, Else>`](https://typyx.rccyx.com/types/IfEquals.html) - Checks if type `T` is equal to type `P`. If `T` is equal to `P`, the type resolves to `Do`, otherwise `Else`.
* [`IfExtends<T, P, Do, Else>`](https://typyx.rccyx.com/types/IfExtends.html) -  Checks if type `T` extends type `P`. if it does, the type resolves to `Do`, otherwise `Else`.
* [`ImmutableKeys<Obj>`](https://typyx.rccyx.com/types/ImmutableKeys.html) - Retrieves the keys that are immutable (`readonly`) from an object of type `Obj`.
* [`Integer<N>`](https://typyx.rccyx.com/types/Integer.html) - Represents an integer.
* [`Abs<N>`](https://typyx.rccyx.com/types/Abs.html) - Get the absolute value of a [`Numeric`](https://typyx.rccyx.com/types/Numeric.html).
* [`And<B1,B2>`](https://typyx.rccyx.com/types/And.html) - Logical AND between two boolean types.
* [`EitherOneOrMany<T>`](https://typyx.rccyx.com/types/EitherOneOrMany.html) - Represents a type that can be either a single value of type `T` or an array of values of type `T`.
* [`Nullable`](https://typyx.rccyx.com/types/Nullable.html) - Represents any non-nullish value, basically `{}`.
* [`Equals<X,Y>`](https://typyx.rccyx.com/types/Equals.html) - Checks if two types `X` and `Y` are exactly equal.
* [`EvenNumeric<T>`](https://typyx.rccyx.com/types/EvenNumeric.html) - Represents an even [`Numeric`](https://typyx.rccyx.com/types/Numeric.html).
* [`ExcludeNull<T>`](https://typyx.rccyx.com/types/ExcludeNull.html) - Excludes `null` from a type `T`.
* [`ExcludeNullable<T>`](https://typyx.rccyx.com/types/ExcludeNullable.html) - Excludes [`Nullable`](https://typyx.rccyx.com/types/Nullable.html) from a type `T`.
* [`ExcludeUndefined<T>`](https://typyx.rccyx.com/types/ExcludeUndefined.html) - Excludes `undefined` from a type `T`.
* [`KeysOfUnion<T>`](https://typyx.rccyx.com/types/KeysOfUnion.html) - Extracts the union of keys from a given union of object types, useful for accessing all possible keys in unions.
* [`Simplify<T>`](https://typyx.rccyx.com/types/Simplify.html) - Flattens the structure of a type by resolving intersections and simplifying nested mapped types, enhancing readability.
* [`Extends<T,U>`](https://typyx.rccyx.com/types/Extends.html) - Evaluates whether one type `T` is assignable to another type `U`.
* [`Falsy`](https://typyx.rccyx.com/types/Falsy.html) - Represents a type that is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)  JavaScript.
* [`FalsyProperties<T>`](https://typyx.rccyx.com/types/FalsyProperties.html) - Extracts falsy properties from an object type `T`.
* [`IsArrayIncludesTypeof<Arr, T>`](https://typyx.rccyx.com/types/IsArrayIncludesTypeof.html) - Checks if an array type `Arr` includes one or more of `T` type.
* [`LastElement<Arr, T>`](https://typyx.rccyx.com/types/LastElement.html) - Get the last element of the array.
* [`IsBigInt<T>`](https://typyx.rccyx.com/types/IsBigInt.html) - Checks if `T` is a `bigint`.
* [`IsBoolean<T>`](https://typyx.rccyx.com/types/IsBoolean.html) -  Checks if `T` is a `boolean`.
* [`IsDeepImmutable<Obj>`](https://typyx.rccyx.com/types/IsDeepImmutable.html) - Checks if all the nested properties of a given object `Obj` are immutable.
* [`IsDeepMutable<Obj>`](https://typyx.rccyx.com/types/IsDeepMutable.html) - Checks if all the nested properties of a given object `Obj` are  mutable.
* [`IsDeepNotRequired<Obj>`](https://typyx.rccyx.com/types/IsDeepNotRequired.html) - Checks if all the properties of a given object (nested) are not required, as in, all properties have the `?` modifier.
* [`IsDeepRequired<Obj>`](https://typyx.rccyx.com/types/IsDeepRequired.html) - Checks if all the properties of a given object (nested) are required, as in, all properties do not have the `?` modifier.
* [`IsExactlyAny<T>`](https://typyx.rccyx.com/types/IsExactlyAny.html) - Checks if a type `T` is exactly `any`.
* [`IsExactlyBigInt<T>`](https://typyx.rccyx.com/types/IsExactlyBigInt.html) - Checks if a type `T` is exactly `bigint` not a subtype of it.
* [`IsExactlyNumber<T>`](https://typyx.rccyx.com/types/IsExactlyNumber.html) - Checks if a type `T` is exactly `number` not a subtype of it.
* [`IsExactlyString<T>`](https://typyx.rccyx.com/types/IsExactlyString.html) - Checks if a type `T` is exactly `string` not a subtype of it.
* [`IsExactlySymbol<T>`](https://typyx.rccyx.com/types/IsExactlySymbol.html) - Checks if a type `T` is exactly `symbol` not a subtype of it.
* [`IsExactlyUnknown<T>`](https://typyx.rccyx.com/types/IsExactlyUnknown.html) - Checks if a type `T` is exactly `unknown` not a subtype of it.
* [`IsFalsy<T>`](https://typyx.rccyx.com/types/IsFalsy.html) - Checks if a given type `T` is [`Falsy`](https://typyx.rccyx.com/types/Falsy.html).
* [`IsFloat<N>`](https://typyx.rccyx.com/types/IsFloat.html) - Checks if a given type `T` is a [`Float<N>`](https://typyx.rccyx.com/types/Float.html).
* [`IsFunction<T>`](https://typyx.rccyx.com/types/IsFunction.html) - Checks if a given type `T` is a function.
* [`IsInteger<N>`](https://typyx.rccyx.com/types/IsInteger.html) - Checks if a given [`Numeric`](https://typyx.rccyx.com/types/Numeric.html)  is an [`Integer<N>`](https://typyx.rccyx.com/types/Integer.html).
* [`IsNever<T>:`](https://typyx.rccyx.com/types/IsNever.html) - Checks if a type `T` does not resolve, so `never`.
* [`IsNewable<T>`](https://typyx.rccyx.com/types/IsNewable.html) -  Checks if a type `T` is [`Newable`](https://typyx.rccyx.com/types/Newable.html).
* [`IsNullable<T>`](https://typyx.rccyx.com/types/IsNullable.html) -  Checks if a type `T` is [`Nullable`](https://typyx.rccyx.com/types/Nullable.html).
* [`IsNumber<T>`](https://typyx.rccyx.com/types/IsNumber.html) - Checks if a type `T` is a `number`.
* [`IsNumeric<T>`](https://typyx.rccyx.com/types/IsNumeric.html) - Checks if a type `T` is [`Numeric`](https://typyx.rccyx.com/types/Numeric.html).
* [`IsObject<T>`](https://typyx.rccyx.com/types/IsObject.html) -  Checks if a given type `T` qualifies as an object.
* [`IsString<T>`](https://typyx.rccyx.com/types/IsString.html) - Check if a given type `T` is a `string`.
* [`IsSymbol<T>`](https://typyx.rccyx.com/types/IsSymbol.html) - Check if a given type `T` is a `symbol`.
* [`IsTruthy<T>`](https://typyx.rccyx.com/types/IsTruthy.html) - Check if a given type `T` resolves to a truthy value.
* [`Keys<T>`](https://typyx.rccyx.com/types/Keys.html) - Retrieves the union type of keys (property names) of a type `T`.
* [`Maybe<T>`](https://typyx.rccyx.com/types/Maybe.html) - Type that might be [`Nullable`](https://typyx.rccyx.com/types/Nullable.html)
* [`MaybeUndefined<T>`](https://typyx.rccyx.com/types/MaybeUndefined.html) - Type that might `undefined`.
* [`MutableKeys<Obj>`](https://typyx.rccyx.com/types/MutableKeys.html) - Retrieves the keys that are mutable from an object of type `Obj`.
* [`Nand<B1, B2>`](https://typyx.rccyx.com/types/Nand.html) - Logical `NAND` between two boolean types `B1` and `B2`.
* [`NegativeFloat<N>`](https://typyx.rccyx.com/types/NegativeFloat.html) - Represents a negative (]-∞, 0[) [`Float<N>`](https://typyx.rccyx.com/types/Float.html).
* [`NegativeFloatString<S>`](https://typyx.rccyx.com/types/NegativeFloatString.html) - Represents a negative [`Float<N>`](https://typyx.rccyx.com/types/Float.html) parsed from a `string`.
* [`NegativeInteger<N>`](https://typyx.rccyx.com/types/NegativeInteger.html) -  Represents a negative (]-∞, 0[) [`Integer<N>`](https://typyx.rccyx.com/types/Integer.html).
* [`NegativeIntegerString<S>`](https://typyx.rccyx.com/types/NegativeIntegerString.html) - Represents a negative [`Integer<N>`](https://typyx.rccyx.com/types/Integer.html) parsed from a `string`.
* [`NewType<New, Base>`](https://typyx.rccyx.com/types/NewType.html) -  Represents a new unique type derived from an existing base type. (branded type)
* [`Newable`](https://typyx.rccyx.com/types/Newable.html) - Represents constructor functions that can be invoked using the new keyword.
* [`NonRequiredKeys<Obj>`](https://typyx.rccyx.com/types/NonRequiredKeys.html) - Returns all non required keys of an object `Obj`, as in any property of an object that is marked with `?` operator.
* [`Not<B>`](https://typyx.rccyx.com/types/Not.html) - Negates a boolean type `B`.
* [`Nullable`](https://typyx.rccyx.com/types/Nullable.html) - Represents a type that can either be  `null` or `undefined`.
* [`Numeric`](https://typyx.rccyx.com/types/Numeric.html) - Represents a type that can either be  `number` or `bigint`.
* [`NumerifyString<S>`](https://typyx.rccyx.com/types/NumerifyString.html) - Turn a given string literal to a [`Numeric`](https://typyx.rccyx.com/types/Numeric.html), if possible.
* [`Methods<Obj>`](https://typyx.rccyx.com/types/Methods.html) - Get the literal names of keys that are methods in an object type `Obj`.
* [`Properties<Obj>`](https://typyx.rccyx.com/types/Properties.html) - Get the literal names of keys that are properties in an object type `Obj`.
* [`OddNumeric<T>`](https://typyx.rccyx.com/types/OmitByType.html) - Represents an odd [`Numeric`](https://typyx.rccyx.com/types/OddNumeric.html).
* [`OmitByType<Obj, T>`](https://typyx.rccyx.com/types/OmitByType.html) - Get a set of properties from `Obj` whose type are not assignable to `T`.
* [`OmitCommonKeys<Obj1, Obj2>`](https://typyx.rccyx.com/types/OmitCommonKeys.html) - Omit any common key between the the two objects,.
* [`OmitExactlyByType<Obj, T>`](https://typyx.rccyx.com/types/OmitExactlyByType.html) - Omit properties from `Obj` whose type exactly matches `T`.
* [`Optional<T>`](https://typyx.rccyx.com/types/Optional.html) - Represents a type that may be `null`, similar to Python's `Optional` type and Rust's `Option` enum.
* [`NotAssignableTo<U, V>`](https://typyx.rccyx.com/types/NotAssignableTo.html) - Represents a type that excludes all members of `U` that are assignable to `V`.
* [`Or<B1, B2>`](https://typyx.rccyx.com/types/Or.html) - Logical `OR` between two boolean types `B1` and `B2`.
* [`PickByType<Obj, T>`](https://typyx.rccyx.com/types/PickByType.html) - Pick from `Obj` a set of properties that match the type `T`.
* [`PickCommonKeys<Obj1, Obj2>`](https://typyx.rccyx.com/types/PickCommonKeys.html) - Get the common keys between two objects.
* [`PickExactlyByType<Obj, T>`](https://typyx.rccyx.com/types/PickExactlyByType.html) - Get a set of properties from `Obj` whose type exactly matches `T`.
* [`PositiveFloat<N>`](https://typyx.rccyx.com/types/PositiveFloat.html) - Represents a positive ([0, +∞[) [`Float<N>`](https://typyx.rccyx.com/types/Float.html).
* [`PositiveFloatString<S>`](https://typyx.rccyx.com/types/PositiveFloatString.html) - Represents a positive [`Float<N>`](https://typyx.rccyx.com/types/Float.html) parsed from a `string`.
* [`PositiveInteger<N>`](https://typyx.rccyx.com/types/PositiveInteger.html) - Represents a positive ([0, +∞[) [`Integer<N>`](https://typyx.rccyx.com/types/Integer.html).
* [`PositiveIntegerString<S>`](https://typyx.rccyx.com/types/PositiveIntegerString.html) - Represents a negative [`Integer<N>`](https://typyx.rccyx.com/types/Integer.html) parsed from a `string`.
* [`Primitive`](https://typyx.rccyx.com/types/Primitive.html) - All [primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive) types.
* [`ReplaceKeys<Obj1,P,Obj2>`](https://typyx.rccyx.com/types/ReplaceKeys.html) - Constructs a new type by replacing properties `P` of type `Obj` with object type `Obj2`.
* [`RequiredKeys<Obj>`](https://typyx.rccyx.com/types/RequiredKeys.html) - Get the required keys of an object (shallow).
* [`SizedTuple<T,N>`](https://typyx.rccyx.com/types/SizedTuple.html) -  Creates a tuple with a specific length, where each element is of a given type.
* [`StringEndsWith<S,E>`](https://typyx.rccyx.com/types/StringEndsWith.html) - Checks if a string `S` ends with `E`
* [`StringStartsWith<S,St>`](https://typyx.rccyx.com/types/StringStartsWith.html) -  Checks if a string `S` starts with `St`
* [`StringifyPrimitive<P>`](https://typyx.rccyx.com/types/StringifyPrimitive.html) - Turns a given [`Primitive`](https://typyx.rccyx.com/types/Primitive.html) value (except `symbol`) into its string representation.
* [`Strlen<S>`](https://typyx.rccyx.com/types/Strlen.html) - Get the length of a string `S`.
* [`TestType<T1, T2, Expected>`](https://typyx.rccyx.com/types/TestType.html) - Tests if type `T1` and `T2` are the same.
* [`TruthyProperties<T>`](https://typyx.rccyx.com/types/TruthyProperties.html) - Extracts truthy properties from an object type `T`.
* [`UnionToIntersection<U>`](https://typyx.rccyx.com/types/UnionToIntersection.html) - As the name implies, it turns a union into an intersection.
* [`Vals<Obj>`](https://typyx.rccyx.com/types/Vals.html) - Get the set of type values in a given object.
* [`Xor<B1, B2>`](https://typyx.rccyx.com/types/Xor.html) - Exclusive `OR` between two boolean types `B1` and `B2`.
* [`Xnor<B1, B2>`](https://typyx.rccyx.com/types/Xnor.html) - Exclusive `XNOR` between two boolean types `B1` and `B2`.

The best way to understand how these types work is to check the [tests directory](/tests/). Each type has corresponding ~~edge~~ test cases that demonstrate its usage and expected behavior.

## Changelog

See [releases](https://github.com/rccyx/typyx/releases).

## License

[GPL-3](/LICENSE)

