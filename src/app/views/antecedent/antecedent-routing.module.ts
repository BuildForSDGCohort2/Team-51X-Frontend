import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntecedentComponent } from './antecedent.component';


const routes: Routes = [
  { path: '', component: AntecedentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AntecedentRoutingModule { }
