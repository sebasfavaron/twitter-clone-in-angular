import { Injectable } from '@angular/core';

export const LOCAL_STORAGE_TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  setToken(token: string): void {
    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
  }
}
