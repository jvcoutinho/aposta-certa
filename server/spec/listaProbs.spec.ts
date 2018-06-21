import { fabricaDeApostas } from "../fabricaDeApostas";

var request: any = require('request-promise');
var cheerio: any = require('cheerio');

describe('Lista de jogos', () =>{
    var options = {
        uri: 'http://www.chancedegol.com.br/copa18.htm',
        transform: function(body){
            return cheerio.load(body);
        }
    }
    
    var crawler = new fabricaDeApostas();

    it('Deve ter 14 ou mais jogos', () =>{
        return request(options)
        .then ($ => {
            let jogos = crawler.crawlChanceDeGol($);
            expect(jogos.length).toBeGreaterThanOrEqual(14);
        })
        .catch(e => {
            expect(e).toBe(null)
        });
    });

    it('Deve ter probabilidades', () =>{
        return request(options)
        .then($ =>{
            let probs = crawler.crawlChanceDeGol($);
            for(let i = 0; i < probs.length; i++){
                expect(probs[i].probMandante).not.toBeUndefined();
                expect(probs[i].probDraw).not.toBeUndefined();
                expect(probs[i].probVisitante).not.toBeUndefined();
            }

        })
        .catch(e => {
            expect(e).toBe(null);
        });


    });
});