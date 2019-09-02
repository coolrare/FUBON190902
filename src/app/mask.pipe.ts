import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, num: number = 3): string {
    if (value.length > 10) {
      return value.substr(0, num) + '***' + value.substr(-num, num);
    }
    return value;
  }

}
