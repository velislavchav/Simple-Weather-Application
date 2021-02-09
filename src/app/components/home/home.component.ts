import { Component } from '@angular/core';
import { IWeather } from 'src/app/helpers/interfaces/IWeather';
import { WeatherService } from 'src/app/helpers/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  value: string = '';
  error: string = '';
  weatherInfo: IWeather;
  currentDate: string = new Date().toLocaleDateString();
  constructor(private weatherService: WeatherService) {}

  getWeatherByCity() {
    this.error = '';
    this.weatherService.getCityWeather(this.value).then(response => {
      if(response.cod != 404 ) {
        this.weatherInfo = response;
        this.weatherInfo.list.splice(16)
      } else {
        this.error = response.message;
      }
    });
  }
}
