// Crawler para pegar as informações dos jogos.
var probabilidades: any[] = [];
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
    crawlChanceDeGol($): any[]{
        var games = $("table");
        for(let i = 0; i < 38; i+=2){
                probabilidades.push({
                    mandante: games[19].children[i].next.next.next.children[2].next.children[0].next.children[0].data,
                    visitante: games[19].children[i].next.next.next.children[4].next.children[0].next.children[0].data,
                    probMandante: games[19].children[i].next.next.next.children[6].next.children[0].next.children[0].data,
                    probDraw: games[19].children[i].next.next.next.children[8].next.children[0].next.children[0].data,
                    probVisitante: games[19].children[i].next.next.next.children[10].next.children[0].next.children[0].data,
                });
        }
        console.log(probabilidades);
        return probabilidades;
      
    }
    getProbs(): any[]{
        let probs: any[] = [];
        for(let i = 0; i < 14; i++){
            probs.push({
                Home: probabilidades[i].probMandante,
                Visit: probabilidades[i].probVisitante,
                Draw: probabilidades[i].probDraw
            });
        }
        return probs;
    }
    
}