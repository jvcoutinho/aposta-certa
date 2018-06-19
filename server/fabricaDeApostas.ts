// Crawlers para pegar as informações sobre os jogos
var request: any = require('request');
var cheerio: any = require('cheerio');
var url: any = require('url-parser');


class fabricaDeApostas {
    private pageToVisit: String;

    public constructor(pageToVisit: String) {
        this.pageToVisit = pageToVisit;
    }

    public crawlChanceDeGol($){
        console.log("Visitando a página: " + this.pageToVisit);
        request(this.pageToVisit, function(error, response, body){
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
