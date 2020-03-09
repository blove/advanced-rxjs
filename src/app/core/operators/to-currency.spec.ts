import { of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import { toCurrency } from './to-currency.operator';

describe('toCurrency', () => {
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  test('it should round up', () => {
    const value = '1234.009';
    const expected = 1234.01;
    const precision = 2;
    scheduler.run(({ expectObservable }) => {
      const stream = '(a|)';
      const values = { a: expected };
      const source$ = of(value).pipe(toCurrency(precision));
      expectObservable(source$).toBe(stream, values);
    });
  });
});
