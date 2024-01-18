import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

export const LOCAL_STORAGE_TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  setToken(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    }
    return null;
  }

  removeToken(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    }
  }
}
