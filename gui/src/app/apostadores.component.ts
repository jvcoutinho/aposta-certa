import { Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';

import { Apostador } from './apostador';
import { ApostadorService } from './apostador.service';

@Component({
    selector: 'apostadores',
    templateUrl: './apostadores.component.html',
    styleUrls: ['./apostadores.component.css']
  })
  
  export class ApostadoresComponent implements OnInit{
    constructor(private apostadorService: ApostadorService){}

    apostador: Apostador = new Apostador();
    apostadores: Apostador[];
    
    cadastrar(a: Apostador): void {
      this.apostadorService.cadastrar(a)
        .then(ab => {
           if (ab && ab.nome.length > 0) {
              this.apostadores.push(ab);
              this.apostador = new Apostador();
              alert("Cadastro realizado com sucesso!");
           } else {
              alert("Informe um nome, por favor!");
           }
        })
        .catch(erro => alert(erro));
    }
    
    ngOnInit(): void {
      this.apostadorService.getApostadores()
      .then(as => this.apostadores = as)
      .catch(erro => alert(erro)); 
    }
  }
  