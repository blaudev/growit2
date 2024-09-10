import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userService = inject(UserService);
  router = inject(Router);

  loginManager() {
    this.userService.setUser('Manager');
    this.router.navigate(['/me/career-path']);
  }

  loginEmployee() {
    this.userService.setUser('Employee');
    this.router.navigate(['/me/career-path']);
  }
}
