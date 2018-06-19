import { Component, OnInit } from '@angular/core';
import { ApostadorService } from './apostador.service';

@Component({
  selector: 'concurso',
  templateUrl: './concurso.component.html',
  styleUrls: ['./concurso.component.css']
})

export class ConcursoComponent implements OnInit {

  public constructor(private apostasService: ApostadorService) {
      this.apostas = [];
  }

  public apostas: Aposta[];

  sortList(): void {
    let apostasOrdenadas: Aposta[] = this.apostas;
    apostasOrdenadas.sort(this.compare);
  }

  private compare = function(a, b): number {
    let days = ['Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo', 'Segunda-feira', 'Terça-feira'];
    let aIndex, bIndex;
    for(let i = 0; i < days.length; i++) {
      if(days[i] === a.data) {
          aIndex = i;
          break;
      }
    }
    for(let i = 0; i < days.length; i++) {
      if(days[i] === b.data) {
          bIndex = i;
          break;
      }
    }
    return aIndex - bIndex;
  }

  ngOnInit(): void {
    this.apostasService.getApostas()
    .then(apostas => {console.log('Apostas', apostas); this.apostas = apostas})
    .catch(e => console.log('Erro: ' + e));
  }

}