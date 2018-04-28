import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { City } from './models/cities';
import { onErrorResumeNext, map, tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class WeatherService {
  private base = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private key = '&units=imperial&APPID=5088bea7f729cf744a54edf5b88792a2';

  city: Observable<City>;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }


  getWeather(city: string): Observable<City> {
    console.log(city);
    return this.http.get<City>(this.base + city + this.key)
      .pipe(
        map((data) => {
          if (!data) {
            throw new Error();
          }
          console.log(data);
          return new City(data.name, data.main.humidity, data.main.temp_max, data.main.temp_min, data.weather[0].description);
        }),
        catchError(err => {
          return this.getWeather('Seattle');
        }));
  }
}
