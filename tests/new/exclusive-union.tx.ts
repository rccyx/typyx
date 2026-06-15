import type { Is, Expect } from './../__assertion';
import type { ExclusiveUnion } from '../../src/types';
import { describe, it } from 'vitest';

describe('ExclusiveUnion', () => {
  it('makes non-present properties never', () => {
    type Config = ExclusiveUnion<
      | { dbConnectionString: string; maxConnections: number }
      | { apiEndpoint: string; apiKey: string }
      | { storageBucket: string; accessKeyId: string; secretAccessKey: string }
    >;

    type Expected =
      | {
          dbConnectionString: string;
          maxConnections: number;
          apiEndpoint?: never;
          apiKey?: never;
          storageBucket?: never;
          accessKeyId?: never;
          secretAccessKey?: never;
        }
      | {
          dbConnectionString?: never;
          maxConnections?: never;
          apiEndpoint: string;
          apiKey: string;
          storageBucket?: never;
          accessKeyId?: never;
          secretAccessKey?: never;
        }
      | {
          dbConnectionString?: never;
          maxConnections?: never;
          apiEndpoint?: never;
          apiKey?: never;
          storageBucket: string;
          accessKeyId: string;
          secretAccessKey: string;
        };

    type _ = Expect<Is<Config, Expected>>;
  });

  it('supports discriminated unions', () => {
    type Shape = ExclusiveUnion<
      { type: 'circle'; radius: number } | { type: 'square'; side: number }
    >;

    type Expected =
      | { type: 'circle'; radius: number; side?: never }
      | { type: 'square'; side: number; radius?: never };

    type _ = Expect<Is<Shape, Expected>>;
  });

  it('preserves same-key discriminated unions without optional never noise', () => {
    type SinglePropUnion = ExclusiveUnion<
      { type: 'a'; value: number } | { type: 'b'; value: string }
    >;

    type Expected =
      | {
          type: 'a';
          value: number;
        }
      | {
          type: 'b';
          value: string;
        };

    type _ = Expect<Is<SinglePropUnion, Expected>>;
  });

  it('handles nested objects', () => {
    type NestedUnion = ExclusiveUnion<
      | {
          type: 'user';
          data: { id: number; name: string };
        }
      | {
          type: 'post';
          data: { title: string; content: string };
        }
    >;

    type Expected =
      | {
          type: 'user';
          data: {
            id: number;
            name: string;
          };
        }
      | {
          type: 'post';
          data: {
            title: string;
            content: string;
          };
        };

    type _ = Expect<Is<NestedUnion, Expected>>;
  });

  it('keeps shared keys and excludes branch-only keys', () => {
    type Variant = ExclusiveUnion<
      | { type: 'json'; payload: { name: string } }
      | { type: 'xml'; payload: string }
      | { type: 'binary'; buffer: ArrayBuffer }
    >;

    type Expected =
      | {
          type: 'json';
          payload: { name: string };
          buffer?: never;
        }
      | {
          type: 'xml';
          payload: string;
          buffer?: never;
        }
      | {
          type: 'binary';
          buffer: ArrayBuffer;
          payload?: never;
        };

    type _ = Expect<Is<Variant, Expected>>;
  });
});
