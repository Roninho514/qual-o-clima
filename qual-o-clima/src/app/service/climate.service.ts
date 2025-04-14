import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {

  constructor(private http: HttpClient) { }

  url : string = 'http://api.weatherapi.com/v1/forecast.json?key=7540376f250b4ea39d0142514250904&';

  getClimate() {
    console.log("Chamou");
     /* this.http.get(this.url); */
  }
  buscarClimaPorEstado(estado: string): Observable<any> {
    return this.http.get<any>(this.url + `q=${estado}&days=7&aqi=no&alerts=no`);
  }
}
