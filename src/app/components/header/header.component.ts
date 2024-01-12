import { NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IsMobileService } from '../../services/is-mobile/is-mobile.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  // user = this.appContextService.state.user;
  feed = this.route.snapshot.queryParamMap.get('feed');
  isMobile = false;
  private isMobileSubscription?: Subscription;

  constructor(
    private isMobileService: IsMobileService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isMobileSubscription =
      this.isMobileService.isMobileSubscription.subscribe((isMobile) => {
        this.isMobile = isMobile;
      });
  }

  ngOnDestroy(): void {
    this.isMobileSubscription?.unsubscribe();
  }

  navigate(feed: string) {
    this.router.navigate(['/'], { queryParams: { feed } });
  }
}
