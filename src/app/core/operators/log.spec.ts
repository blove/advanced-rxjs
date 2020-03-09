import { Observable, Subscription, of } from 'rxjs';

import { log } from './log.operator';

describe('log', () => {
  let subscription: Subscription;

  afterEach(() => {
    subscription.unsubscribe();
  });

  test('it should log a next notification', () => {
    const message = 'test';
    const spy = jest.spyOn(console, 'log');
    const observable: Observable<string> = of(message).pipe(log());
    subscription = observable.subscribe();
    expect(spy).toHaveBeenCalledWith(message);
  });
});
