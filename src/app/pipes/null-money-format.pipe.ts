import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullMoneyFormat'
})
export class NullMoneyFormatPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) {
      return 0;
    }

    return value;
  }
}