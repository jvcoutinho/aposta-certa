import { WSAEPROTONOSUPPORT } from "constants";

// Crawler para pegar as informações dos jogos.
export class fabricaDePropostas {

    Propor(jogos):any[]{
        let propostas: any[] = [];
      
        for(let j = 0; j < 14; j++) {
            propostas.push({
                mandante: jogos[j].mandante,
                visitante: jogos[j].visitante,
                numeroJogo: "Jogo "+j+"",
                data: jogos[j].data,
                prop_Mandante: false,
                prop_Visitante: false,
                prop_Empate: true
            });
        }
        console.log(propostas);
        return propostas;
    }

}
