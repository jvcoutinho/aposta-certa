// Apostadores.

export class Apostador {
    nome: string;
    email: string;
    senha: string;

    constructor(){
        this.clean();
    }

    clean(): void {
        this.nome = "";
        this.email = "";
        this.senha = "";
    }

    clone(): Apostador {
        var apostador: Apostador = new Apostador();
        apostador.copyFrom(this);
        return apostador;
    }

    copyFrom(from: Apostador): void {
        this.nome = from.nome;
        this.senha = from.senha;
        this.email = from.email;
    }
}