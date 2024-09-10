import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { MeCareerPathComponent } from './me-carrer-path/me-carrer-path.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'me/career-path',
        component: MeCareerPathComponent,
      },
    ],
  },
];
