import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gethours'
})
export class GethoursPipe implements PipeTransform {
  transform(value: string): string {
    return value.split(" ")[1].slice(0, 5);
  }
}
