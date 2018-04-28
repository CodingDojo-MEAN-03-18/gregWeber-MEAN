import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
// import { switchMap } from 'rxjs/operator/switchMap';
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
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap(params => this.weatherService.getWeather(params.get('city')))
      .subscribe(city => {
        this.city = city;
        // this.avgTemp = (city.main.temp_max + city.main.temp_min) / 2;
        console.log('city object: ', this.city);
      },
      error => this.router.navigateByUrl('seattle')
    );
  }
}
