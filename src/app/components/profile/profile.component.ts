import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [LayoutComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  userId: string;

  constructor(private router: Router) {
    this.userId = this.router.url.split('/')[2]; // Note: skipped angular's way with withComponentInputBinding as it was too complex for this use
  }
}
