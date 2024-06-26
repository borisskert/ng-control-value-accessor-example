import {Directive, ElementRef, forwardRef, HostListener, Renderer2} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

/**
 * See: https://github.com/JohannesHoppe/angular-date-value-accessor
 */
@Directive({
  selector: '[useValueAsDate]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateValueAccessor),
      multi: true
    }
  ],
})
export class DateValueAccessor implements ControlValueAccessor {

  @HostListener('input', ['$event.target.valueAsDate']) onChange = (_: any) => {
  };
  @HostListener('blur', []) onTouched = () => {
  };

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  writeValue(date?: Date): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'valueAsDate', date);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
  }
}
