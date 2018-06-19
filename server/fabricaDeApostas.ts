
// Crawler para pegar as informações dos jogos.

var request: any = require('request');
var cheerio: any = require('cheerio');
export class fabricaDeApostas {

    crawlConcurso($): any[] {
        let apostas: any[] = [];
        var jogos = $("table[id='tablepress-2142140']");

        for(let j = 1; j < 28; j = j + 2) {
            for(let i = 0; i < jogos.length; i++) {    
                
                apostas.push({
                    mandante: jogos[i].children[3].children[j].children[3].children[0].data,
                    visitante: jogos[i].children[3].children[j].children[5].children[0].data,
                    data: jogos[i].children[3].children[j].children[7].children[0].data 
                });

            }
        }
        console.log(apostas);
        return apostas;
    }
    crawlChanceDeGol($){
        let probabilidades: any[] = [];
        var games = $("table");
        for(let i = 0; i < 36; i+=2){
            for(let j = 6; j < 11; j+=2){
                probabilidades.push({
                    probWinMandante: games[19].children[i].next.next.next.children[j].next.children[0].next.children[0].data,
                    probDraw: games[19].children[i].next.next.next.children[j].next.children[0].next.children[0].data,
                    probWinVisitante: games[19].children[i].next.next.next.children[j].next.children[0].next.children[0].data,
                    //alterando o valor de i muda a seleção da linha da tabela, i sempre tem que ser +=2 para que dê certo
                    //alterando o valor de j muda a seleção da coluna da tabela, j sempre tem que ser +=2 para que dê certo
                    //o crawl como está agora seleciona todas as probabilidades do chance de gol
                });
             }
        }
        console.log(probabilidades);
        return probabilidades;
      
    }
}
