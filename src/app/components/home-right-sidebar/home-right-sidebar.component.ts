import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-right-sidebar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './home-right-sidebar.component.html',
  styleUrl: './home-right-sidebar.component.scss',
})
export class HomeRightSidebarComponent {}
