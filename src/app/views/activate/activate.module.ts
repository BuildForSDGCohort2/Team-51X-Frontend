import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivateRoutingModule } from './activate-routing.module';
import { ActivateComponent } from './activate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@NgModule({
  declarations: [ActivateComponent],
  imports: [
    CommonModule,
    ActivateRoutingModule,
    ReactiveFormsModule,
    TranslateModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule
  ]
})
export class ActivateModule { }
