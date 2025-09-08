import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";
import { colors } from "../util/Colors";


export class ProdutoController implements ProdutoRepository {

    atualizar(produto: Produto): void {
        let buscaProduto = this.buscarNoArray(produto.id);
        if (buscaProduto != null) {
            this.listaProdutos[this.listaProdutos.indexOf(buscaProduto)] = produto;
            console.log(colors.fg.green, "\nO produto id: " + produto.id + " foi atualizada com sucesso!", colors.reset);
        } else {
            console.log(colors.fg.red, "\nO produto id: " + produto.id + " não foi encontrada!", colors.reset);
        }
    }

    deletar(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            this.listaProdutos.splice(this.listaProdutos.indexOf(buscaProduto), 1);
            console.log(colors.fg.green, "\nO produto id: " + id +
                " foi apagada com sucesso!", colors.reset);
        } else
            console.log(colors.fg.red, "\nO produto id: " + id +
                " não foi encontrada!", colors.reset);
    }


    private listaProdutos: Array<Produto> = new Array<Produto>();
    id: number = 0;

    listarTodos(): void {
        for (let produto of this.listaProdutos) {
            produto.descricao();
        }
    };
    cadastrar(produto: Produto): void {
        this.listaProdutos.push(produto)
        console.log(colors.fg.green, "\nO produto número: " + produto.id + " foi criado com sucesso!", colors.reset)
    }
    public gerarId(): number {
        return ++this.id;
    }
    public buscarNoArray(id: number): Produto | null {
        for (let produto of this.listaProdutos) {
            if (produto.id === id)
                return produto;
        }
        return null
    }
    procurarPorId(id: number): void {
        let buscaProduto = this.buscarNoArray(id);

        if (buscaProduto != null) {
            buscaProduto.descricao();
        } else {
            console.log(colors.fg.red, "\nO produto id: " + id + " não foi encontrado!", colors.reset);
        }
    }



}