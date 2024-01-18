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
  user?: User;

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  loadLoggedUser() {
    const token = this.tokenService.getToken();
    if (this.user || !token) return;

    this.http
      .get<User>(`${userRoute}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .subscribe({
        next: (user) => {
          this.user = user;
        },
        error: (error) => {
          console.error('Error getting logged user:', error);
        },
      });
  }
}
