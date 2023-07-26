import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipe'
})
export class EmailPipe implements PipeTransform {

  transform(value: string): string {
    const e = value.toString().split('@');
    return e[0].replace(/./g, (substring, offset, string, ) => {
      return offset >= 5 ? '*' : substring;
    }) + '@' + e[1];
  }

}
