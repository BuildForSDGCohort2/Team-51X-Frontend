import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TraitementComponent } from './traitement.component';


const routes: Routes = [
  { path: '', component: TraitementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TraitementRoutingModule { }
