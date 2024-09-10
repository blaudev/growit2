import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-company-carrer-paths',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './company-carrer-paths.component.html',
  styleUrl: './company-carrer-paths.component.css',
})
export class CompanyCareerPathsComponent {}
