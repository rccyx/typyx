import type { ExclusiveUnion } from '../../src/types';
import { check, is, describe, it } from 'testyx';

describe('ExclusiveUnion (strict)', () => {
  it('should make non-present properties never', () => {
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

    check(
      is<Config, Expected>().describe(
        'ensures other properties are typed as never'
      )
    );
  });

  it('should support discriminated unions', () => {
    type Shape = ExclusiveUnion<
      { type: 'circle'; radius: number } | { type: 'square'; side: number }
    >;

    type Expected =
      | { type: 'circle'; radius: number; side?: never }
      | { type: 'square'; side: number; radius?: never };

    check(
      is<Shape, Expected>().describe(
        'enforces one discriminated branch active at a time'
      )
    );
  });

  it('should work with single property unions', () => {
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

    check(
      is<SinglePropUnion, Expected>().describe(
        'preserves simple discriminated unions without optional never noise'
      )
    );
  });

  it('should handle nested objects', () => {
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

    check(
      is<NestedUnion, Expected>().describe(
        'handles nested shapes while maintaining exclusivity'
      )
    );
  });

  it('should handle optional discriminators correctly', () => {
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

    check(
      is<Variant, Expected>().describe(
        'ensures unused discriminators are explicitly never'
      )
    );
  });
});
