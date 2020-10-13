import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, interval, pipe, } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { Apollo, gql } from 'apollo-angular';

import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  checkUserName(phone) {
    return this.http.get<any>(`${environment.userServiceUrl}/sendSms/${phone}`);
  }

  registers(credential) {
    return this.http.post(`${environment.userServiceUrl}/users/signup`, credential, { withCredentials: true });
  }

  register(credential) {
    return this.http.post<any>(`${environment.userServiceUrl}/users/signup`, credential, { withCredentials: true })
      .pipe(map(res => {
        sessionStorage.setItem('user', JSON.stringify(res.items));
        sessionStorage.setItem('token', res.jwtToken);
        this.userSubject.next(res.items);
        return res.items;
      }));
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${environment.userServiceUrl}/session`, { email, password }, { withCredentials: true })
      .pipe(map(res => {
        sessionStorage.setItem('user', JSON.stringify(res.items));
        sessionStorage.setItem('token', res.jwtToken);
        this.userSubject.next(res.items);
        return res.items;
      }));
  }

  accountActivation(token: string) {
    return this.http.post<any>(`${environment.userServiceUrl}/users/verify-email`, { token }, { withCredentials: true })
      .pipe(map((user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  refreshToken1() {
    return this.http.post<any>(`${environment.userServiceUrl}/users/refresh-token`, {}, { withCredentials: true })
      .pipe(map((user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      }));
  }

  refreshToken() {
    return this.http.post<any>(`${environment.userServiceUrl}/users/refresh-token`, {}, { withCredentials: true })
      .pipe(tap((user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.userSubject.next(user);
      }));
  }

  logout() {
    this.http.post<any>(`${environment.userServiceUrl}/users/revoke-token`, {}, { withCredentials: true }).subscribe();
    sessionStorage.clear();
    this.userSubject.next(null);
    this.router.navigate(['/']);
  }
}
