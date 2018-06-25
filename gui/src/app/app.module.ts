import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConcursoComponent } from './concurso.component';

import { MarcacaoComponent } from './marcacao.component';

import { ApostadoresComponent } from './apostadores.component';
import { ApostadorService } from './apostador.service';

import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    AppComponent,
    ConcursoComponent,
    MarcacaoComponent,
    ApostadoresComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    RouterModule.forRoot([
      {
        path: 'concurso',
        component: ConcursoComponent
      },
      {
        path: 'marcacao',
        component: MarcacaoComponent
      },
      {
        path: 'apostadores',
        component: ApostadoresComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ])
  ],
  providers: [ApostadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
