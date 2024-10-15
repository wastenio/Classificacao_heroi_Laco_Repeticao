//Classificar de nivel de heroi

//*O que deve ser utilizado */

/*
-Variaveis
-Operadores
-Laços de repetições
-Estrutura de decisoes
*/

//Objetivo

//Crie uma variavel para armazenar o nome e a quantidade de experiencias (XP) de um heroi, depois utilize
// uma estrutura de decisao para apresentar alguma das mensagens abaixo:

/*
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/

//Saída

/*
Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"
*/

function classificarXP(xp) {
    let faixa;

    // Definindo a faixa com base no valor de XP
    if (xp < 1000) {
        faixa = 0; // Ferro
    } else if (xp <= 2000) {
        faixa = 1; // Bronze
    } else if (xp <= 5000) {
        faixa = 2; // Prata
    } else if (xp <= 7000) {
        faixa = 3; // Ouro
    } else if (xp <= 8000) {
        faixa = 4; // Platina
    } else if (xp <= 9000) {
        faixa = 5; // Ascendente
    } else if (xp <= 10000) {
        faixa = 6; // Imortal
    } else {
        faixa = 7; // Radiante
    }

    // Usando switch/case para retornar a classificação
    switch (faixa) {
        case 0:
            return 'Ferro';
        case 1:
            return 'Bronze';
        case 2:
            return 'Prata';
        case 3:
            return 'Ouro';
        case 4:
            return 'Platina';
        case 5:
            return 'Ascendente';
        case 6:
            return 'Imortal';
        case 7:
            return 'Radiante';
        default:
            return 'Classificação inválida';
    }
}

// Exemplo de uso
let xp = 100;
console.log(classificarXP(xp)); // Saída: Ouro
