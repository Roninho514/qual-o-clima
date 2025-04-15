import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClimateService } from '../../service/climate.service';
import { ClimaInformation, Forecastday } from '../../shared/models/clima.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  constructor(private climateService: ClimateService){}
  climation !: ClimaInformation;
  climationDay !: Forecastday[];
  inputCity : string = '';
  resultValidateState : boolean = false;
  erroEstado: string | null = null;

  validateState() : boolean{
    // Limpa erro anterior
    this.erroEstado = null;

    // Validação básica: estado deve ter 2 caracteres e ser letras
    if (!this.inputCity || this.inputCity === " " || this.inputCity === "") {
      this.erroEstado = 'Por favor, Não deixe espaço vazio.';
      return false;
    }
    return true;
  }

  getStateApi() : void {
    this.resultValidateState = this.validateState();
    // Enviar para o serviço
    if(this.resultValidateState){
      this.climateService.getClimateForState(this.inputCity.toUpperCase()).subscribe((data : ClimaInformation) => {
          this.climation = data;
          this.climationDay = data.forecast.forecastday;
          // Aqui você pode atualizar o template com os dados retornados
      });
    }
  }

}
