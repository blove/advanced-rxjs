import { Mode } from '@app-core/enums';

import { Action } from '../interfaces';

export class SetMode implements Action {
  readonly type = 'SET_MODE';
  constructor(public payload: { mode: Mode }) {}
}

export type Actions = SetMode;
