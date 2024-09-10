import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-team-employees',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './team-employees.component.html',
  styleUrl: './team-employees.component.css',
})
export class TeamEmployeesComponent {}
