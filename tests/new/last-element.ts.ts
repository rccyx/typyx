import { LastElement } from '@/types';
import { check, describe, is, it } from 'testyx';

describe('LastElement', () => {
  it('', () => {
    check(
      is<LastElement<[1, 2, 3]>, 3>()
        .describe('should return the last element of an array')
        .and()
        .is<LastElement<[]>, never>()
        .describe('should return never for empty array')
        .and()
        .is<LastElement<[1, 2, 3, 4, 5]>, 5>()
        .describe('should return the last element of an array')
        .and()
        .isNot<LastElement<[1, 2, 3, 4, 5]>, 4>()
        .describe('should not return the 4th element of an array of 5 elements')
    );
  });
});
