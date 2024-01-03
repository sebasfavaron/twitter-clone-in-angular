import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IsMobileService {
  private _isMobile = new BehaviorSubject<boolean>(false);

  constructor() {}

  setIsMobile(value: boolean) {
    if (value !== this._isMobile.value) {
      this._isMobile.next(value);
    }
  }

  get isMobileSubscription() {
    return this._isMobile.asObservable();
  }
}
