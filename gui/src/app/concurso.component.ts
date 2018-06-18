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

  ngOnInit(): void {
    this.apostasService.getApostas()
    .then(apostas => {console.log('Apostas', apostas); this.apostas = apostas})
    .catch(e => console.log('Erro: ' + e));
  }

}