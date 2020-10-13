import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicalFileRoutingModule } from './medical-file-routing.module';
import { MedicalFileComponent } from './medical-file.component';


@NgModule({
  declarations: [MedicalFileComponent],
  imports: [
    CommonModule,
    MedicalFileRoutingModule
  ]
})
export class MedicalFileModule { }
