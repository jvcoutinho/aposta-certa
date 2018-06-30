// Cadastrar apostadores no servidor.

import { Apostador } from '../gui/src/app/apostador';

export class CadastroDeApostadores {
    apostadores: Apostador[] = [];

    cadastrar(apostador: Apostador): Apostador {
        var result = null;
        if(this.nomeInformado(apostador.nome)){
            result = new Apostador();
            result.copyFrom(apostador);
            this.apostadores.push(result);
            console.log(this.apostadores);
        }return result;
    }

    nomeInformado(nome: string): boolean {
        var res = false;
        if(nome.length > 0){
            res = true;
        }
        return res;
    }

    getApostadores(): Apostador[] {
        return this.apostadores;
    }
}