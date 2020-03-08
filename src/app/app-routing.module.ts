import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteService } from '@app-core/services/route.service';
import { IndexComponent } from '@app-features/home';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/customers/customers.module').then(
        ({ CustomersModule }) => CustomersModule
      ),
  },
  RouteService.withShell([
    {
      path: 'home',
      component: IndexComponent,
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
