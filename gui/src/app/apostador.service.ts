import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import { Apostador } from './apostador';
// Cadastrar apostadores.

@Injectable()
export class ApostadorService {

    private acURL: String = 'http://localhost:3000';
    private headers = new Headers({'Content-Type': 'application/json'});

    public constructor(private http: Http) {}

    getApostas(): any {
        return this.http.get(this.acURL + "/apostas")
        .toPromise()     
        .then(res => res.json() as Aposta[])
        .catch(e => console.log('Erro de acesso: ' + e));
    }
    apostadores: Apostador[] = [];
    cadastrar(apostador: Apostador): Apostador {
        var result = null;
        if(!this.apostadores.find(a => a.email == apostador.email)) {
            this.apostadores.push(apostador);
        }
       return result;
    }
}