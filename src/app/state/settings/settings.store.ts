import { Mode } from '@app-core/enums';
import { Observable, Subject } from 'rxjs';
import { scan, startWith, tap } from 'rxjs/operators';

import { Action } from '../interfaces';
import { SettingsState } from './settings-state.interface';
import { Actions } from './settings.actions';

// Settings state stream
const action$ = new Subject();

// The initial settings state
const initialState: SettingsState = { mode: Mode.Light };

// Pure function reducer
const reducer = (state: SettingsState, action: Actions): SettingsState => {
  switch (action.type) {
    case 'SET_MODE':
      return {
        ...state,
        mode: action.payload.mode,
      };
    default:
      return state;
  }
};

// Simple store
export const store$: Observable<SettingsState> = action$.pipe(
  startWith(initialState),
  scan(reducer),
  tap(console.log)
);

// Dispatch actions
export const dispatch = (action: Action) => action$.next(action);
