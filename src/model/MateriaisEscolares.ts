import { Produto } from "./Produto";

export class MateriaisEscolares extends Produto {
    private _quantidade: number;

    constructor(id: number, nome: string, preco: number, categoria: number, quantidade: number) {
        super(id, nome, preco, categoria)
        this._quantidade = quantidade;
    }


    public get quantidade() {
        return this._quantidade
    }

    public set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    };
    public descricao(): void {
        super.descricao();
        console.log("Quantidade: " + this._quantidade)
    }
}