import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClimateService } from '../../service/climate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  constructor(private climateService: ClimateService){}
  clima : any ;
  inputCity : string = '';
  validateState : boolean = false;
  erroEstado: string | null = null;

  validarEstado() {
    // Limpa erro anterior
    this.erroEstado = null;

    // Validação básica: estado deve ter 2 caracteres e ser letras
    if (!this.inputCity || this.inputCity === " " || this.inputCity === "") {
      this.erroEstado = 'Por favor, Não deixe espaço vazio.';
      return false;
    }
    return true;
  }

  getStateApi() {

    this.validateState = this.validarEstado();
    // Enviar para o serviço
    if(this.validateState){
      this.climateService.buscarClimaPorEstado(this.inputCity.toUpperCase()).subscribe((data) => {
          this.clima = data.forecast.forecastday;
          console.log('Dados do clima:', this.clima);
          // Aqui você pode atualizar o template com os dados retornados
      });
    }
  }

}
