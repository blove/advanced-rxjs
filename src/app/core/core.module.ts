import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material';
import { ShellComponent } from './components';

const directives = [ShellComponent];

@NgModule({
  declarations: [...directives],
  imports: [CommonModule, MaterialModule, RouterModule],
})
export class CoreModule {}
