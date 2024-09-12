import { Component, computed, inject } from '@angular/core';
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
  #userService = inject(UserService);

  currentUser = this.#userService.currentUser;
  activeUser = this.#userService.activeUser;

  cursor = computed(() =>
    this.currentUser()?.isManager ? 'pointer' : 'default'
  );

  completeItem = (skill: string, item: string) => {
    if (!this.currentUser()?.isManager) {
      return;
    }

    this.#userService.completeItem(skill, item);
  };
}
