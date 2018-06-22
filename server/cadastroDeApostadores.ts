// Cadastrar apostadores no servidor.

import { Apostador } from '../gui/src/app/apostador';

export class CadastroDeApostadores {
    apostadores: Apostador[] = [];

    cadastrar(apostador: Apostador): Apostador {
        var result = null;
        if(this.emailNaoCadastrado(apostador.email)){
            result = new Apostador();
            result.copyFrom(apostador);
            this.apostadores.push(result);
        }return result;
    }

    emailNaoCadastrado(email: string): boolean {
        return !this.apostadores.find(a => a.email == email);
    }

    getApostadores(): Apostador[] {
        return this.apostadores;
    }
}