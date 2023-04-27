export class Animale{
    public nome : string;
    public verso : string;
    public zampe : number;
    public movimento : string;

    constructor(nome:string, verso:string,zampe:number,movimento:string){
        this.nome = nome;
        this.verso = verso;
        this.zampe = zampe;
        this.movimento = movimento
    }
}