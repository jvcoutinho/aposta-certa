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
  
  mostrarValor(proposto){
    let valor = valorDaProposta(proposto);
    let botao = document.getElementsByClassName("valorProposta");
    if(botao[0].textContent == "Valor da proposta"){
      botao[0].textContent = "Valor da proposta: R$: "+ valor + ",00";
    }else{
      botao[0].textContent = "Valor da proposta";
    }
  }

}

function valorDaProposta(proposto){
  let val = 1;
  for (let i = 0; i < 14; i++) {
    if(proposto[i].tipo_proposta=="tripla"){
      val *= 3;
    }else if(proposto[i].tipo_proposta=="dupla"){
      val *= 2;
    }
  }
  return val;
}