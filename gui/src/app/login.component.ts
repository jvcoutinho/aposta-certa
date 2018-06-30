import { Component, OnInit} from '@angular/core';
import { ApostadorService } from './apostador.service';
import { Apostador } from './apostador';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { posLoginComponent } from './posLogin.component';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent{

    constructor(private apostadorService: ApostadorService, private router: Router) {
    }
    apostador: Apostador = new Apostador();
    apostadores: Apostador[] = [];

    entrar(a: Apostador): void{

    this.apostadorService.getApostadores()
    .then(seilaa => this.apostadores = seilaa)
    .catch(e => console.log('Erro: ' + e));
      
        for(let i=0; i<this.apostadores.length; i++){
            if(this.apostadores[i].email == a.email){
                if(this.apostadores[i].senha == a.senha){
                    alert("O usuario entrou!");
                    this.apostador = new Apostador();
                    this.router.navigate(['/posLogin']);
                    (<HTMLElement>document.getElementsByClassName('home')[0]).style.display = 'none';
                }else{
                    alert("Senha incorreta!")
                    this.apostador = new Apostador();
                }
            }
        }
    }
  }
  