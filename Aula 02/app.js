/******************************************************************************************* 
* Objetivo: Calcular a média de 4 notas escolares
* Autor: André
* Data: 27/01/23
* Versão 1.0
*********************************************************************************************/

//import da biblioteca readline
var readline = require('readline');

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

/* 
* Criação de variáveis
    * var - Cria um espaço em memória de  escopo global para o projeto, ou seja,
        * essa variável poderá ser utilizada em qualquer parte do arquivo(varias funções)
    * let - Cria um espaço em memória de  escopo local para o projeto, ou seja,
        * essa variável somente poderá ser utilizada dentro da função que foi criada.
    * const - Cria um espaço em memória de escopo local ou global para o projeto, ou seja,
        * essa constante poderá ser utilizada em qualquer parte do projeto e nunca sofrerá alteração
*/

//Função e CallBack para entrar o nome do aluno
entradaDados.question('Digite seu nome: \n', function(nome){
    //recebe o valor digitado pelo teclado
    let nomeAluno = nome;

    //Função e CallBack para entrar a nota1
    entradaDados.question('Digite a nota 1: \n', function(nota1){
        let valor1 = nota1;

        //Função e CallBack para entrar a nota2
        entradaDados.question('Digite a nota 2: \n', function(nota2){
            let valor2 = nota2;

            //Função e CallBack para entrar a nota3
            entradaDados.question('Digite a nota 3: \n', function(nota3){
                let valor3 = nota3;

                //Função e CallBack para entrar a nota4
                entradaDados.question('Digite a nota 4: \n', function(nota4){
                    let valor4 = nota4;
                    let media;

                    /* 
                        Conversão de tipos de dados

                        parseInt() - Converte a string em inteiro
                        parseFloat() - Converte uma string em real

                        Number() - converte uma string para número, conforme a entrada do valor o JS define se será inteiro ou real

                        Operadores de comparação
                        == (verifica a igualdade entre conteeúdos) 
                        != (verifica a diferença entre conteúdos)
                        === (verifica a diferença entre conteúdos e tipos de dados)
                        Ex: 0 === 0   V
                                0 === '0' F
                                '0' === 0 F
                                0 == 0    V
                                0 == '0'  V
                                '0' == 0  V
                        !== (verifica a igualdade entre conteúdos e igualdade de tipo de dados)
                        ==! (verifica a igualdade entre conteúdos e diferença de tipos de dados)
                        < (menor)
                        > (maior)
                        <= (menor ou igual)
                        >= (maior ou igual)

                        Operadores lógicos

                        E       &&      AND
                        OU      ||      OR
                        NEGAÇÃO !       NOT 

                    */
                   //Validação para entrada vazia
                    if(valor1 == '' || valor2 == '' || valor3 == '' || valor4 == ''){

                        console.log('ERROR: Você deixou de entrar com algum valor.')

                    }else if(isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)){

                        console.log('ERROR: Você não digitou um número válido.')

                    } else{

                        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4)) / 4;

                        console.log(media);

                    }
                });
            });
        });
    });
});

