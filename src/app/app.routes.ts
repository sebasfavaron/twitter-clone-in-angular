import { Routes } from '@angular/router';
import { ExploreComponent } from './explore/explore.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'message', component: MessagesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: '' },
];
