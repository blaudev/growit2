import { Component, computed, effect, inject, input } from '@angular/core';
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

  careerPath = this.#careerPathService.currentCareerPath;
  user = this.#userService.currentUser;

  skillNames = computed(() =>
    this.careerPath()
      ?.levels.map((l) => l.skills.map((s) => s.name))
      .flat()
  );

  columns = computed(
    () => `auto repeat(${this.skillNames()?.length || 1}, 1fr)`
  );

  #init = effect(
    () => this.#careerPathService.setCurrentCareerPathId(this.id()),
    {
      allowSignalWrites: true,
    }
  );
}
