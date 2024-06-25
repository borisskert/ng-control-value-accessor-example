import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-example-formular',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './example-formular.component.html',
  styleUrl: './example-formular.component.css'
})
export class ExampleFormularComponent {

  myForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.myForm = new FormGroup({
      myDate: new FormControl(),
    });
  }
}
