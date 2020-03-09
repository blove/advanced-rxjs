import { Observable } from 'rxjs';

export const toCurrency = (precision: number) => <T>(source$: Observable<T>) =>
  new Observable(observer =>
    source$.subscribe({
      next: value => {
        try {
          observer.next(Number((Math.round(Number(value) * 100) / 100).toFixed(precision)));
        } catch (error) {
          observer.error(error);
        }
      },
      error: e => observer.error(e),
      complete: () => observer.complete(),
    })
  );
