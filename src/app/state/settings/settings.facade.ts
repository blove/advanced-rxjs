import { Injectable } from '@angular/core';
import { Mode } from '@app-core/enums';
import { distinctUntilKeyChanged, map } from 'rxjs/operators';

import { SetMode } from './settings.actions';
import { SettingsService } from './settings.service';
import { dispatch, store$ } from './settings.store';

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade {
  // RxJS + redux pattern
  // mode$ = store$.pipe(
  //   distinctUntilKeyChanged('mode'),
  //   map(settings => settings.mode)
  // );

  // RxJS + BehaviorSubject
  mode$ = this.settingsService.settings$.pipe(
    distinctUntilKeyChanged('mode'),
    map(settings => settings.mode)
  );

  constructor(private readonly settingsService: SettingsService) {}

  // RxJS + redux pattern
  // setMode(mode: Mode): void {
  //   dispatch(new SetMode({ mode }));
  // }

  // RxJS + BehaviorSubject
  setMode(mode: Mode): void {
    this.settingsService.setMode(mode);
  }
}
