import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConcursoComponent } from './concurso.component';
import { ApostadoresComponent } from './apostadores.component';
import { ApostadorService } from './apostador.service';

@NgModule({
  declarations: [
    AppComponent,
    ConcursoComponent,
    ApostadoresComponent
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
        path: 'apostadores',
        component: ApostadoresComponent
      }
    ])
  ],
  providers: [ApostadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
