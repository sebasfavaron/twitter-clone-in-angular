import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [LayoutComponent, HeaderComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss',
})
export class HomeViewComponent {}
