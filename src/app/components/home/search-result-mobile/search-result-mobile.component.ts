import { Component, Input } from '@angular/core';
import { IWeather } from 'src/app/helpers/interfaces/IWeather';

@Component({
  selector: 'app-search-result-mobile',
  templateUrl: './search-result-mobile.component.html',
  styleUrls: ['./search-result-mobile.component.css']
})
export class SearchResultMobileComponent {
  @Input() weatherInfo: IWeather;
  displayedSection: string = 'today';
  constructor() { }

  changeSection() {
    this.displayedSection = '48hours';
    let leftPart: any = document.getElementsByClassName('leftPart')[0];
    let rightPart: any = document.getElementsByClassName('rightPart')[0];
    rightPart.getElementsByClassName('imageHolder')[0].classList.add('disp-none');
    rightPart.getElementsByTagName('h1')[0].innerHTML = "next 48 hours";
    [...leftPart.getElementsByTagName('p')].forEach(foundEl => {
      foundEl.classList.add('disp-none')
    })
  }
}
