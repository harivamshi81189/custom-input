import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appNumberWithCommas]',
})
export class NumberWithCommasDirective {
  private regex: RegExp = new RegExp(/^-?\d*\.?\d{0,2}$/g);

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const initialValue = input.value.replace(/,/g, '');

    if (!this.regex.test(initialValue)) {
      this.regex.lastIndex = 0;
      console.log('not valid', initialValue);
      input.value = this.formatNumber(initialValue.slice(0, -1));
      return;
    }

    this.regex.lastIndex = 0;

    const cursorPosition = input.selectionStart;

    // Format the number and update the input value
    input.value = this.formatNumber(initialValue);

    // Restore the cursor position
    const formattedValue = input.value;
    const diff = formattedValue.length - initialValue.length;
    if (cursorPosition !== null) {
      input.setSelectionRange(cursorPosition + diff, cursorPosition + diff);
    }
  }

  private formatNumber(value: string): string {
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
}
