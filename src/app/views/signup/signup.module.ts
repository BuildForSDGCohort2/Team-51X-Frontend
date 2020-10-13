import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { WizardComponent } from './components/wizard/wizard.component';
import { TemplateComponent } from './components/template/template.component';
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent,
    WizardComponent,
    TemplateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignupRoutingModule,
    TranslateModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule
  ]
})
export class SignupModule { }
