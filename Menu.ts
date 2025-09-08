import * as readlinesync from "readline-sync";
import { colors } from "./src/util/Colors";

export function main() {

    let opcao, preco, categoria, id: number;
    let nome: string;

    const categorias = ['Materiais escolares', 'Materiais de escritório', 'Embalagens e utilidades', 'Informática'];

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
        console.log("            3 - Buscar produto por id            ");
        console.log("            4 - Atualizar Dados do produto           ");
        console.log("            5 - Apagar produto                       ");
        console.log("            6 - Sair                                 ");


        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt();

        if (opcao == 6) {
            console.log("\nPapelaria - Papel Maria");
            sobre();
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

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todos os produtos\n\n", colors.reset);


                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados do produto - por número\n\n", colors.reset);
                console.log("Digite o número do produto: ")
                id = readlinesync.questionInt("")

                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados do produto\n\n", colors.reset);
                console.log("Digite o número do produto: ");
                id = readlinesync.questionInt("");
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar um produto\n\n", colors.reset);

                console.log("Digite o número da produto: ");
                id = readlinesync.questionInt("");
                //produtos.deletar(id);

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
