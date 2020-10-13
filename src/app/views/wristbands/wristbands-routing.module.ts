import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WristbandsComponent } from './wristbands.component';


const routes: Routes = [
  { path: '', component: WristbandsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WristbandsRoutingModule { }
