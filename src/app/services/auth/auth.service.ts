import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';

type LoginResponse = {
  token: string;
};
type LoginParameters = {
  username?: string;
  email?: string;
  password: string;
};

@Injectable({
  providedIn: 'root', // Maybe not actually necessary? What I understand is this makes it a singleton instead of instancing one per component
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginParameters: LoginParameters) {
    if (loginParameters.username && this.isEmail(loginParameters.username)) {
      loginParameters.email = loginParameters.username;
      delete loginParameters.username;
    }
    return this.http
      .post<LoginResponse>(`${environment.apiUrl}/auth/login`, loginParameters)
      .pipe(
        tap((response) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  private isEmail(input: string): boolean {
    const control = new FormControl(input, Validators.email);
    return control.errors == null || !('email' in control.errors);
  }
}
