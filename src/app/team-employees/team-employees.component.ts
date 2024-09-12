import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SearchBoxComponent } from '../components/search-box/search-box.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-team-employees',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, SearchBoxComponent],
  templateUrl: './team-employees.component.html',
  styleUrl: './team-employees.component.css',
})
export class TeamEmployeesComponent {
  #userService = inject(UserService);

  user = this.#userService.currentUser;
  users = this.#userService.users;

  avatar(id: number) {
    return `assets/${id}.jfif`;
  }
}
