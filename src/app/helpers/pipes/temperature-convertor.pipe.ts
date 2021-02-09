import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConvertor'
})
export class TemperatureConvertorPipe implements PipeTransform {
  transform(kelvinValue: number): string {
    return Math.round(kelvinValue - 275.15) + " °C";
  }
}

