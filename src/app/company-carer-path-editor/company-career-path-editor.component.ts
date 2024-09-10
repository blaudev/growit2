import { Component, effect, inject, input } from '@angular/core';
import { EditPageComponent } from '../components/edit-page/edit-page.component';
import { CareerPathService } from '../services/career-path.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-company-career-path-editor',
  standalone: true,
  imports: [EditPageComponent],
  templateUrl: './company-career-path-editor.component.html',
  styleUrl: './company-career-path-editor.component.css',
})
export class CompanyCareerPathEditorComponent {
  id = input.required<number>();

  #careerPathService = inject(CareerPathService);
  #userService = inject(UserService);

  careerPath = this.#careerPathService.careerPath;
  username = this.#userService.username;

  #init = effect(() => this.#careerPathService.loadCareerPath(this.id()), {
    allowSignalWrites: true,
  });

  getGroup(typeId: number, levelId: number) {
    return this.careerPath()?.skillGroups.find(
      (f) => f.skillTypeId === typeId && f.skillLevelId === levelId
    );
  }
}
