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

export const safeUrl = (
  url: string,
  queryParams: Record<string, string | number | boolean>
) => {
  const cleanedParams = Object.entries(queryParams).reduce(
    (acc, [key, value]) => {
      if (value !== '') {
        acc[key] = value.toString();
      }
      return acc;
    },
    {} as Record<string, string>
  );
  const urlObject = new URL(url);
  urlObject.search = new URLSearchParams(cleanedParams).toString();
  return urlObject.toString();
};
