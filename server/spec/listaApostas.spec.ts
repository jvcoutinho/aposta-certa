var request: any = require('request-promise');
var cheerio: any = require('cheerio');
var url: any  = require('url-parse');
import {fabricaDeApostas} from '../fabricaDeApostas';

describe('The list of bets', () => {

    var options = {
        uri: 'https://www.gazetaesportiva.com/loteca/#futebol',
        transform: function (body) {
            return cheerio.load(body);
        }
    };

    var crawler = new fabricaDeApostas();

    it('should have 14 games', () => {
        return request(options)
            .then($ => {
                let apostas = crawler.crawlConcurso($);
                expect(apostas.length).toBe(14);
            })
            .catch(e => {
                expect(e).toBe(null);
            });
    });

    it('should have days of the week in the final column', () => {
        return request(options)
            .then($ => {
                let apostas = crawler.crawlConcurso($);
                for(let i = 0; i < apostas.length; i++)
                    expect(apostas[i].data).toMatch(/Domingo|Segunda|Terça|Quarta|Quinta|Sexta|Sábado/);
            })
            .catch(e => {
                expect(e).toBe(null);
            });
    });

});
