import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimateService {

  constructor(private http: HttpClient) { }

  url : string = 'https://api.openweathermap.org/data/2.5/weather?q=S%C3%A3o%20Paulo&appid=68acac519acf6ce38e931e8829534c33&units=metric&lang=pt_br';

  getClimate() {
    console.log("Chamou");
     /* this.http.get(this.url); */
  }
  buscarClimaPorEstado(estado: string): Observable<any> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${estado}&appid=68acac519acf6ce38e931e8829534c33&units=metric&lang=pt_br`;
    return this.http.get<any>(url);
  }
}
