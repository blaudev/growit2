import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-edit-page',
  standalone: true,
  imports: [],
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css'],
})
export class EditPageComponent {
  width = input<string>('1000px');
  title = input.required<string>();

  cancel = output<void>();
  save = output<void>();

  onCancel() {
    this.cancel.emit();
  }

  onSave() {
    this.save.emit();
  }
}
