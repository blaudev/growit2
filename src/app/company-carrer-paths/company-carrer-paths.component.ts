import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CareerPathService } from '../services/career-path.service';

@Component({
  selector: 'app-company-carrer-paths',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './company-carrer-paths.component.html',
  styleUrl: './company-carrer-paths.component.css',
})
export class CompanyCareerPathsComponent {
  #careerPathService = inject(CareerPathService);

  careerPaths = this.#careerPathService.careerPaths;
}
