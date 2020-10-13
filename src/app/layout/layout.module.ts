import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
