import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {
  private regex: RegExp = new RegExp(/^[1-9]{1}[0-9]{0,5}(\.{1}[0-9]{0,2})?$/);
  
  constructor(private element: ElementRef) {}

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (
      [8, 9, 13, 27, 46].indexOf(event.keyCode) !== -1 || // Allow: 8 - backspace, 9 - tab, 13 - enter, 27 - escape, 46 - delete 
      (event.keyCode === 65 && event.ctrlKey === true) || // Allow: Ctrl+A
      (event.keyCode === 67 && event.ctrlKey === true) || // Allow: Ctrl+C
      (event.keyCode === 86 && event.ctrlKey === true) || // Allow: Ctrl+V
      (event.keyCode === 88 && event.ctrlKey === true) || // Allow: Ctrl+X
      (event.keyCode === 65 && event.metaKey === true) || // Cmd+A (Mac)
      (event.keyCode === 67 && event.metaKey === true) || // Cmd+C (Mac)
      (event.keyCode === 86 && event.metaKey === true) || // Cmd+V (Mac)
      (event.keyCode === 88 && event.metaKey === true) || // Cmd+X (Mac)
      (event.keyCode >= 35 && event.keyCode <= 37 || event.keyCode == 39) // Home - 36, End - 35, Left - 37, Right - 39
    ) {
      return;
    }

    let current: string = this.element.nativeElement.value;
    let next: string = current.concat(event.key);
    if (next && !String(next).match(this.regex)) {
      event.preventDefault();
    }
  }
}