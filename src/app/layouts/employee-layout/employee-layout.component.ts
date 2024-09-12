import { Component, effect, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-employee-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './employee-layout.component.html',
  styleUrl: './employee-layout.component.css',
})
export class EmployeeLayoutComponent {
  id = input.required<number>();

  #userService = inject(UserService);

  #init = effect(() => this.#userService.setActiveUser(this.id()), {
    allowSignalWrites: true,
  });
}
