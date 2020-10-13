import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CountryISO, SearchCountryField, TooltipLabel } from 'ngx-intl-tel-input';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { WizardModel } from 'src/app/models/wizard.model';
import { AuthService } from 'src/app/services/auth.service';
import { WizardService } from 'src/app/services/wizard.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateComponent implements OnInit {

  @Input() step: WizardModel;

  currentStep: WizardModel;
  currentStepSub: Subscription;

  CountryISO = CountryISO;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  countries;
  phone;
  submitted = false;
  isLoading = false;

  stepOneForm: FormGroup;
  stepTwoForm: FormGroup;
  stepThreeForm: FormGroup;

  public mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  constructor(
    private formBuilder: FormBuilder,
    private stepsService: WizardService,
    private router: Router,
    private translate: TranslateService,
    private authService: AuthService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.currentStepSub = this.stepsService.getCurrentStep()
      .subscribe((step: WizardModel) => {
        this.currentStep = step;
      });

    this.stepOne();
    this.stepTwo();
    this.stepThree();
    this.formControlValueChanged();

    this.phone = sessionStorage.getItem('phone');
  }

  stepOne() {
    this.stepOneForm = this.formBuilder.group({
      phoneNumber: ['', [Validators.required, Validators.maxLength(13)]]
    });
  }

  stepTwo() {
    this.stepTwoForm = this.formBuilder.group({
      confirmCode: ['', Validators.required]
    });
  }

  stepThree() {
    this.stepThreeForm = this.formBuilder.group({
      civilite: [1, Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      genre: [''],
      dateNaissance: ['', Validators.required],
      lieuNaissance: ['', Validators.required],
      securiteSocial: [''],
      situationFamiliale: [1, Validators.required],
      profession: [''],
      phoneNumber: [''],
      username: [''],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      adress1: ['', Validators.required],
      adress2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: [''],
      country: ['CD', Validators.required]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  get fStepOne() { return this.stepOneForm.controls; }
  get fStepTwo() { return this.stepTwoForm.controls; }
  get fStepThree() { return this.stepThreeForm.controls; }

  formControlValueChanged() {
    if (this.step.stepIndex === 1) {
      this.stepOneForm.get('phoneNumber').valueChanges.subscribe(
        (mode) => {
          if (mode) {
            this.step.isComplete = true;
          } else {
            this.step.isComplete = false;
          }
        });
    }

    if (this.step.stepIndex === 2) {
      const smsCode = sessionStorage.getItem('smsCode');
      this.stepTwoForm.get('confirmCode').valueChanges.subscribe(
        (mode: string) => {
          if (mode) {
            if (mode.toString() === smsCode) {
              this.step.isComplete = true;
            } else {
              this.step.isComplete = false;
            }
          } else {
            this.step.isComplete = false;
          }
        });
    }

    if (this.step.stepIndex === 3) {
      this.stepThreeForm.get('nom').valueChanges.subscribe(
        (mode: string) => {
          if (mode) {
            const prenom = this.fStepThree.prenom.value;
            const nom = this.fStepThree.nom.value;
            const username = this.generateUserName(prenom, nom);
            this.fStepThree.username.setValue(username);
          }
        });

      this.getCountry();
      this.step.isComplete = true;
    }
  }

  onCompleteStep() {
    this.step.isComplete = true;
  }

  showButtonLabel() {
    const currentLang = this.translate.currentLang;
    return !this.stepsService.isLastStep() ? currentLang === 'fr' ? 'Enregistrer et Continuer' : 'Save and Continue' : currentLang === 'fr' ? 'Terminer' : 'Finish';
    return !this.stepsService.isLastStep() ? 'Continue' : 'Finish';
  }

  onNextStep() {
    if (!this.stepsService.isLastStep()) {
      this.stepsService.moveToNextStep();
    } else {
      this.onSubmit();
    }
  }

  verifyPhoneNumber(): void {
    // this.isLoading = true;
    this.phone = this.fStepOne.phoneNumber.value.e164Number;
    sessionStorage.setItem('phone', this.phone);
    this.verifyUserName(this.phone);
  }

  verifySmsCode(): void {
    this.onNextStep();
  }

  onSubmit(): void {
    this.submitted = true;
    this.isLoading = true;

    if (this.stepThreeForm.invalid) {
      this.isLoading = false;
      return;
    }

    switch (this.fStepThree.civilite.value) {
      case 1:
        this.translate.currentLang === 'fr' ? this.fStepThree.civilite.setValue('M.') : this.fStepThree.civilite.setValue('Mr.');
        this.fStepThree.genre.setValue('M');
        break;
      case 2:
        this.translate.currentLang === 'fr' ? this.fStepThree.civilite.setValue('Mme.') : this.fStepThree.civilite.setValue('Mrs.');
        this.fStepThree.genre.setValue('F');
        break;
      case 3:
        this.translate.currentLang === 'fr' ? this.fStepThree.civilite.setValue('Mlle.') : this.fStepThree.civilite.setValue('Miss');
        this.fStepThree.genre.setValue('F');
        break;
    }

    this.fStepThree.phoneNumber.setValue(this.phone);

    this.authService.register(this.stepThreeForm.value)
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.router.navigate(['/dashboard']);
        },
        error: error => {
          this.isLoading = false;
          console.log(error);
        }
      });
  }

  verifyUserName(phone) {
    this.isLoading = true;
    this.authService.checkUserName(phone)
      .pipe(first())
      .subscribe({
        next: (res) => {
          console.log(res);
          sessionStorage.setItem('smsCode', res.smsCode);
          this.isLoading = false;
          this.onNextStep();
        },
        error: error => {
          this.isLoading = false;
          console.log(error);
        }
      });
  }

  getCountry() {
    this.http.get('assets/data/country.json')
      .subscribe(data => {
        this.countries = data;
      });
  }

  generateUserName(prenom, nom) {
    const username = prenom + '.' + nom;
    return username;
  }

}
