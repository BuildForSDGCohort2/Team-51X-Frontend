import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClinicalCaseRoutingModule } from './clinical-case-routing.module';
import { ClinicalCaseComponent } from './clinical-case.component';


@NgModule({
  declarations: [ClinicalCaseComponent],
  imports: [
    CommonModule,
    ClinicalCaseRoutingModule
  ]
})
export class ClinicalCaseModule { }
