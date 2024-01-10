import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IsMobileService } from '../../services/is-mobile/is-mobile.service';
import { LeftSidebarButtonsComponent } from '../left-sidebar-buttons/left-sidebar-buttons.component';
// import { isMobile } from '../hooks/useIsMobile'; // Import your Angular isMobile logic
// import { ApiService } from '../services/api.service'; // Import your Angular API service
// import { AppContextService } from '../services/app-context.service'; // Import your Angular AppContext service
// import { otherLanguage, toggleLanguage } from '../translations/i18n'; // Import your Angular translation logic

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss'],
  standalone: true,
  imports: [LeftSidebarButtonsComponent, CommonModule],
})
export class LeftSidebarComponent implements OnInit, OnDestroy {
  postModalIsOpen = false;
  menuCardIsOpen = false;
  logOutModalIsOpen = false;
  isHomeMenuOpen = false;
  isMobile = false;
  private isMobileSubscription?: Subscription;
  user: any; // Replace 'any' with the actual type of your user object

  constructor(private isMobileService: IsMobileService) {}

  ngOnInit(): void {
    this.isMobileSubscription =
      this.isMobileService.isMobileSubscription.subscribe((isMobile) => {
        this.isMobile = isMobile;
      });
  }

  ngOnDestroy(): void {
    this.isMobileSubscription?.unsubscribe();
  }

  toggleHomeMenu(): void {
    // setIsHomeMenuOpen((_isHomeMenuOpen) => !_isHomeMenuOpen)
  }

  handleLanguageToggle(): void {
    // this.appContextService.updateField(
    //   'language',
    //   otherLanguage(),
    //   'UPDATE_FIELD'
    // );
    // toggleLanguage();
  }
}
