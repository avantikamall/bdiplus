import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private https: HttpClient) {
  }

  getApi(city: any) {
    const url = `&q=${city}&aqi=no`

    return this.https.get(environment.baseurl + url);
  }

}
