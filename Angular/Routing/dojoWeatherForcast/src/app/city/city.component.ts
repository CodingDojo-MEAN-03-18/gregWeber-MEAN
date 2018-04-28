import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';
import 'rxjs/add/operator/switchMap';
import { City } from '../models/cities';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city: City;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap(params => this.weatherService.getWeather(params.get('city')))
      .subscribe(city => {
        this.city = city;
        console.log('city object: ', this.city);
      });
  }
}
