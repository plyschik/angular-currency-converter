import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { min } from 'rxjs/operators';

@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {
  @Input() numbersOnly: boolean;
  @Input() minNumber: number;
  @Input() maxNumber: number;
  
  constructor(private element: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onInput(event) {
    let e = <KeyboardEvent> event;

    if (this.numbersOnly) {
      let next: string = this.element.nativeElement.value.concat(e.key);
      
      if (
        [46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+C
        (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+V
        (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) ||
        // Allow: Ctrl+X
        (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 40)
      ) {
        return;
      }

      if (+next < this.minNumber) {
        e.preventDefault();
      }

      if (+next > this.maxNumber) {
        e.preventDefault();
      }

      if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
      }
    }
  }
}