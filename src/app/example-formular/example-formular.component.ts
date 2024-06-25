import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MyFormData} from "../my-form-data";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-example-formular',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './example-formular.component.html',
  styleUrl: './example-formular.component.css'
})
export class ExampleFormularComponent implements OnInit {

  @Input()
  myFormData: MyFormData | null | undefined;

  myForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      myDate: [null],
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.myFormData);

    if (this.myFormData) {
      console.log('patchValue', this.myFormData);
      this.myForm.patchValue({
        ...this.myFormData,
        myDate: formatDate(this.myFormData?.myDate, 'yyyy-MM-dd', 'en'),
      });
    }
  }

  onSubmit(): void {
    console.log('onSubmit', this.myForm.value);
  }
}
