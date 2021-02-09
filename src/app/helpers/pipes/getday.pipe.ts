import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getday'
})
export class GetdayPipe implements PipeTransform {
  transform(value: string): string {
    return value.split(" ")[0];
  }
}
