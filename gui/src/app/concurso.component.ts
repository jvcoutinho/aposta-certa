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
      this.accumulated = "ACUMULOU!";
      this.prize = "";
      this.probabilidades = [];
      this.concurso = [];
  }

  public apostas: Aposta[];
  public accumulated: String;
  public prize: String;
  public probabilidades: Probabilidade[];
  public concurso: any[];

  sortList(): void {
    this.apostas.sort(this.compare);
  }

  private compare = function(a, b): number {
    let days = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return findIndex(days, a.data) - findIndex(days, b.data);
  }

  ngOnInit(): void {
    this.apostasService.getApostas()
    .then(apostas => this.apostas = apostas)
    .catch(e => console.log('Erro: ' + e));

    this.apostasService.getAcumulo()
    .then(prize => {  this.prize = prize; this.setAccumulated(); })
    .catch(e => console.log('Erro: ' + e));

    this.apostasService.getProbabilidades()
    .then(probabilidades => { this.probabilidades = probabilidades; this.intercalate(); })
    .catch(e => console.log('Erro: ' + e));
  }

  private setAccumulated() {
    if(this.prize.length >= 12)
      this.accumulated = 'ACUMULOU!';
    else
      this.accumulated = '';
  }

  private intercalate() {
    
    let apostas = document.getElementsByClassName('apostas');
    let probabilidades: NodeListOf<HTMLTableCellElement> = document.querySelectorAll('.probabilidades');
    for(let i = 0; i < apostas.length; i++) {
      let probabilidadesText = probabilidades[i].querySelectorAll("td");
      probabilidadesText[0].textContent = 'V: ' + this.probabilidades[i].vitoriaMandante;
      probabilidadesText[1].textContent = 'E: ' + this.probabilidades[i].empate;
      probabilidadesText[2].textContent = 'V: ' + this.probabilidades[i].vitoriaVisitante;

      let visibleControl = false;
      apostas[i].addEventListener('click', e => {
        if(visibleControl === true) {
            probabilidades[i].style.visibility = 'collapse';
            visibleControl = false;
        } else {
          probabilidades[i].style.visibility = 'visible';
          visibleControl = true;
        }
      });
    }
  }
  
  showProbabilidades(tr: HTMLTableRowElement): void {
    console.log(tr);
    var probabilidades = tr.getElementsByTagName("td");
    for(let i = 0; i < probabilidades.length; i++)
      probabilidades[i].style.display = "table-cell";
  } 

}

function findIndex(array: any[], element: any): number {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === element) {
        return i;
    }
  }
}