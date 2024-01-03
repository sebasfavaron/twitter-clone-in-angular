import { afterNextRender } from '@angular/core';
import { fromEvent } from 'rxjs';

export function getIsMobileSubscription(
  callback: (newIsMobile: boolean) => void
) {
  afterNextRender(() => {
    return fromEvent(window, 'resize').subscribe((evt) =>
      callback(window.innerWidth < 1024)
    );
  });
}
