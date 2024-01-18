import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-message-right-sidebar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './message-right-sidebar.component.html',
  styleUrl: './message-right-sidebar.component.scss',
})
export class MessageRightSidebarComponent {}
