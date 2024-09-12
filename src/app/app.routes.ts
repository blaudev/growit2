import { Routes } from '@angular/router';
import { CompanyCareerPathComponent } from './company-career-path/company-career-path.component';
import { CompanyCareerPathsComponent } from './company-career-paths/company-career-paths.component';
import { CompanyCareerPathEditorComponent } from './company-carer-path-editor/company-career-path-editor.component';
import { EmployeeCareerPathComponent } from './employee-career-path/employee-career-path.component';
import { EmployeeDocumentsComponent } from './employee-documents/employee-documents.component';
import { EmployeeOneOnOnesPathComponent } from './employee-one-on-ones/employee-one-on-ones.component';
import { EmployeePerformanceReviewsComponent } from './employee-performance-reviews/employee-performance-reviews.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { EmployeeTrainingBudgetsComponent } from './employee-training-budgets/employee-training-budgets.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { EmployeeLayoutComponent } from './layouts/employee-layout/employee-layout.component';
import { MeLayoutComponent } from './layouts/me-layout/me-layout.component';
import { LoginComponent } from './login/login.component';
import { MeCareerPathComponent } from './me-carrer-path/me-career-path.component';
import { MeDocumentsComponent } from './me-documents/me-documents.component';
import { MeOneOnOnesComponent } from './me-one-on-ones/me-one-on-ones.component';
import { MePerformanceReviewsComponent } from './me-performance-reviews/me-performance-reviews.component';
import { MeProfileComponent } from './me-profile/me-profile.component';
import { MeTrainingBudgetsComponent } from './me-training-budgets/me-training-budgets.component';
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
            path: 'profile',
            component: MeProfileComponent,
          },
          {
            path: 'career-path',
            component: MeCareerPathComponent,
          },
          {
            path: 'one-on-ones',
            component: MeOneOnOnesComponent,
          },
          {
            path: 'performance-reviews',
            component: MePerformanceReviewsComponent,
          },
          {
            path: 'training-budgets',
            component: MeTrainingBudgetsComponent,
          },
          {
            path: 'documents',
            component: MeDocumentsComponent,
          },
        ],
      },
      {
        path: 'team/employees',
        component: TeamEmployeesComponent,
      },
      {
        path: 'team/employees/:id',
        component: EmployeeLayoutComponent,
        children: [
          {
            path: 'profile',
            component: EmployeeProfileComponent,
          },
          {
            path: 'career-path',
            component: EmployeeCareerPathComponent,
          },
          {
            path: 'one-on-ones',
            component: EmployeeOneOnOnesPathComponent,
          },
          {
            path: 'performance-reviews',
            component: EmployeePerformanceReviewsComponent,
          },
          {
            path: 'training-budgets',
            component: EmployeeTrainingBudgetsComponent,
          },
          {
            path: 'documents',
            component: EmployeeDocumentsComponent,
          },
        ],
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
