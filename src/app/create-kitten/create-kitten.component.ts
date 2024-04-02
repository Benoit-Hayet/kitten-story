import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-kitten.component.html',
  styleUrl: './create-kitten.component.scss'
})
export class CreateKittenComponent {
formBuilder = inject(FormBuilder);

createKitten = this.formBuilder.group({
  name:[''],
  race:[''],
  birthday:[''],
  picture:[''],
})

kittenCollection = [''];

onSubmit () {
console.log(this.createKitten.value)
}
}
