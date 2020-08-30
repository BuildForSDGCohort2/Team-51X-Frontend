import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../views/dashboard/dashboard.component';
import { UserComponent } from '../views/user/user.component';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { SettingComponent } from '../views/setting/setting.component';
import { HospitalComponent } from '../views/hospital/hospital.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    UserComponent,
    SettingComponent,
    HospitalComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
