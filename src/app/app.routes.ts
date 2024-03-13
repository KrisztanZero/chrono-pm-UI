import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { IssueDetailsComponent } from './issue/issue-details/issue-details.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { IssuePageComponent } from './issue/issue-page/issue-page.component';
import { CommentPageComponent } from './comment/comment-page/comment-page.component';
import { CommentDetailsComponent } from './comment/comment-details/comment-details.component';
import { UserPageComponent } from './user/user-page/user-page.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'users',
    component: UserPageComponent,
    title: 'User page',
  },
  {
    path: 'user-details/:id',
    component: UserDetailsComponent,
    title: 'User details',
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
    path: 'comments',
    component: CommentPageComponent,
    title: 'Comment page',
  },
  {
    path: 'comment-details/:id',
    component: CommentDetailsComponent,
    title: 'Comment details',
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
