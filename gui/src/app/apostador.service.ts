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
    getPropostas(): any {
        return this.http.get(this.acURL + "/propostas")
        .toPromise()     
        .then(res => res.json() as Proposta[])
        .catch(e => console.log('Erro de acesso: ' + e));
    }
    getProbs(): any{
        return this.http.get(this.acURL + "/probs")
        .toPromise()
        .then(res =>res.json() as Probabilidades)
        .catch(e => console.log('Erro de acesso: ' + e));
    }
    apostadores: Apostador[] = [];
    cadastrar(apostador: Apostador): Apostador {
        var result = null;
        if(this.emailNaoCadastrado(apostador.email)) {
            this.apostadores.push(apostador);
        }
       return result;
    }
    emailNaoCadastrado(email: string): boolean {
        return !this.apostadores.find(a => a.email == email);
    }
}