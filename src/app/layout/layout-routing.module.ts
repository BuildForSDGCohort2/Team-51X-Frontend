import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { UserComponent } from '../views/user/user.component';
import { SettingComponent } from '../views/setting/setting.component';
import { HospitalComponent } from '../views/hospital/hospital.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'prefix'},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'users', component: UserComponent},
            {path: 'settings', component: SettingComponent},
            {path: 'hospitals', component: HospitalComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
