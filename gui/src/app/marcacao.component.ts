import { Component, OnInit } from '@angular/core';
import { ApostadorService } from './apostador.service';

@Component({
  selector: 'marcacao',
  templateUrl: './marcacao.component.html',
  styleUrls: ['./marcacao.component.css']
})

export class MarcacaoComponent implements OnInit {

  public constructor(private apostasService: ApostadorService) {
      this.propostas = [];
  }

  public propostas: Proposta[];

  ngOnInit(): void {
    this.apostasService.getPropostas()
    .then(propostas => {console.log('Propostas', propostas); this.propostas = propostas})
    .catch(e => console.log('Erro: ' + e));
  }

  corPropostas(id, prop){
    let square = document.getElementById(id);
    if(prop){
      square.style.background = 'red';
    }else{
      square.style.background = 'white';
    }
  }

}