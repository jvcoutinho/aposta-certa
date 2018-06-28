import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http';
import { Apostador } from "./apostador";

// Cadastrar apostadores.

@Injectable()
export class ApostadorService {

    private acURL: String = 'http://localhost:3000';
    private headers = new Headers({'Content-Type': 'application/json'});

    public constructor(private http: Http) {}

    cadastrar(apostador: Apostador): Promise<Apostador> {
        return this.http.post(this.acURL + "/apostador",JSON.stringify(apostador), {headers: this.headers})
            .toPromise()
           .then(res => {
              if (res.json().success) {return apostador;} else {return null;}
           })
           .catch(this.tratarErro);
    }
    
    getApostadores(): Promise<Apostador[]> {
        return this.http.get(this.acURL + "/apostadores")
                   .toPromise()
                     .then(res => res.json() as Apostador[])
                     .catch(this.tratarErro);
    }

    getApostas(): any {
        return this.http.get(this.acURL + "/apostas")
        .toPromise()     
        .then(res => res.json() as Aposta[])
        .catch(e => console.log('Erro de acesso: ' + e));
    }

    getAcumulo(): any {
        return this.http.get(this.acURL + "/acumulo")
        .toPromise()     
        .then(res => res.text())
        .catch(e => console.log('Erro de acesso: ' + e));
    }

    getPropostas(): any {
        return this.http.get(this.acURL + "/propostas")
        .toPromise()     
        .then(res => res.json() as Proposta[])
        .catch(e => console.log('Erro de acesso: ' + e));
    }

    getProbabilidades(): any {
        return this.http.get(this.acURL + "/probabilidades")
        .toPromise()
        .then(res => res.json() as Probabilidade[])
        .catch(e => console.log('Erro de acesso: ' + e));
    }

    private tratarErro(erro: any): Promise<any>{
        console.error('Acesso mal sucedido ao serviço de cadastro',erro);
        return Promise.reject(erro.message || erro);
    }
}