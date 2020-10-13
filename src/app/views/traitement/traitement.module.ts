import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TraitementRoutingModule } from './traitement-routing.module';
import { TraitementComponent } from './traitement.component';


@NgModule({
  declarations: [TraitementComponent],
  imports: [
    CommonModule,
    TraitementRoutingModule
  ]
})
export class TraitementModule { }
