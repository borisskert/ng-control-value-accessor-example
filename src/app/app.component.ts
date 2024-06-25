import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ExampleFormularComponent} from "./example-formular/example-formular.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExampleFormularComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
