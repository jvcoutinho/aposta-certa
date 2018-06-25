import { CadastroDeApostadores } from '../cadastroDeApostadores';
import { Apostador } from '../../gui/src/app/apostador';

describe("O cadastro de apostadores", () => {
    var cadastro: CadastroDeApostadores;

    beforeEach(() => cadastro = new CadastroDeApostadores())

    it("é inicialmente vazio", () => {
        expect(cadastro.getApostadores().length).toBe(0);
    })

    it("cadastra apostadores corretamente", () => {
        var apostador: Apostador = new Apostador();
        apostador.nome = "Maria";
        apostador.email = "m@gmail.com";
        apostador.senha = "321";
        cadastro.cadastrar(apostador);
    
        expect(cadastro.getApostadores().length).toBe(1);
        apostador = cadastro.getApostadores()[0];
        expect(apostador.nome).toBe("Maria");
        expect(apostador.email).toBe("m@gmail.com");
        expect(apostador.senha).toBe("321");
    })
    
    it("não aceita apostadores sem nome informado", () => {
        var apostador: Apostador = new Apostador();
        apostador.email = "m@gmail.com";
        apostador.senha = "321";
        cadastro.cadastrar(apostador);
        
        expect(cadastro.getApostadores().length).toBe(0);
    })
})