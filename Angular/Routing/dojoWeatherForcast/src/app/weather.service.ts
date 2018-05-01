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
        map((data: any) => {
          if (!data) {
            throw new Error();
          }
          console.log(data);
          const { humidity, temp_max, temp_min } = data.main;
          const { name, weather } = data;
          const [status] = weather;
          return new City(name, humidity, temp_max, temp_min, status.description);
        }),
        catchError(err => {
          return this.getWeather('Seattle');
        }));
  }
}

