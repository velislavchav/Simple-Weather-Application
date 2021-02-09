import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from 'src/app/helpers/interfaces/IWeather';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() weatherInfo: IWeather;
  displayedSection = "today";
  constructor() { }

  changeSection(section) {
    this.displayedSection = section;
  }

  ngOnInit(): void {
  }
}
