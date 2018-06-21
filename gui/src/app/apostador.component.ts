import { Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';

import { Apostador } from './apostador';
import { ApostadorService } from './apostador.service';

@Component({
    selector: 'apostador',
    templateUrl: './apostador.component.html',
    styleUrls: ['./apostador.component.css']
  })
  
  export class ApostadorComponent implements OnInit{
    constructor(private apostadorService: ApostadorService){}

    apostador: Apostador = new Apostador();
    emailDuplicado: boolean = false;
    apostadores: Apostador[];
    
    cadastrar(a: Apostador): void {
      if(this.apostadorService.cadastrar(a)){
        this.apostadores.push(a);
        this.apostador = new Apostador();

        console.log('O apostador com nome: '+a.nome+', e-mail: '+a.email+' e senha: '+a.senha+' foi cadastrado com sucesso!')
      }else{
        this.emailDuplicado = true;
        console.log('Esse e-mail: '+a.email+' já está sendo usado por outro usuário!');
      }
    }
    onMove(): void {
      this.emailDuplicado = false;
    }
    
    ngOnInit(){
      this.apostadores = this.apostadorService.getApostadores();
  }
  
  }
  