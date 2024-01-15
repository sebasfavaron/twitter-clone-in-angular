import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../../types';
import { TokenService } from '../token/token.service';

const userRoute = `${environment.apiUrl}/user`;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getLoggedUserCall() {
    return this.http.get<User>(`${userRoute}/me`, {
      headers: { Authorization: `Bearer ${this.tokenService.getToken()}` },
    });
  }
}
