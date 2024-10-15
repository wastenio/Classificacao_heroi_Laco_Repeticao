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

function classificarXP(xp){
    const faixas = [
        {limite: 1000, classificacao: 'Ferro'},
        {limite: 2000, classificacao: 'Bronze'},
        {limite: 5000, classificacao: 'Prata'},
        {limite: 7000, classificacao: 'Ouro'},
        {limite: 8000, classificacao: 'Platina'},
        {limite: 9000, classificacao: 'Ascendente'},
        {limite: 10000, classificacao: 'Radiante'}
    ];

    for (let i = 0; i < faixas.length; i++){
        if(xp <= faixas[i].limite){
            return faixas[i].classificacao
        }
    }

    return 'Classificação invalida';
}

let xp = 2000
console.log("A classificação do seu heroi é " + classificarXP(xp))