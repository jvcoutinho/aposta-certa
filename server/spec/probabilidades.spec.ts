var request: any = require('request-promise');
var cheerio: any = require('cheerio');
var url: any  = require('url-parse');
import {fabricaDeApostas} from '../fabricaDeApostas';

describe('The list of probabilities', () => {

    var options = {
        uri: 'http://romers.com.br/',
        transform: function (body) {
            return cheerio.load(body);
        }
    };

    var crawler = new fabricaDeApostas();

    it('should have 14 games', () => {
        return request(options)
            .then($ => {
                let probabilidades = crawler.crawlProbabilidades($);
                expect(probabilidades.length).toBe(14);
            })
            .catch(e => {
                expect(e).toBe(null);
            });
    });

    it('should have 3 probabilities', () => {
        return request(options)
            .then($ => {
                let probabilidades = crawler.crawlProbabilidades($);
                let vitoriaMandante, vitoriaVisitante, empate;
                for(let i = 0; i < probabilidades.length; i++) {
                    vitoriaMandante = probabilidades[i].vitoriaMandante;
                    vitoriaVisitante = probabilidades[i].vitoriaVisitante;
                    empate = probabilidades[i].empate;
                    
                    expect(vitoriaMandante).toMatch(/[\d]*%/);
                    expect(vitoriaVisitante).toMatch(/[\d]*%/);
                    expect(empate).toMatch(/[\d]*%/);
                    expect(Number(vitoriaMandante.split('%')[0]) + Number(vitoriaVisitante.split('%')[0]) + Number(empate.split('%')[0])).not.toBeGreaterThan(101);
                }
            })
            .catch(e => {
                expect(e).toBe(null);
            });
    });

});