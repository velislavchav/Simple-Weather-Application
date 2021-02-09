import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { SearchResultComponent } from './search-result/search-result.component';
import { TemperatureConvertorPipe } from 'src/app/helpers/pipes/temperature-convertor.pipe';
import { GetdayPipe } from 'src/app/helpers/pipes/getday.pipe';
import { GethoursPipe } from 'src/app/helpers/pipes/gethours.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    SearchResultComponent,
    TemperatureConvertorPipe,
    GetdayPipe,
    GethoursPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class HomeModule { }
