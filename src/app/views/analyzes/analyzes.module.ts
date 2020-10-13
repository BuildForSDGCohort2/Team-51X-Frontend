import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyzesRoutingModule } from './analyzes-routing.module';
import { AnalyzesComponent } from './analyzes.component';


@NgModule({
  declarations: [AnalyzesComponent],
  imports: [
    CommonModule,
    AnalyzesRoutingModule
  ]
})
export class AnalyzesModule { }
