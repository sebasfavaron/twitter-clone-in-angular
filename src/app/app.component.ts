import { Component, NgZone, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IsMobileService } from './services/is-mobile/is-mobile.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-twitter-training';

  constructor(
    private isMobileService: IsMobileService,
    private ngZone: NgZone
  ) {
    afterNextRender(() => {
      console.log('afterNextRender');
      //update when window resizes
      window.addEventListener('resize', () => {
        // NgZone.run() is needed to force change detection
        this.ngZone.run(() => {
          this.isMobileService.setIsMobile(window.innerWidth < 1024);
        });
      });
    });
  }
}
