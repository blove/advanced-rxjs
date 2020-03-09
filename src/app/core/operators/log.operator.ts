import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export function log() {
  return <T>(source: Observable<T>) => source.pipe(tap(console.log));
}
