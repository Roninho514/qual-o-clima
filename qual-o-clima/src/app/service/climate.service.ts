import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClimaInformation } from '../shared/models/clima.model';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {

  constructor(private http: HttpClient) { }

  url : string = 'http://api.weatherapi.com/v1/forecast.json?key=7540376f250b4ea39d0142514250904&';

  getClimateForState(estado: string): Observable<ClimaInformation> {
    return this.http.get<ClimaInformation>(this.url + `q=${estado}&days=7&aqi=no&alerts=no`);
  }
}
