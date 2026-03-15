import { expect, describe, is, it } from 'testyx';
import type { MakeOptional, MakeRequired } from '../../src';

describe('MakeOptional', () => {
  it('makes specified keys optional', () => {
    expect(
      is<
        MakeOptional<{ a: number; b: string; c: boolean }, 'b'>,
        { a: number; b?: string; c: boolean }
      >()
        .describe('should make a single key optional')
        .and()
        .is<
          MakeOptional<{ a: number; b: string; c: boolean }, 'b' | 'c'>,
          { a: number; b?: string; c?: boolean }
        >()
        .describe('should make multiple keys optional')
    );
  });

  it('preserves other keys unchanged', () => {
    expect(
      is<
        MakeOptional<{ id: string; name: string; email: string }, 'email'>,
        { id: string; name: string; email?: string }
      >().describe('should not affect non-targeted keys')
    );
  });

  it('handles already optional properties correctly', () => {
    expect(
      is<
        MakeOptional<{ a?: number; b: string }, 'a'>,
        { a?: number; b: string }
      >().describe('should preserve optional modifier when already optional')
    );
  });

  it('handles empty key unions', () => {
    expect(
      is<
        MakeOptional<{ a: number; b: string }, never>,
        { a: number; b: string }
      >().describe('should return the same type when no keys are provided')
    );
  });

  it('handles making all keys optional', () => {
    expect(
      is<
        MakeOptional<{ a: number; b: string }, 'a' | 'b'>,
        { a?: number; b?: string }
      >().describe('should make all keys optional')
    );
  });

  it('preserves readonly modifiers', () => {
    expect(
      is<
        MakeOptional<{ readonly a: number; b: string }, 'b'>,
        { readonly a: number; b?: string }
      >().describe('should not strip readonly modifiers')
    );
  });

  it('handles union property types correctly', () => {
    expect(
      is<
        MakeOptional<{ a: string | number; b: boolean }, 'a'>,
        { a?: string | number; b: boolean }
      >().describe('should preserve union types inside properties')
    );
  });

  it('is idempotent when applied multiple times', () => {
    expect(
      is<
        MakeOptional<MakeOptional<{ a: number; b: string }, 'a'>, 'a'>,
        { a?: number; b: string }
      >().describe('should not change result when applied twice')
    );
  });
});

describe('MakeRequired', () => {
  it('makes specified keys required', () => {
    expect(
      is<
        MakeRequired<{ a?: number; b?: string; c: boolean }, 'a'>,
        { a: number; b?: string; c: boolean }
      >()
        .describe('should make a single key required')
        .and()
        .is<
          MakeRequired<{ a?: number; b?: string; c?: boolean }, 'a' | 'b'>,
          { a: number; b: string; c?: boolean }
        >()
        .describe('should make multiple keys required')
    );
  });

  it('preserves other keys unchanged', () => {
    expect(
      is<
        MakeRequired<{ id?: string; name: string; email?: string }, 'id'>,
        { id: string; name: string; email?: string }
      >().describe('should not affect non-targeted keys')
    );
  });

  it('handles already required properties correctly', () => {
    expect(
      is<
        MakeRequired<{ a: number; b?: string }, 'a'>,
        { a: number; b?: string }
      >().describe('should preserve required modifier when already required')
    );
  });

  it('handles empty key unions', () => {
    expect(
      is<
        MakeRequired<{ a?: number; b?: string }, never>,
        { a?: number; b?: string }
      >().describe('should return same type when no keys are provided')
    );
  });

  it('handles making all keys required', () => {
    expect(
      is<
        MakeRequired<{ a?: number; b?: string }, 'a' | 'b'>,
        { a: number; b: string }
      >().describe('should make all keys required')
    );
  });

  it('preserves readonly modifiers', () => {
    expect(
      is<
        MakeRequired<{ readonly a?: number; b?: string }, 'a'>,
        { readonly a: number; b?: string }
      >().describe('should not strip readonly modifiers')
    );
  });

  it('handles properties that include undefined', () => {
    expect(
      is<
        MakeRequired<{ a?: number | undefined; b: string }, 'a'>,
        { a: number | undefined; b: string }
      >().describe('should not remove explicit undefined from types')
    );
  });

  it('is idempotent when applied multiple times', () => {
    expect(
      is<
        MakeRequired<MakeRequired<{ a?: number; b?: string }, 'a'>, 'a'>,
        { a: number; b?: string }
      >().describe('should not change result when applied twice')
    );
  });

  it('roundtrip optional -> required -> optional correctly', () => {
    expect(
      is<
        MakeOptional<MakeRequired<{ a?: number; b: string }, 'a'>, 'a'>,
        { a?: number; b: string }
      >().describe('should roundtrip correctly')
    );
  });
});
