import { Component, OnInit } from '@angular/core';
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
  imports: [LeftSidebarButtonsComponent],
})
export class LeftSidebarComponent implements OnInit {
  postModalIsOpen = false;
  menuCardIsOpen = false;
  logOutModalIsOpen = false;
  isHomeMenuOpen = false;
  isMobile!: boolean;
  user: any; // Replace 'any' with the actual type of your user object

  constructor() {} // private appContextService: AppContextService // private apiService: ApiService,

  ngOnInit(): void {
    // this.isMobile = isMobile();
    // this.user = this.appContextService.getState().user;
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
