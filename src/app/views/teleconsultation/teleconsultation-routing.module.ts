import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeleconsultationComponent } from './teleconsultation.component';


const routes: Routes = [
  { path: '', component: TeleconsultationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeleconsultationRoutingModule { }
