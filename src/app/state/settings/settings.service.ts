import { Injectable } from '@angular/core';
import { Mode } from '@app-core/enums';
import { BehaviorSubject } from 'rxjs';

import { SettingsState } from './settings-state.interface';

// The initial settings state
const initialState: SettingsState = { mode: Mode.Light };

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  /** Multicasting subject with initial state. */
  private readonly settings = new BehaviorSubject<SettingsState>(initialState);

  /** Settings observable. */
  settings$ = this.settings.asObservable();

  setMode(mode: Mode): void {
    this.settings.next({ ...this.settings.value, mode });
  }
}
