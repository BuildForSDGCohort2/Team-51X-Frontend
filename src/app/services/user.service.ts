import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(sessionStorage.getItem('user'))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  getAll() {
    return this.http.get<User[]>(`${environment.baseUrl}/users`);
  }

  getProfile() {
    return this.http.get<User>(`${environment.baseUrl}/users/profile`);
  }

  updateProfile(params) {
    return this.http
      .put<any>(`${environment.baseUrl}/users/update-profile`, params, {
        withCredentials: true,
      })
      .pipe(
        map((user) => {
          sessionStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  updatePassword(params) {
    return this.http
      .put<any>(`${environment.baseUrl}/users/update-password`, params, {
        withCredentials: true,
      })
      .pipe(
        map((user) => {
          sessionStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  updateUserPreference(preferences) {
    return this.http
      .put<any>(
        `${environment.baseUrl}/users/update-preferences`,
        preferences,
        { withCredentials: true }
      )
      .pipe(
        map((user) => {
          sessionStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  getUserById(id) {
    return this.http.get<any>(`${environment.baseUrl}/users/${id}`);
  }

  getUserContribution(id) {
    return this.http.get<any>(`${environment.baseUrl}/contribution/user/${id}`);
  }

  upload(credentials) {
    return this.http.post<any>(
      `${environment.baseUrl}/upload-file/`,
      credentials,
      { withCredentials: true }
    );
  }

  getFile(id) {
    return this.http.get<any>(`${environment.baseUrl}/users/upload-file/${id}`);
  }

  removeFile(credentials) {
    return this.http.post<any>(
      `${environment.baseUrl}/upload-file/remove`,
      credentials,
      { withCredentials: true }
    );
  }

  addEmail(credential) {
    return this.http.post<any>(
      `${environment.baseUrl}/newsletter/add/`,
      credential,
      {
        withCredentials: true,
      }
    );
  }

  getAllEmails() {
    return this.http.get<any>(`${environment.baseUrl}/newsletter/getall`);
  }
}
