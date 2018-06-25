import request = require("request-promise");
import { closeServer } from '../server';

var base_url = "http://localhost:3000/";

describe("O servidor", () => {
    var server:any;

    beforeAll(() => {server = require('../server')});

    afterAll(() => {server.closeServer()});

    it("inicialmente retorna uma lista de apostadores vazia", () => {
        return request.get(base_url + "apostadores").then(body => 
            expect(body).toBe("[]")).catch(e => expect(e).toEqual(null));
    });

    it("só cadastra apostadores", () => {
        var options:any = {method: 'POST', uri: (base_url + "apostador"), body:{name: "Monica", email: "monica@cin.br", password: "teclado"}, json: true};
        return request(options).then(body =>
            expect(body).toEqual({failure: "O apostador não pode ser cadastrado!"})
        ).catch(e =>
            expect(e).toEqual(null)
        )
    })

    it("não cadastra apostador sem nome informado", () => {
        return request.post(base_url + "apostador", {"json":{"name": "", "email": "monica@gmail.com", "password": "0987"}}).then(body => {
            expect(body).toEqual({failure: "O apostador não pode ser cadastrado!"});
            return request.get(base_url + "apostadores").then(body => {
                expect(body).not.toContain('{"name": "", "email": "monica@gmail.com", "password": "0987"}');
            });
        });
    });
})