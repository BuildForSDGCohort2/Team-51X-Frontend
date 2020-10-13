import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { CountryISO, SearchCountryField, TooltipLabel } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/helpers/must-match.validator';

const roles = gql` {
  findAllRoles {id title}
}`;

const SIGNUP = gql`
  mutation createUser($roleId: String!, $email: String!, $prenom: String!, $nom: String!, $password:String!, $phoneNumber:String) {
    createUser(roleId: $roleId, email: $email, prenom: $prenom, nom: $nom, password: $password, phoneNumber: $phoneNumber) {
      id
      roleId
      email
      prenom
      nom
      phoneNumber
      expiresAt
      createdAt
      updatedAt
    }
  }
`;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  registerForm: FormGroup;

  CountryISO = CountryISO;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;

  submitted = false;
  isLoading = false;
  roles;

  countries;

  public mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];

  constructor(
    @Inject(DOCUMENT) private document,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private http: HttpClient,
    private apollo: Apollo,
    private toastr: ToastrService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.document.body.classList.add('bg-gradient');

    this.apollo.watchQuery({
      query: roles,
    }).valueChanges.subscribe(result => {
      this.roles = result.data['findAllRoles'];
    });

    this.registerForm = this.formBuilder.group({
      roleId: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phoneNumber: ['', Validators.required]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    });
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('bg-gradient');
  }

  get f() { return this.registerForm.controls; }

  onSubmit(): void {
    this.submitted = true;
    this.isLoading = true;

    if (this.registerForm.invalid) {
      this.isLoading = false;
      return;
    }

    this.apollo.mutate({
      mutation: SIGNUP,
      variables: {
        roleId: this.f.roleId.value,
        email: this.f.email.value,
        prenom: this.f.prenom.value,
        nom: this.f.nom.value,
        password: this.f.password.value,
        phoneNumber: this.f.phoneNumber.value
      }
    })
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.submitted = false;
          this.toastr.success('Your account has been created, check your mailbox to confirm and validate your account.', 'Error');
          setTimeout(() => {
            this.route.navigate(['/home']);
          }, 1000);
        },
        error: (err) => {
          this.toastr.error(err.message, 'Error');
          this.isLoading = false;
          this.submitted = false;
        }
      });


  }

  getCountry() {
    this.http.get('assets/data/country.json')
      .subscribe(data => {
        this.countries = data;
      });
  }

}
