import {Component, Inject, Injector, INJECTOR, Input} from '@angular/core';
import {ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {DateValueAccessor} from "./date-value-accessor.directive";

@Component({
  selector: 'app-date-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    DateValueAccessor,
  ],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.css',
})
export class DateInputComponent implements ControlValueAccessor {
  value: Date | null = null;

  @Input()
  allowTime = false;

  private isDisabled = false;

  private readonly _control: NgControl;

  private onChange: (_: any) => void = () => {
  };
  private onTouched: () => void = () => {
  };

  constructor(
    @Inject(INJECTOR) private injector: Injector,
  ) {
    this._control = this.injector.get(NgControl);
    this._control.valueAccessor = this;
  }

  get control(): FormControl {
    return this._control.control as FormControl;
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onDateChange($event: Event) {
    const eventValue = $event.target ? ($event.target as HTMLInputElement).value : null;

    if (!eventValue) {
      this.value = null;
      this.onChange(null);
    }

    const date = new Date(eventValue as string);
    this.onChange(date);
  }
}
