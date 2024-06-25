import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ExampleFormularComponent} from "./example-formular/example-formular.component";
import {MyFormData} from "./my-form-data";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleFormularComponent, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  submittedFormData: MyFormData | null = null;

  exampleFormData: MyFormData = {
    myDate: new Date(1979, 10, 16, 23, 54, 59, 234),
  };

  onSubmit(myFormData: MyFormData) {
    console.log('onSubmit', myFormData);
    this.submittedFormData = myFormData;
  }
}
