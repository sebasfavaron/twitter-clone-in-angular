import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../types';
import { LeftSidebarComponent } from '../left-sidebar/left-sidebar.component';
import { RightSidebarComponent } from '../right-sidebar/right-sidebar.component';

export type MainPages = 'home' | 'explore' | 'message' | 'profile';
function isOfTypeMainPages(route: string): route is MainPages {
  return ['home', 'explore', 'message', 'profile'].includes(route);
}
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [LeftSidebarComponent, RightSidebarComponent, NgStyle],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  providers: [UserService],
})
export class LayoutComponent {
  @Input() page!: MainPages;
  user?: User;

  constructor() {}
}
