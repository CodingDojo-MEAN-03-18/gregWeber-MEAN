import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { City } from './models/cities';
import { onErrorResumeNext, map, tap } from 'rxjs/operators';


@Injectable()
export class WeatherService {
  private base = 'http://api.openweathermap.org/data/2.5/weather?q=';
  private key = '&units=imperial&APPID=5088bea7f729cf744a54edf5b88792a2';

  city: Observable<City>;

  constructor(private http: HttpClient) { }

  getWeather(city: string) {
    console.log(city);
    return this.http.get<City>(this.base + city + this.key)
      .pipe(onErrorResumeNext(this.city));
  }
}
