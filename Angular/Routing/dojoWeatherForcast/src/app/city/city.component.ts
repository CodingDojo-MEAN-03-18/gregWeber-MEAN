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
  error = false;

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.paramMap.switchMap(params => this.weatherService.getWeather(params.get('city')))
      .subscribe(city => {
        this.city = city;
        console.log(this.city);
      },
      error => {
        this.error = true;
        setTimeout(() => {
          this.error = false;
          // this.router.navigateByUrl('/');
        }, 3000);
      });
  }
}
