import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Apollo, gql } from 'apollo-angular';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

const SIGNIN = gql`
  mutation createUserSession($email: String!, $password:String!) {
    createUserSession(email: $email, password: $password) {
      id
      prenom
      nom
      email
      password
      phoneNumber
      verified
      refreshToken
      status
      avatar
      role {
        id
        title
      }
      expiresAt
      jwtToken
    }
  }
`;

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  returnUrl;
  submitted = false;
  isLoading = false;
  error;
  user: User;
  constructor(
    @Inject(DOCUMENT) private document,
    private formBuilder: FormBuilder,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private translate: TranslateService,
    private authService: AuthService,
    private apollo: Apollo,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this.document.body.classList.add('bg-gradient');

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.returnUrl = this.activeRoute.snapshot.queryParams['returnUrl'] || '/dashboard';
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove('bg-gradient');
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.apollo.mutate({
      mutation: SIGNIN,
      variables: {
        email: this.f.email.value,
        password: this.f.password.value
      }
    })
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.user = res.data['createUserSession'];
          sessionStorage.setItem('user', JSON.stringify(this.user));
          sessionStorage.setItem('token', this.user.jwtToken);
          this.toastr.success('Welcome ' + this.user.prenom + ' !');
          this.router.navigate([this.returnUrl]);
        },
        error: error => {
          this.toastr.error(error.message, 'Error');
          this.isLoading = false;
        }
      });
  }

}
