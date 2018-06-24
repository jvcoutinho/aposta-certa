// Cadastrar apostadores no servidor.

import { Apostador } from '../gui/src/app/apostador';

export class CadastroDeApostadores {
    apostadores: Apostador[] = [];

    cadastrar(apostador: Apostador): Apostador {
        var result = null;
        if(apostador.nome.length > 0){
            result = new Apostador();
            result.copyFrom(apostador);
            this.apostadores.push(result);
            console.log(this.apostadores);
        }return result;
    }

    getApostadores(): Apostador[] {
        return this.apostadores;
    }
}