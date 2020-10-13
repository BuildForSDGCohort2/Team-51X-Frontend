import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiometrieRoutingModule } from './biometrie-routing.module';
import { BiometrieComponent } from './biometrie.component';


@NgModule({
  declarations: [BiometrieComponent],
  imports: [
    CommonModule,
    BiometrieRoutingModule
  ]
})
export class BiometrieModule { }
