import { Component, inject } from '@angular/core';
import { UserComponent } from '../components/user/user.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-me-career-path',
  standalone: true,
  imports: [UserComponent],
  templateUrl: './me-career-path.component.html',
  styleUrl: './me-career-path.component.css',
})
export class MeCareerPathComponent {
  activeUser = inject(UserService).currentUser;
}
