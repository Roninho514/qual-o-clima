import { Component, OnInit } from '@angular/core';
import { ClimateService } from '../../service/climate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private climateService: ClimateService){}
  clima : string[] = ['1', '2', '3', '4', '5'];

  ngOnInit(): void {
    /* this.climateService.getClimate().subscribe((data) => {
      this.clima = data;
      console.log(this.clima);
    }); */
  }
}
