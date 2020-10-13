import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },
  { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) },
  { path: 'secure-access', loadChildren: () => import('./views/signin/signin.module').then(m => m.SigninModule) },
  { path: 'register', loadChildren: () => import('./views/register/register.module').then(m => m.RegisterModule) },
  { path: 'activate', loadChildren: () => import('./views/activate/activate.module').then(m => m.ActivateModule) },
  // { path: 'register', loadChildren: () => import('./views/signup/signup.module').then(m => m.SignupModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
