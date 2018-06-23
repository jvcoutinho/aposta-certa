// Apostas e suas probabilidades.

class Proposta {

    public mandante: String;
    public visitante: String;
    public numeroJogo: String;
    public data: String;
    private prop_Mandante: boolean;
    public prop_Visitante: boolean;
    private prop_Empate: boolean;

    public constructor(mandante: String, visitante: String, numeroJoso: String, data: String, prop_Mandante: boolean, prop_Visitante: boolean, prop_Empate: boolean) {
        this.mandante = mandante;
        this.visitante = visitante;
        this.numeroJogo = numeroJoso;
        this.data = data;
        this.prop_Mandante = prop_Mandante;
        this.prop_Visitante = prop_Visitante;
        this.prop_Empate = prop_Empate;
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

    public getNumeroJogo(){
        return this.numeroJogo;
    }

    public setNumeroJogo(numeroJOgo: String){
        this.numeroJogo = numeroJOgo;
    }
    public getData() {
        return this.data;
    }

    public setData(data: String) {
        this.data = data;
    }

    public getprop_Empate(){
        return this.prop_Empate;
    }

    public setprop_Empate(valor: boolean) {
        this.prop_Empate = valor;
    }

    public getprop_Mandante(){
        return this.prop_Mandante;
    }

    public setprop_Mandante(valor: boolean) {
        this.prop_Mandante = valor;
    }

    public getprop_Visitante(){
        return this.prop_Visitante;
    }

    public setprop_Visitante(valor: boolean) {
        this.prop_Visitante = valor;
    }
}