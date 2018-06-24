// Crawler para pegar as informações dos jogos.

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

    crawlAcumulo($): any {
        var valorAcumulado = $("table[class='content-lottery__table-content']");
        return valorAcumulado[1].children[3].children[1].children[3].children[0].data.substr(4);
    }

    crawlProbabilidades($): any[] {
        let probabilidades: any[] = [];
        let jogos = $("tr");

        for(let i = 1; i <= 14; i++) {
            probabilidades.push({
                mandante: jogos[i].children[5].children[0].data,
                visitante: jogos[i].children[9].children[0].data,
                vitoriaMandante: jogos[i].children[3].children[0].data,
                vitoriaVisitante: jogos[i].children[11].children[0].data,
                empate: jogos[i].children[7].children[0].data
            })
        }
        
        return probabilidades;
    }

}