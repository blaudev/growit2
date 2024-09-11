import { Component, type OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { EditPageComponent } from '../components/edit-page/edit-page.component';

@Component({
  selector: 'app-company-career-path-editor',
  standalone: true,
  imports: [EditPageComponent, ReactiveFormsModule],
  templateUrl: './company-career-path-editor.component.html',
  styleUrl: './company-career-path-editor.component.css',
})
export class CompanyCareerPathEditorComponent implements OnInit {
  careerPathForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // Inicializamos el formulario usando FormBuilder
    this.careerPathForm = this.fb.group({
      skillTypes: this.fb.array([]), // Un FormArray para SkillTypes
      skillLevels: this.fb.array([]), // Un FormArray para SkillLevels
      skillGroups: this.fb.array([]), // Un FormArray para SkillGroups
    });

    // Inicializamos los datos por defecto
    this.addDefaultData();
  }

  // Getter para SkillTypes como FormArray
  get skillTypes(): FormArray {
    return this.careerPathForm.get('skillTypes') as FormArray;
  }

  // Getter para SkillLevels como FormArray
  get skillLevels(): FormArray {
    return this.careerPathForm.get('skillLevels') as FormArray;
  }

  // Getter para SkillGroups como FormArray
  get skillGroups(): FormArray {
    return this.careerPathForm.get('skillGroups') as FormArray;
  }

  // Añade los datos iniciales al formulario
  addDefaultData() {
    this.addSkillType({ id: this.generateGUID(), name: 'Technology' });
    this.addSkillType({ id: this.generateGUID(), name: 'Team Player' });
    this.addSkillType({ id: this.generateGUID(), name: 'Communication' });

    this.addSkillLevel({ id: this.generateGUID(), name: 'Junior Developer' });
    this.addSkillLevel({
      id: this.generateGUID(),
      name: 'Mid-level Developer',
    });
    this.addSkillLevel({ id: this.generateGUID(), name: 'Senior Developer' });
  }

  addSkillType(skillType = { id: this.generateGUID(), name: '' }) {
    this.skillTypes.push(this.fb.group(skillType));
  }

  deleteSkillType(index: number) {
    this.skillTypes.removeAt(index);
  }

  addSkillLevel(skillLevel = { id: this.generateGUID(), name: '' }) {
    this.skillLevels.push(this.fb.group(skillLevel));
  }

  deleteSkillLevel(index: number) {
    this.skillLevels.removeAt(index);
  }

  addSkillGroup(
    skillGroup = {
      id: this.generateGUID(),
      skillTypeId: '',
      skillLevelId: '',
      skills: [],
    }
  ) {
    const group = this.fb.group({
      id: [skillGroup.id],
      skillTypeId: [skillGroup.skillTypeId],
      skillLevelId: [skillGroup.skillLevelId],
      skills: this.fb.array(
        skillGroup.skills.map((skill) => this.fb.group(skill))
      ),
    });

    this.skillGroups.push(group);
  }

  deleteSkillGroup(index: number) {
    this.skillGroups.removeAt(index);
  }

  generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0,
          v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }

  onSubmit() {
    console.log(this.careerPathForm.value); // Aquí manejas la lógica de envío
  }
}
