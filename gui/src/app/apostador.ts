// Apostadores.

export class Apostador {
    nome: string;
    email: string;
    senha: string;

    constructor(){
        this.clean;
    }

    clean():void {
        this.nome = "";
        this.email = "";
        this.senha = "";
    }

    clone(): Apostador {
        var apostador: Apostador = new Apostador();
        apostador.nome = this.nome;
        apostador.senha = this.senha;
        apostador.email = this.email;
        return apostador;
    }
}