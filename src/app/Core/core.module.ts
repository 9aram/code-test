import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';

import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [

    NotFoundComponent
  ]
})
export class CoreModule { }
