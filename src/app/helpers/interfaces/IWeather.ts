import { ICity } from "./ICity";
import { IWeatherDetails } from "./IWeatherDetails";

export interface IWeather {
    city: ICity;
    cnt: number;
    cod: string;
    list: Array<IWeatherDetails>
}
