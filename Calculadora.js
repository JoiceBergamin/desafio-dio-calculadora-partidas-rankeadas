/*COMENTANDO O CÓDIGO*/

//definição de variáveis globais
let nivelSelecionavel = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"]

let nivelAtual = 0 //definição de variável global para conseguir usar ela dentro e fora das funções
//essas linhas 3 e 4 vão possibilitar a definição dos níveis que o jogador pode ficar no ranking

saldoDeVitorias = calcularRanking(150, 25) //Variável que recebe o return da função calcularRanking()
//chama-se a função passando os parâmetros necessários para a operação


//inicio da função calcularRanking
function calcularRanking(vitoriasDoJogador, derrotasDoJogador) {

    saldoDoRankingFinal = vitoriasDoJogador - derrotasDoJogador //calculo do saldo do ranking

    //inicio dos if/else
    if (saldoDoRankingFinal < 10) { //condicões para definição do ranking
        nivelAtual = 0 //Ferro
        //ajustando valor de nivelAtual para que consiga imprimir a posição correta no final

    } else if (saldoDoRankingFinal >= 11 && saldoDoRankingFinal <= 20) {
        nivelAtual = 1 //Bronze

    } else if (saldoDoRankingFinal >= 21 && saldoDoRankingFinal <= 50) {
        nivelAtual = 2 //Prata

    } else if (saldoDoRankingFinal >= 51 && saldoDoRankingFinal <= 80) {
        nivelAtual = 3 //Ouro

    } else if (saldoDoRankingFinal >= 81 && saldoDoRankingFinal <= 90) {
        nivelAtual = 4 //Diamante

    } else if (saldoDoRankingFinal >= 91 && saldoDoRankingFinal <= 100) {
        nivelAtual = 5 //Lendário

    } else if (saldoDoRankingFinal >= 101) {
        nivelAtual = 6 //Imortal
    }
    //fim dos if/else
    console.log("Ranking Final: " + nivelSelecionavel[nivelAtual]);
    return saldoDoRankingFinal;
}     //fim da função calcularRanking()

console.log("O Herói tem de saldo de " + saldoDeVitorias + " vitórias e está no nível: " + nivelSelecionavel[nivelAtual])
//Mensagem final que, de acordo com os valores passados anteriormente, deve dar 125 vitórias e nível Imortal
//imprimo o nivelAtual ajustado pelo bloco if/else que pega a posição correta do vetor nivelSelecionavel