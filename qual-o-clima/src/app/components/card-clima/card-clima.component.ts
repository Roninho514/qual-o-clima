import { Component, Input, OnInit } from '@angular/core';
import { Forecastday } from '../../shared/models/clima.model';

@Component({
  selector: 'app-card-clima',
  templateUrl: './card-clima.component.html',
  styleUrl: './card-clima.component.scss'
})
export class CardClimaComponent {
  @Input() data !: Forecastday;


}
