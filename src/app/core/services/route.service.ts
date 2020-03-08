import { Routes } from '@angular/router';

import { ShellComponent } from '../components';

const defaultData = {
  reuse: true,
};

export class RouteService {
  static withShell(routes: Routes, data: any = defaultData) {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      data,
    };
  }
}
