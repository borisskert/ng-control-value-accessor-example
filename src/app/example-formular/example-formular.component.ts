import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {MyFormData} from "../my-form-data";
import {DateInputComponent} from "../date-input/date-input.component";
import {DateValueAccessor} from "../date-input/date-value-accessor.directive";

@Component({
  selector: 'app-example-formular',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DateValueAccessor,
    DateInputComponent,
  ],
  templateUrl: './example-formular.component.html',
  styleUrl: './example-formular.component.css'
})
export class ExampleFormularComponent implements OnInit {

  @Input()
  myFormData: MyFormData | null | undefined;

  @Output()
  submit: EventEmitter<MyFormData> = new EventEmitter<MyFormData>();

  myForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      myDate: [null],
    });
  }

  ngOnInit(): void {
    if (this.myFormData) {
      this.myForm.patchValue({
        ...this.myFormData,
        myDate: this.myFormData?.myDate,
      });
    }
  }

  onSubmit(): void {
    this.submit.emit(this.myForm.value);
  }
}
