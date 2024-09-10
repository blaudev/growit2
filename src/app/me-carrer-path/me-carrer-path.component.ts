import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-me-carrer-path',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './me-carrer-path.component.html',
  styleUrl: './me-carrer-path.component.css',
})
export class MeCareerPathComponent {}
