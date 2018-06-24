import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { Apostador } from './apostador';
import { ApostadorService } from './apostador.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private apostadorService: ApostadorService){}

  title = 'app';

  apostador: Apostador = new Apostador();
  apostadores: Apostador[] = [];

  cadastrar(a: Apostador): void {
    if(this.apostadorService.cadastrar(a)){
      this.apostadores.push(a);
      this.apostador = new Apostador();
    }
  }
}
