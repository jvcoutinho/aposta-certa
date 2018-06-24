import { Component, OnInit } from '@angular/core';
import { ApostadorService } from './apostador.service';

@Component({
  selector: 'concaurso',
  templateUrl: './concurso.component.html',
  styleUrls: ['./concurso.component.css']
})

export class ConcursoComponent implements OnInit {

  public constructor(private apostasService: ApostadorService) {
      this.apostas = [];
  }

  public apostas: Aposta[];
  public probs: Probabilidades[];

  sortList(): void {
    this.apostas.sort(this.compare);
  }

  private compare = function(a, b): number {
    let days = ['Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo', 'Segunda-feira', 'Terça-feira'];
    return findIndex(days, a.data) - findIndex(days, b.data);
  }

  ngOnInit(): void {
    this.apostasService.getApostas()
    .then(apostas => {console.log('Apostas', apostas); this.apostas = apostas})
    .catch(e => console.log('Erro: ' + e));
    
    this.apostasService.getProbs()
    .then(probs => {console.log('Probabilidades', probs); this.probs = probs})
    .catch(e => console.log('Erro: ' + e));
  }

}

function findIndex(array: any[], element: any): number {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === element) {
        return i;
    }
  }
}