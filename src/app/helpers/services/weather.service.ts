import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor() {}

  async getCityWeather(city: string) {
     const response = await fetch(
       'https://community-open-weather-map.p.rapidapi.com/forecast?q=' + city,
       {
         method: 'GET',
         headers: {
           'x-rapidapi-key': '127aaa4cffmshab43f447e3fbb3dp107f35jsn41bcc8fe7af0',
           'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
           'useQueryString': 'true'
         },
       }
     )

     return response.json();
    //  .then((response) => {
    //      return response.json();
    //   }).catch((err) => {
    //      console.error(err);
    //   });
   }
}
