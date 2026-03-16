<div align="center">

# typyx

Bullet-proof TypeScript even more.

</div>

## Installation

**npm**
```bash
npm i -D typyx
```

**pnpm**
```bash
pnpm i -D typyx
```

Requires TypeScript `v5.0+`.

## Documentation

Check out the full [API reference](https://typyx.rccyx.com/) for detailed usage examples and docs.

## Types

### Object shape, keys, and modifiers

* [`Assign<Obj, ObjArr>`](https://typyx.rccyx.com/types/Assign.html) - Copies all enumerable own properties from one target object to a source array of objects.
* [`FilterBy<Obj, P>`](https://typyx.rccyx.com/types/FilterBy.html) - Filters keys from the object type `Obj` based on a specified predicate `P`.
* [`Flip<Obj>`](https://typyx.rccyx.com/types/Flip.html) - Flips the keys and values of an object type `Obj`.
* [`ImmutableKeys<Obj>`](https://typyx.rccyx.com/types/ImmutableKeys.html) - Retrieves the `readonly` keys from an object type `Obj`.
* [`Keys<T>`](https://typyx.rccyx.com/types/Keys.html) - Retrieves the union of keys of a type `T`.
* [`KeysOfUnion<T>`](https://typyx.rccyx.com/types/KeysOfUnion.html) - Extracts the union of keys from a union of object types.
* [`MakeOptional<T, K>`](https://typyx.rccyx.com/types/MakeOptional.html) - Makes the specified keys `K` optional while preserving the original modifiers of all other keys.
* [`MakeRequired<T, K>`](https://typyx.rccyx.com/types/MakeRequired.html) - Makes the specified keys `K` required while preserving the original modifiers of all other keys.
* [`Methods<Obj>`](https://typyx.rccyx.com/types/Methods.html) - Gets the literal names of keys that are methods in an object type `Obj`.
* [`MutableKeys<Obj>`](https://typyx.rccyx.com/types/MutableKeys.html) - Retrieves the mutable keys from an object type `Obj`.
* [`NonRequiredKeys<Obj>`](https://typyx.rccyx.com/types/NonRequiredKeys.html) - Returns all non-required keys of an object type `Obj`.
* [`OmitByType<Obj, T>`](https://typyx.rccyx.com/types/OmitByType.html) - Omits properties from `Obj` whose types are assignable to `T`.
* [`OmitCommonKeys<Obj1, Obj2>`](https://typyx.rccyx.com/types/OmitCommonKeys.html) - Omits any keys shared by `Obj1` and `Obj2`.
* [`OmitExactlyByType<Obj, T>`](https://typyx.rccyx.com/types/OmitExactlyByType.html) - Omits properties from `Obj` whose types exactly match `T`.
* [`PartialExcept<T, P>`](https://typyx.rccyx.com/types/PartialExcept.html) - Makes all properties in `T` optional except those in `P`, which remain required.
* [`PickByType<Obj, T>`](https://typyx.rccyx.com/types/PickByType.html) - Picks properties from `Obj` whose types are assignable to `T`.
* [`PickCommonKeys<Obj1, Obj2>`](https://typyx.rccyx.com/types/PickCommonKeys.html) - Gets the common keys between two object types.
* [`PickExactlyByType<Obj, T>`](https://typyx.rccyx.com/types/PickExactlyByType.html) - Picks properties from `Obj` whose types exactly match `T`.
* [`Properties<Obj>`](https://typyx.rccyx.com/types/Properties.html) - Gets the literal names of keys that are non-method properties in an object type `Obj`.
* [`ReplaceKeys<Obj1, P, Obj2>`](https://typyx.rccyx.com/types/ReplaceKeys.html) - Replaces properties `P` in `Obj1` with the corresponding properties from `Obj2`.
* [`RequiredKeys<Obj>`](https://typyx.rccyx.com/types/RequiredKeys.html) - Gets the required keys of an object type `Obj`.
* [`Vals<Obj>`](https://typyx.rccyx.com/types/Vals.html) - Gets the union of value types from an object type.

### Deep object utilities

* [`DeepAwaited<T>`](https://typyx.rccyx.com/types/DeepAwaited.html) - Recursively resolves all nested `Promise` types to their underlying values.
* [`DeepImmutable<Obj>`](https://typyx.rccyx.com/types/DeepImmutable.html) - Recursively makes every property in `Obj` `readonly`.
* [`DeepMutable<Obj>`](https://typyx.rccyx.com/types/DeepMutable.html) - Recursively removes `readonly` from every property in `Obj`.
* [`DeepNotRequired<Obj>`](https://typyx.rccyx.com/types/DeepNotRequired.html) - Recursively makes all properties optional.
* [`DeepOmit<Obj, P>`](https://typyx.rccyx.com/types/DeepOmit.html) - Recursively omits specified nested properties from an object based on predicate `P`.
* [`DeepPick<Obj, P>`](https://typyx.rccyx.com/types/DeepPick.html) - Deeply picks properties from a nested object based on predicate `P`.
* [`DeepRequired<Obj>`](https://typyx.rccyx.com/types/DeepRequired.html) - Recursively makes all properties required.
* [`DeepToPrimitive<Obj>`](https://typyx.rccyx.com/types/DeepToPrimitive.html) - Recursively transforms an object type into one whose properties are their primitive counterparts.
* [`Paths<Obj>`](https://typyx.rccyx.com/types/Paths.html) - Generates all possible dot-separated key paths from a nested object type.
* [`Prune<T, N = NotIncluded>`](https://typyx.rccyx.com/types/Prune.html) - Recursively omits properties of type `N` from `T`.

### Union and composition utilities

* [`ExclusiveUnion<T>`](https://typyx.rccyx.com/types/ExclusiveUnion.html) - Creates a union type where each variant keeps its own required properties while excluding incompatible ones.
* [`NotAssignableTo<U, V>`](https://typyx.rccyx.com/types/NotAssignableTo.html) - Excludes all members of `U` that are assignable to `V`.
* [`UnionToIntersection<U>`](https://typyx.rccyx.com/types/UnionToIntersection.html) - Converts a union type into an intersection type.
* [`UnionToTuple<T>`](https://typyx.rccyx.com/types/UnionToTuple.html) - Converts a union type into a tuple type.

### Array and tuple utilities

* [`Append<Arr, Item>`](https://typyx.rccyx.com/types/Append.html) - Adds an item to the end of a tuple.
* [`EitherOneOrMany<T>`](https://typyx.rccyx.com/types/EitherOneOrMany.html) - Represents either a single value of type `T` or an array of `T`.
* [`Head<Arr>`](https://typyx.rccyx.com/types/Head.html) - Gets the first element of a tuple.
* [`IsArrayIncludesTypeof<Arr, T>`](https://typyx.rccyx.com/types/IsArrayIncludesTypeof.html) - Checks whether an array type `Arr` includes one or more members assignable to `T`.
* [`Last<Arr>`](https://typyx.rccyx.com/types/Last.html) - Gets the last element of a tuple.
* [`NonEmptyArray<T>`](https://typyx.rccyx.com/types/NonEmptyArray.html) - Represents an array containing at least one element of type `T`.
* [`Pop<Arr>`](https://typyx.rccyx.com/types/Pop.html) - Removes the last element of a tuple.
* [`Prepend<Arr, Item>`](https://typyx.rccyx.com/types/Prepend.html) - Adds an item to the start of a tuple.
* [`SizedTuple<T, N>`](https://typyx.rccyx.com/types/SizedTuple.html) - Creates a tuple of length `N` where each element is of type `T`.
* [`Tail<Arr>`](https://typyx.rccyx.com/types/Tail.html) - Removes the first element of a tuple.
* [`UniqueArray<T>`](https://typyx.rccyx.com/types/UniqueArray.html) - Creates a unique array type from an array type `T`.
* [`Zip<L, L1>`](https://typyx.rccyx.com/types/Zip.html) - Pairs elements from two tuples by index into a tuple of pairs.

### String utilities

* [`CapitalizeFirst<T>`](https://typyx.rccyx.com/types/CapitalizeFirst.html) - Capitalizes the first character of a string literal type.
* [`EnforcedString<Prefix, Contains, Suffix>`](https://typyx.rccyx.com/types/EnforcedString.html) - Restricts a string using optional prefix, substring, and suffix constraints.
* [`EqualStrlen<S1, S2>`](https://typyx.rccyx.com/types/EqualStrlen.html) - Checks whether two strings have the same length.
* [`FilledString<Obj>`](https://typyx.rccyx.com/types/FilledString.html) - Errors on an empty string literal `''`.
* [`NumerifyString<S>`](https://typyx.rccyx.com/types/NumerifyString.html) - Converts a string literal into a [`Numeric`](https://typyx.rccyx.com/types/Numeric.html) when possible.
* [`StringEndsWith<S, E>`](https://typyx.rccyx.com/types/StringEndsWith.html) - Checks whether a string `S` ends with `E`.
* [`StringStartsWith<S, St>`](https://typyx.rccyx.com/types/StringStartsWith.html) - Checks whether a string `S` starts with `St`.
* [`StringifyPrimitive<P>`](https://typyx.rccyx.com/types/StringifyPrimitive.html) - Turns a primitive value type into its string representation.
* [`StrBetween<S, Min, Max>`](https://typyx.rccyx.com/types/StrBetween.html) - Ensures a string `S` has a length within `[Min, Max]`.
* [`Strlen<S>`](https://typyx.rccyx.com/types/Strlen.html) - Computes the length of a string `S`.
* [`StrMax<S, Max>`](https://typyx.rccyx.com/types/StrMax.html) - Ensures that a string `S` has length less than or equal to `Max`.
* [`StrMin<S, Min>`](https://typyx.rccyx.com/types/StrMin.html) - Ensures that a string `S` has length greater than or equal to `Min`.

### Numeric utilities

* [`Abs<N>`](https://typyx.rccyx.com/types/Abs.html) - Gets the absolute value of a [`Numeric`](https://typyx.rccyx.com/types/Numeric.html).
* [`EvenNumeric<T>`](https://typyx.rccyx.com/types/EvenNumeric.html) - Represents an even [`Numeric`](https://typyx.rccyx.com/types/Numeric.html).
* [`Float<N>`](https://typyx.rccyx.com/types/Float.html) - Type representing a float.
* [`Integer<N>`](https://typyx.rccyx.com/types/Integer.html) - Represents an integer.
* [`NegativeFloat<N>`](https://typyx.rccyx.com/types/NegativeFloat.html) - Represents a negative [`Float<N>`](https://typyx.rccyx.com/types/Float.html).
* [`NegativeFloatString<S>`](https://typyx.rccyx.com/types/NegativeFloatString.html) - Represents a negative float parsed from a string.
* [`NegativeInteger<N>`](https://typyx.rccyx.com/types/NegativeInteger.html) - Represents a negative [`Integer<N>`](https://typyx.rccyx.com/types/Integer.html).
* [`NegativeIntegerString<S>`](https://typyx.rccyx.com/types/NegativeIntegerString.html) - Represents a negative integer parsed from a string.
* [`Numeric`](https://typyx.rccyx.com/types/Numeric.html) - Represents `number | bigint`.
* [`OddNumeric<T>`](https://typyx.rccyx.com/types/OddNumeric.html) - Represents an odd [`Numeric`](https://typyx.rccyx.com/types/Numeric.html).
* [`PositiveFloat<N>`](https://typyx.rccyx.com/types/PositiveFloat.html) - Represents a positive [`Float<N>`](https://typyx.rccyx.com/types/Float.html).
* [`PositiveFloatString<S>`](https://typyx.rccyx.com/types/PositiveFloatString.html) - Represents a positive float parsed from a string.
* [`PositiveInteger<N>`](https://typyx.rccyx.com/types/PositiveInteger.html) - Represents a positive [`Integer<N>`](https://typyx.rccyx.com/types/Integer.html).
* [`PositiveIntegerString<S>`](https://typyx.rccyx.com/types/PositiveIntegerString.html) - Represents a positive integer parsed from a string.
* [`PositiveRange<N, M>`](https://typyx.rccyx.com/types/PositiveRange.html) - Represents a range of positive integers from `N` to `M` inclusive.

### Logic, comparison, and control flow

* [`And<B1, B2>`](https://typyx.rccyx.com/types/And.html) - Logical `AND` between two boolean types.
* [`Equals<X, Y>`](https://typyx.rccyx.com/types/Equals.html) - Checks if two types are exactly equal.
* [`Extends<T, U>`](https://typyx.rccyx.com/types/Extends.html) - Evaluates whether type `T` is assignable to type `U`.
* [`If<C, Do, Else>`](https://typyx.rccyx.com/types/If.html) - Resolves to `Do` if `C` is `true`, otherwise `Else`.
* [`IfEquals<T, P, Do, Else>`](https://typyx.rccyx.com/types/IfEquals.html) - Resolves to `Do` if `T` equals `P`, otherwise `Else`.
* [`IfExtends<T, P, Do, Else>`](https://typyx.rccyx.com/types/IfExtends.html) - Resolves to `Do` if `T` extends `P`, otherwise `Else`.
* [`Is<T, U>`](https://typyx.rccyx.com/types/Is.html) - Checks if two types are exactly identical.
* [`IsNot<T, U>`](https://typyx.rccyx.com/types/IsNot.html) - Checks if two types are not identical.
* [`Nand<B1, B2>`](https://typyx.rccyx.com/types/Nand.html) - Logical `NAND` between two boolean types.
* [`Not<B>`](https://typyx.rccyx.com/types/Not.html) - Negates a boolean type.
* [`Or<B1, B2>`](https://typyx.rccyx.com/types/Or.html) - Logical `OR` between two boolean types.
* [`Xnor<B1, B2>`](https://typyx.rccyx.com/types/Xnor.html) - Logical `XNOR` between two boolean types.
* [`Xor<B1, B2>`](https://typyx.rccyx.com/types/Xor.html) - Logical `XOR` between two boolean types.

### Type predicates and checkers

* [`FalsyProperties<T>`](https://typyx.rccyx.com/types/FalsyProperties.html) - Extracts falsy properties from an object type `T`.
* [`IsBigInt<T>`](https://typyx.rccyx.com/types/IsBigInt.html) - Checks if `T` is a `bigint`.
* [`IsBoolean<T>`](https://typyx.rccyx.com/types/IsBoolean.html) - Checks if `T` is a `boolean`.
* [`IsDeepImmutable<Obj>`](https://typyx.rccyx.com/types/IsDeepImmutable.html) - Checks if all nested properties of `Obj` are immutable.
* [`IsDeepMutable<Obj>`](https://typyx.rccyx.com/types/IsDeepMutable.html) - Checks if all nested properties of `Obj` are mutable.
* [`IsDeepNotRequired<Obj>`](https://typyx.rccyx.com/types/IsDeepNotRequired.html) - Checks if all nested properties of `Obj` are optional.
* [`IsDeepRequired<Obj>`](https://typyx.rccyx.com/types/IsDeepRequired.html) - Checks if all nested properties of `Obj` are required.
* [`IsExactlyAny<T>`](https://typyx.rccyx.com/types/IsExactlyAny.html) - Checks if `T` is exactly `any`.
* [`IsExactlyBigInt<T>`](https://typyx.rccyx.com/types/IsExactlyBigInt.html) - Checks if `T` is exactly `bigint`.
* [`IsExactlyNumber<T>`](https://typyx.rccyx.com/types/IsExactlyNumber.html) - Checks if `T` is exactly `number`.
* [`IsExactlyString<T>`](https://typyx.rccyx.com/types/IsExactlyString.html) - Checks if `T` is exactly `string`.
* [`IsExactlySymbol<T>`](https://typyx.rccyx.com/types/IsExactlySymbol.html) - Checks if `T` is exactly `symbol`.
* [`IsExactlyUnknown<T>`](https://typyx.rccyx.com/types/IsExactlyUnknown.html) - Checks if `T` is exactly `unknown`.
* [`IsFalsy<T>`](https://typyx.rccyx.com/types/IsFalsy.html) - Checks if a given type `T` is [`Falsy`](https://typyx.rccyx.com/types/Falsy.html).
* [`IsFloat<N>`](https://typyx.rccyx.com/types/IsFloat.html) - Checks if a given type is a [`Float<N>`](https://typyx.rccyx.com/types/Float.html).
* [`IsFunction<T>`](https://typyx.rccyx.com/types/IsFunction.html) - Checks if a given type `T` is a function.
* [`IsInteger<N>`](https://typyx.rccyx.com/types/IsInteger.html) - Checks if a given numeric type is an [`Integer<N>`](https://typyx.rccyx.com/types/Integer.html).
* [`IsNever<T>`](https://typyx.rccyx.com/types/IsNever.html) - Checks if a type resolves to `never`.
* [`IsNewable<T>`](https://typyx.rccyx.com/types/IsNewable.html) - Checks if a type `T` is [`Newable`](https://typyx.rccyx.com/types/Newable.html).
* [`IsNullable<T>`](https://typyx.rccyx.com/types/IsNullable.html) - Checks if a type `T` is [`Nullable`](https://typyx.rccyx.com/types/Nullable.html).
* [`IsNumber<T>`](https://typyx.rccyx.com/types/IsNumber.html) - Checks if a type `T` is a `number`.
* [`IsNumeric<T>`](https://typyx.rccyx.com/types/IsNumeric.html) - Checks if a type `T` is [`Numeric`](https://typyx.rccyx.com/types/Numeric.html).
* [`IsObject<T>`](https://typyx.rccyx.com/types/IsObject.html) - Checks if a type `T` qualifies as an object.
* [`IsString<T>`](https://typyx.rccyx.com/types/IsString.html) - Checks if a type `T` is a `string`.
* [`IsSymbol<T>`](https://typyx.rccyx.com/types/IsSymbol.html) - Checks if a type `T` is a `symbol`.
* [`IsTruthy<T>`](https://typyx.rccyx.com/types/IsTruthy.html) - Checks if a type `T` resolves to a truthy value.
* [`TestType<T1, T2, Expected>`](https://typyx.rccyx.com/types/TestType.html) - Tests whether `T1` and `T2` match the expected relationship.
* [`TruthyProperties<T>`](https://typyx.rccyx.com/types/TruthyProperties.html) - Extracts truthy properties from an object type `T`.

### Core, nullability, and misc utilities

* [`EmptyObject`](https://typyx.rccyx.com/types/EmptyObject.html) - Represents an empty object-like shape.
* [`ExcludeNull<T>`](https://typyx.rccyx.com/types/ExcludeNull.html) - Excludes `null` from a type `T`.
* [`ExcludeNullable<T>`](https://typyx.rccyx.com/types/ExcludeNullable.html) - Excludes [`Nullable`](https://typyx.rccyx.com/types/Nullable.html) from a type `T`.
* [`ExcludeUndefined<T>`](https://typyx.rccyx.com/types/ExcludeUndefined.html) - Excludes `undefined` from a type `T`.
* [`Falsy`](https://typyx.rccyx.com/types/Falsy.html) - Represents JavaScript falsy values.
* [`Maybe<T>`](https://typyx.rccyx.com/types/Maybe.html) - Represents a type that may be [`Nullable`](https://typyx.rccyx.com/types/Nullable.html).
* [`MaybeUndefined<T>`](https://typyx.rccyx.com/types/MaybeUndefined.html) - Represents a type that may be `undefined`.
* [`Newable`](https://typyx.rccyx.com/types/Newable.html) - Represents constructor functions that can be invoked with `new`.
* [`NewType<New, Base>`](https://typyx.rccyx.com/types/NewType.html) - Creates a branded type derived from an existing base type.
* [`Nullable`](https://typyx.rccyx.com/types/Nullable.html) - Represents a type that can be `null` or `undefined`.
* [`Optional<T>`](https://typyx.rccyx.com/types/Optional.html) - Represents a type that may be `null`, similar to Python's `Optional` or Rust's `Option`.
* [`Primitive`](https://typyx.rccyx.com/types/Primitive.html) - Represents all JavaScript primitive types.
* [`Simplify<T>`](https://typyx.rccyx.com/types/Simplify.html) - Flattens and normalizes a type for better readability.

The best way to understand how these types work is to check the [tests directory](/tests/).

## Changelog

See [releases](https://github.com/rccyx/typyx/releases).

## License

MIT © [@rccyx](https://rccyx.com)