import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HomeRightSidebarComponent } from '../home-right-sidebar/home-right-sidebar.component';
import { MainPages } from '../layout/layout.component';
import { MessageRightSidebarComponent } from '../message-right-sidebar/message-right-sidebar.component';

@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.scss',
  imports: [HomeRightSidebarComponent, MessageRightSidebarComponent, NgIf],
})
export class RightSidebarComponent {
  @Input() page!: MainPages;

  constructor() {}
}
