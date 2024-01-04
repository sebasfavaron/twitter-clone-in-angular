import { Routes } from '@angular/router';
import { ExploreComponent } from './components/explore/explore.component';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { LoginComponent } from './components/login/login.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', title: 'Twitter', component: HomeViewComponent },
  { path: 'explore', title: 'Twitter explore', component: ExploreComponent },
  { path: 'login', title: 'Twitter login', component: LoginComponent },
  { path: 'register', title: 'Twitter register', component: RegisterComponent },
  { path: 'message', title: 'Twitter message', component: MessagesComponent },
  { path: 'profile', title: 'Twitter profile', component: ProfileComponent },
  {
    path: 'profile/:userId',
    title: 'Twitter profile',
    component: ProfileComponent,
  },
  { path: '**', title: 'Twitter', redirectTo: '' },
];
