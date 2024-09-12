import { Component, input } from '@angular/core';
import type { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user = input.required<User>();

  avatar(id: number) {
    return `assets/${id}.jfif`;
  }
}
