import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { TokenService } from '../token/token.service';

type LoginResponse = {
  token: string;
};
type LoginParameters = {
  username?: string;
  email?: string;
  password: string;
};
const authRoute = `${environment.apiUrl}/auth`;

@Injectable({
  providedIn: 'root', // Maybe not actually necessary? What I understand is this makes it a singleton instead of instancing one per component
})
export class AuthService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  login(loginParameters: LoginParameters) {
    if (loginParameters.username && this.isEmail(loginParameters.username)) {
      loginParameters.email = loginParameters.username;
      delete loginParameters.username;
    }
    return this.http
      .post<LoginResponse>(`${authRoute}/login`, loginParameters)
      .pipe(
        tap((response) => {
          if (response && response.token) {
            this.tokenService.setToken(response.token);
          }
        })
      );
  }

  logout() {
    this.tokenService.removeToken();
  }

  private isEmail(input: string): boolean {
    const control = new FormControl(input, Validators.email);
    return control.errors == null || !('email' in control.errors);
  }
}
