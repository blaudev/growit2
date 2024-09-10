import { Component, effect, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CareerPathService } from '../services/career-path.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-company-carrer-path',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './company-career-path.component.html',
  styleUrl: './company-career-path.component.css',
})
export class CompanyCareerPathComponent {
  id = input.required<string>();

  #careerPathService = inject(CareerPathService);
  #userService = inject(UserService);

  careerPath = this.#careerPathService.careerPath;
  username = this.#userService.username;

  #init = effect(() => this.#careerPathService.loadCareerPath(this.id()), {
    allowSignalWrites: true,
  });

  getGroup(typeId: string, levelId: string) {
    return this.careerPath()?.skillGroups.find(
      (f) => f.skillTypeId === typeId && f.skillLevelId === levelId
    );
  }
}
