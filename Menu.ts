import * as readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";
import { MateriaisEscolares } from "./src/model/MateriaisEscolares";
import { Informatica } from "./src/model/Informatica";
import { ProdutoController } from "./src/controller/ProdutoController";

export function main() {

    let produtos: ProdutoController = new ProdutoController();
    let opcao, preco, categoria, id, quantidade: number;
    let nome, especificacoes: string;

    const categorias = ['Materiais escolares', 'Informática'];

    // Início do código completado
    console.log("\nCriar Produtos\n");

    // Criando produtos da categoria 'Materiais escolares' (categoria 1)

    let produto1: MateriaisEscolares = new MateriaisEscolares(produtos.gerarId(), "Caderno Universitário", 27.90, 1, 150);
    produtos.cadastrar(produto1);

    let produto2: MateriaisEscolares = new MateriaisEscolares(produtos.gerarId(), "Lápis de Cor 24 Cores", 42.50, 2, 300);
    produtos.cadastrar(produto2);

    // Criando produtos da categoria 'Informática' (categoria 2)
    let produto3: Informatica = new Informatica(produtos.gerarId(), "Monitor LED 24 polegadas", 899.99, 3, "Full HD, 75Hz, HDMI/VGA");
    produtos.cadastrar(produto3);

    let produto4: Informatica = new Informatica(produtos.gerarId(), "SSD 480GB", 250.00, 4, "SATA III, Leitura 550MB/s, Gravação 520MB/s");
    produtos.cadastrar(produto4);

    // Listando todos os produtos cadastrados
    produtos.listarTodos();

    while (true) {
        console.log(colors.bg.black, colors.fg.yellow,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                PAPELARIA - PAPEL MARIA              ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar produto                    ");
        console.log("            2 - Listar todos os produtos             ");
        console.log("            3 - Buscar produto por id                ");
        console.log("            4 - Atualizar Dados do produto           ");
        console.log("            5 - Apagar produto                       ");
        console.log("            6 - Sair                                 ");


        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt();

        if (opcao == 6) {
            console.log("\nPapelaria - Papel Maria");
            sobre(); console.log(colors.reset, "");
            process.exit(0);
        }
        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCadastrar produto\n\n", colors.reset);

                console.log("Digite o nome do produto: ");
                nome = readlinesync.question("");

                console.log("Digite a categoria do produto: ")
                categoria = readlinesync.keyInSelect(categorias, "", { cancel: false }) + 1;

                console.log("Digite o preço do produto: ")
                preco = readlinesync.questionFloat("");
                switch (categoria) {
                    case 1: // Materiais Escolares
                        console.log("Digite a quantidade: ");
                        quantidade = readlinesync.questionInt("");

                        produtos.cadastrar(
                            new MateriaisEscolares(produtos.gerarId(), nome, preco, categoria, quantidade)
                        );
                        break;

                    case 2: // Informática
                        console.log("Digite as especificações: ");
                        especificacoes = readlinesync.question("");

                        produtos.cadastrar(
                            new Informatica(produtos.gerarId(), nome, preco, categoria, especificacoes)
                        );
                        break;
                }

                console.log("\nProduto cadastrado com sucesso!\n");
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os produtos\n\n", colors.reset);

                produtos.listarTodos();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados do produto - por id\n\n", colors.reset);
                console.log("Digite o id do produto: ")
                id = readlinesync.questionInt("")
                produtos.procurarPorId(id)
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do produto\n\n", colors.reset);

                console.log("Digite o id do produto: ");
                id = readlinesync.questionInt("");

                let produto = produtos.buscarNoArray(id);

                if (produto != null) {
                    console.log(`\nProduto encontrado: ${produto.nome}`);

                    console.log("Digite o novo nome do produto: ");
                    nome = readlinesync.question("");

                    console.log("Digite o novo preço do produto: ");
                    preco = readlinesync.questionFloat("");

                    // Mantemos a categoria do produto
                    categoria = produto.categoria;

                    // Atualiza de acordo com a categoria
                    switch (categoria) {
                        case 1: // Materiais Escolares
                            console.log("Digite a nova quantidade: ");
                            quantidade = readlinesync.questionInt("");

                            produtos.atualizar(
                                new MateriaisEscolares(id, nome, preco, categoria, quantidade)
                            );
                            break;

                        case 2: // Informática
                            console.log("Digite as novas especificações: ");
                            especificacoes = readlinesync.question("");

                            produtos.atualizar(
                                new Informatica(id, nome, preco, categoria, especificacoes)
                            );
                            break;
                    }

                    console.log("\nProduto atualizado com sucesso!\n");
                } else {
                    console.log("\nProduto não encontrado!\n");
                }

                keyPress();
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar um produto\n\n", colors.reset);

                console.log("Digite o id do produto: ");
                id = readlinesync.questionInt("");
                produtos.deletar(id);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }
}


export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Inglyd Miranda - inglydm@genstudents.org");
    console.log("https://github.com/inglyd");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
