import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-clima',
  templateUrl: './card-clima.component.html',
  styleUrl: './card-clima.component.scss'
})
export class CardClimaComponent implements OnInit {
  @Input() data:any;

  ngOnInit(): void {
    console.log(this.data);
  }

}
