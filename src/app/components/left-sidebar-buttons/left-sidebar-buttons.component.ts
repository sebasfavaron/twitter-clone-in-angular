import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarButtonComponent } from '../sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-left-sidebar-buttons',
  templateUrl: './left-sidebar-buttons.component.html',
  styleUrls: ['./left-sidebar-buttons.component.scss'],
  standalone: true,
  imports: [SidebarButtonComponent],
})
export class LeftSidebarButtonsComponent {
  @Input() isMobile!: boolean;
  @Input() toggleHomeMenu!: () => void;

  currentPath: string;

  constructor(private router: Router) {
    this.currentPath = this.router.url;
  }

  handleButtonClick(path: string): void {
    if (path !== this.currentPath) {
      this.router.navigateByUrl(path);
    } else if (path === '/' && this.isMobile) {
      this.toggleHomeMenu();
    }
  }
}
