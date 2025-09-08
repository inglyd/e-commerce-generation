import { Produto } from "./Produto";

export class Informatica extends Produto {
    private _especificacoes: string;

    constructor(id: number, nome: string, preco: number, categoria: number, especificacoes: string) {
        super(id, nome, preco, categoria)
        this._especificacoes = especificacoes;
    }


    public get especificacoes() {
        return this._especificacoes
    }

    public set especificacoes(especificacoes: string) {
        this._especificacoes = especificacoes;
    };
    public descricao(): void {
        super.descricao();
        console.log("Especificações técnicas: " + this._especificacoes)
    }

};