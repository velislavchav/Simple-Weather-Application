import { Component, OnInit } from '@angular/core';
import { IWeather } from 'src/app/helpers/interfaces/IWeather';
import { WeatherService } from 'src/app/helpers/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  innerWidth: number;
  value: string = '';
  error: string = '';
  weatherInfo: IWeather;
  currentDate: string = new Date().toLocaleDateString();
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
     this.innerWidth = window.innerWidth;
  }

  getWeatherByCity() {
    this.error = '';
    if(this.value.length >= 3) {
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
}
