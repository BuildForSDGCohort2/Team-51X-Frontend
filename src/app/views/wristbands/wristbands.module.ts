import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WristbandsRoutingModule } from './wristbands-routing.module';
import { WristbandsComponent } from './wristbands.component';


@NgModule({
  declarations: [WristbandsComponent],
  imports: [
    CommonModule,
    WristbandsRoutingModule
  ]
})
export class WristbandsModule { }
