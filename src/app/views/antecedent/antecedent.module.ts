import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AntecedentRoutingModule } from './antecedent-routing.module';
import { AntecedentComponent } from './antecedent.component';


@NgModule({
  declarations: [AntecedentComponent],
  imports: [
    CommonModule,
    AntecedentRoutingModule
  ]
})
export class AntecedentModule { }
