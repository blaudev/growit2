import { Component, effect, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CareerPathService } from '../services/career-path.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-company-carrer-path',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './company-carrer-path.component.html',
  styleUrl: './company-carrer-path.component.css',
})
export class CompanyCareerPathComponent {
  id = input.required<number>();

  #careerPathService = inject(CareerPathService);
  #userService = inject(UserService);

  careerPath = this.#careerPathService.careerPath;
  username = this.#userService.user;

  #init = effect(() => this.#careerPathService.loadCareerPath(this.id()), {
    allowSignalWrites: true,
  });

  getGroup(typeId: number, levelId: number) {
    return this.careerPath()?.skillGroups.find(
      (f) => f.skillTypeId === typeId && f.skillLevelId === levelId
    );
  }
}
