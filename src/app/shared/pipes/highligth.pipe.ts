import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highligth'
})
export class HighligthPipe implements PipeTransform {

  transform(value: string, predicate: string): string {
    return value.replace(new RegExp(predicate, 'gi'), `<mark>${predicate}</mark>`);
  }
}
