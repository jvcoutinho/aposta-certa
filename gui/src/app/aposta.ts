// Apostas e suas probabilidades.

class Aposta {

    public mandante: String;
    public visitante: String;
    public data: String;

    public constructor(mandante: String, visitante: String, data: String) {
        this.mandante = mandante;
        this.visitante = visitante;
        this.data = data;
    }

    public getMandante(): String {
        return this.mandante;
    }

    public setMandante(mandante: String): void {
        this.mandante = mandante;
    }   

    public getVisitante() {
        return this.visitante;
    }

    public setVisitante(visitante: String) {
        this.visitante = visitante;
    }

    public getData() {
        return this.data;
    }

    public setData(data: String) {
        this.data = data;
    }

}