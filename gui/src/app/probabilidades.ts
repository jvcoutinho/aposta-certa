class Probabilidades{
    public probMandante: any;
    public probDraw: any;
    public probVisitante: any;

    public constructor(probMandante: any, probDraw: any, probVisitante: any){
        this.probMandante = probMandante;
        this.probDraw = probDraw;
        this.probVisitante = probVisitante;
    }

    public getMandante(){
        return this.probMandante;
    }
    public setMandante(probMandante: any){
        this.probMandante = probMandante;
    }
    public getDraw(){
        return this.probDraw;
    }
    public setDraw(probDraw: any){
        this.probDraw = probDraw;
    }
    public getVisitante(){
        return this.probMandante;
    }
    public setVisitante(probVisitante: any){
        this.probVisitante = probVisitante;
    }
}