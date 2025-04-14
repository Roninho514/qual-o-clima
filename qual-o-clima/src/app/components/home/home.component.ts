import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ClimateService } from '../../service/climate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  constructor(private climateService: ClimateService){}
  clima : number[] = [1, 2, 3, 4, 5];
  inputCity : string = '';

  estado: string = '';
  erroEstado: string | null = null;

  validarEstado() {
    // Limpa erro anterior
    this.erroEstado = null;
  
    // Validação básica: estado deve ter 2 caracteres e ser letras
    if (!this.estado || this.estado.trim().length !== 2 || !/^[A-Za-z]{2}$/.test(this.estado)) {
      this.erroEstado = 'Por favor, digite a sigla do estado com 2 letras (ex: SP).';
      return;
    }
  
    // Enviar para o serviço
    this.climateService.buscarClimaPorEstado(this.estado.toUpperCase()).subscribe({
      next: (resposta) => {
        console.log('Dados do clima:', resposta);
        // Aqui você pode atualizar o template com os dados retornados
      },
      error: (erro) => {
        this.erroEstado = 'Erro ao buscar clima. Tente novamente.';
        console.error(erro);
      }
    });
  }

  ngOnInit(): void {
    /* this.climateService.getClimate().subscribe((data) => {
      this.clima = data;
      console.log(this.clima);
    }); */
  }
}
