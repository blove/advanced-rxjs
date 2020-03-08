import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IndexComponent } from './components';

const directives = [IndexComponent];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule],
  exports: [...directives],
})
export class HomeModule {}
