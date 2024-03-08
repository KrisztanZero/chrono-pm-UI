import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IssueDetailsComponent } from './issue/issue-details/issue-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IssuePageComponent } from './issue/issue-page/issue-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'issues',
    component: IssuePageComponent,
    title: 'Issue page',
  },
  {
    path: 'issue-details/:id',
    component: IssueDetailsComponent,
    title: 'Issue details',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Registration',
  },
];
