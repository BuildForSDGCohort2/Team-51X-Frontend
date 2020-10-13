import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MustMatch } from 'src/app/helpers/must-match.validator';

const ACTIVATE = gql`
  mutation accountActivation($token: String!) {
    accountActivation(token: $token) {
      id
      prenom
      nom
      email
      phoneNumber
      verified
      status
      expiresAt
      role {
        id
        title
      }
    }
  }
`;

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss']
})
export class ActivateComponent implements OnInit, OnDestroy {

  activated = false;
  submitted = false;
  isLoading = false;
  registerForm: FormGroup;

  countries;

  constructor(
    @Inject(DOCUMENT) private document,
    private activatedRoute: ActivatedRoute,
    private apollo: Apollo,
    private formBuilder: FormBuilder,
    private translate: TranslateService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.document.body.classList.add('bg-gradient');
    this.getCountry();
    // this.activate();

    this.registerForm = this.formBuilder.group({
      roleId: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      lieuNaissance: ['', Validators.required],
      situationFamiliale: ['', Validators.required],
      profession: [''],
      securiteSocial: [''],
      adress1: ['', Validators.required],
      adress2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: [''],
      country: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  ngOnDestroy(): void {
    this.document.body.classList.remove('bg-gradient');
  }

  activate() {
    this.activatedRoute.params.subscribe(params => {
      if (params.token) {
        this.apollo.mutate({
          mutation: ACTIVATE,
          variables: { token: params.token }
        }).subscribe({
          next: (res) => {
            console.log(res);
            this.activated = true;
          },
          error: (err) => {
            console.log(err);
            this.activated = false;
          }
        });
      }
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.isLoading = true;

    if (this.registerForm.invalid) {
      this.isLoading = false;
      return;
    }

  }

  getCountry() {
    this.http.get('assets/data/country.json')
      .subscribe(data => {
        this.countries = data;
      });
  }

}
