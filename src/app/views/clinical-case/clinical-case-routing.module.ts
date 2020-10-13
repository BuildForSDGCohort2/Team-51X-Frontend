import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClinicalCaseComponent } from './clinical-case.component';


const routes: Routes = [
  { path: '', component: ClinicalCaseComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClinicalCaseRoutingModule { }
