import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeleconsultationRoutingModule } from './teleconsultation-routing.module';
import { TeleconsultationComponent } from './teleconsultation.component';


@NgModule({
  declarations: [TeleconsultationComponent],
  imports: [
    CommonModule,
    TeleconsultationRoutingModule
  ]
})
export class TeleconsultationModule { }
