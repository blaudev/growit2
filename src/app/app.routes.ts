import { Routes } from '@angular/router';
import { CompanyCareerPathComponent } from './company-career-path/company-career-path.component';
import { CompanyCareerPathsComponent } from './company-career-paths/company-career-paths.component';
import { CompanyCareerPathEditorComponent } from './company-carer-path-editor/company-career-path-editor.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { MeLayoutComponent } from './layouts/me-layout/me-layout.component';
import { LoginComponent } from './login/login.component';
import { MeCareerPathComponent } from './me-carrer-path/me-carrer-path.component';
import { TeamEmployeesComponent } from './team-employees/team-employees.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'me',
        component: MeLayoutComponent,
        children: [
          {
            path: 'career-path',
            component: MeCareerPathComponent,
          },
        ],
      },
      {
        path: 'team/employees',
        component: TeamEmployeesComponent,
      },
      {
        path: 'company/career-paths',
        component: CompanyCareerPathsComponent,
      },
      {
        path: 'company/career-paths/:id',
        component: CompanyCareerPathComponent,
      },
      {
        path: 'company/career-paths/:id/editor',
        component: CompanyCareerPathEditorComponent,
      },
    ],
  },
];
