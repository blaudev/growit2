import { Routes } from '@angular/router';
import { CompanyCareerPathsComponent } from './company-carrer-paths/company-carrer-paths.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { LoginComponent } from './login/login.component';
import { MeCareerPathComponent } from './me-carrer-path/me-carrer-path.component';
import { TeamEmployeesComponent } from './team-employees/team-employees.component';

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
      {
        path: 'team/employees',
        component: TeamEmployeesComponent,
      },
      {
        path: 'company/career-paths',
        component: CompanyCareerPathsComponent,
      },
    ],
  },
];
