import { IDetailsDescription } from "./IDetailsDescription";
import { IDetailsTemp } from "./IDetailsTemp";
import { IWind } from "./IWind";

export interface IWeatherDetails {
    clouds: Object;
    dt: number;
    dt_txt: string;
    main: IDetailsTemp;
    pop: number;
    sys: Object;
    visibility: number;
    weather: Array<IDetailsDescription>;
    wind: IWind
}
