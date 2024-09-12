import { Component, inject } from '@angular/core';
import { UserComponent } from '../components/user/user.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employee-career-path',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './employee-career-path.component.html',
  styleUrl: './employee-career-path.component.css',
})
export class EmployeeCareerPathComponent {
  user = inject(UserService).activeUser;
}
