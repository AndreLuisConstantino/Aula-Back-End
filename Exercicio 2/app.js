/*****************************************************************************
 * Objetivo: App Tabuada
 * Data: 13/02/2023
 * Autor: André
 * Versão: 1.0
 **************************************************************************************/

//Import da biblioteca da calculadora
var tabuada = require('./modulo/tabuada.js')

//import da biblioteca readline
var readline = require('readline')

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('***Olá, Seja bem vindo a better Tabs***')
entradaDados.question('Digite a primeira tabuada que deseja realizar as operações: \n', function(primeiraTabuadaInicio){
    let inicioDaTabuada = primeiraTabuadaInicio

    entradaDados.question('Digite a ultima tabuada: \n', function(segundaTabuadaFinal){
        let finalDaTabuada = segundaTabuadaFinal

        entradaDados.question('Digite o minimo multiplicador: \n', function(minMultiplicando){
            let minimoMultiplicando = minMultiplicando

            entradaDados.question('Digite o máximo multiplicando: \n', function(maxMultiplicado){
                let maximoMultiplicando = maxMultiplicado

                let resultado = tabuada.getTabuada(inicioDaTabuada, finalDaTabuada, minimoMultiplicando, maximoMultiplicando)
                
                if(resultado === false){
                    console.log('Algo deu errado na sua tabuada.')
                    entradaDados.close
                } else{
                    entradaDados.close()
                }
            })
        })
    })
})