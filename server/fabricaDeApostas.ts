
// Crawler para pegar as informações dos jogos.

var request: any = require('request');
var cheerio: any = require('cheerio');
var url: any = require('url-parser');
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

        return apostas;
    }
    public crawlChanceDeGol($){
        var pageToVisit = 'http://www.chancedegol.com.br/copa18.htm';
        console.log("Visitando a página: " + pageToVisit);
        request(pageToVisit, function(error, response, body){
            if(error){
                console.log("Error: " + error);
            }

            //Checando resposta HTTP 200
            console.log("Status: " + response.statusCode);
            if(response.statusCode === 200){
                //Pegando o body HTML do site requisitado
                var takeBody = cheerio.load(body);
                var jogos = $("table");

                for(let i = 0; i < jogos.length; i++){
                    for(let j = 0; j < jogos.length; j++){
                        console.log(jogos[i].children[j]);
                    }
                }

            }

        });
    }
}
