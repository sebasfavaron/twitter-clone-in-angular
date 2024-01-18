import { Component, afterRender } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { HeaderComponent } from '../header/header.component';
import { HomePostsComponent } from '../home-posts/home-posts.component';
import { LayoutComponent } from '../layout/layout.component';

@Component({
  selector: 'app-home-view',
  standalone: true,
  imports: [LayoutComponent, HeaderComponent, HomePostsComponent],
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss',
})
export class HomeViewComponent {
  constructor(private userService: UserService) {
    // Maybe not the best place to load the user
    afterRender(() => {
      this.userService.loadLoggedUser();
    });
  }
}
