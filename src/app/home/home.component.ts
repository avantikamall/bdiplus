import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  city: any;
  temp: any;
  conditiontext: any;
  cityname: any;
  windspeed: any;
  lastUpdate: any;
  humidity: any;
  pressure: any;
  cloudy: any;
  isShow = false;
  isCondition = false;
  isPartCloud = false;
  defaultVal = false;
  weatherData = {
    "location": {
      "name": "Delhi",
      "region": "Ontario",
      "country": "Canada",
      "lat": 42.85,
      "lon": -80.5,
      "tz_id": "America/Toronto",
      "localtime_epoch": 1689095488,
      "localtime": "2023-07-11 13:11"
    },
    "current": {
      "last_updated_epoch": 1689094800,
      "last_updated": "2023-07-11 13:00",
      "temp_c": 25.5,
      "temp_f": 77.9,
      "is_day": 1,
      "condition": {
        "text": "Sunny",
        "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
        "code": 1000
      },
      "wind_mph": 5.6,
      "wind_kph": 9,
      "wind_degree": 260,
      "wind_dir": "W",
      "pressure_mb": 1011,
      "pressure_in": 29.87,
      "precip_mm": 0,
      "precip_in": 0,
      "humidity": 64,
      "cloud": 0,
      "feelslike_c": 27.1,
      "feelslike_f": 80.8,
      "vis_km": 10,
      "vis_miles": 6,
      "uv": 7,
      "gust_mph": 20.8,
      "gust_kph": 33.5
    }
  }
  constructor(public weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

  setWeather() {
    console.log("this", this.city)

    // this.temp = this.weatherData.current.temp_c;
    // this.conditiontext = this.weatherData.current.condition.text;
    // this.cityname = this.weatherData.location.name;
    // this.windspeed = this.weatherData.current.wind_kph;
    // this.humidity = this.weatherData.current.humidity;
    // this.lastUpdate = this.weatherData.current.last_updated;
    // this.isShow = true;

    this.weatherService.getApi(this.city).subscribe((res: any) => {
      this.temp = res.current.temp_c;
      this.conditiontext = res.current.condition.text;
      this.cityname = res.location.name;
      this.windspeed = res.current.wind_kph;
      this.humidity = res.current.humidity;
      this.pressure = res.current.pressure_mb;
      this.lastUpdate = res.current.last_updated;
      this.cloudy = res.current.cloud;
      if (this.conditiontext === 'Sunny') {
        this.isCondition = true;
      } else if (this.conditiontext === 'Partly cloudy') {
        this.isPartCloud = true;
      } else {
        this.defaultVal = true;
      }
      this.isShow = true;
    })
    // this.city = 'GeeksforGeeks';
  }

}
