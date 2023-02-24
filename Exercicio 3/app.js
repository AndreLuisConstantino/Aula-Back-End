/*****************************************************************************
 * Objetivo: App para a separação de numeros pares e impares
 * Data: 06/02/2023
 * Autor: André
 * Versão: 1.1
 **************************************************************************************/


//Import da biblioteca da calculadora
var matematica = require('./modulo/matematica.js')

//import da biblioteca readline
var readline = require('readline')
const { close } = require('fs')

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('***Olá, bem vindo a Calculadora de números pares e impares!***')
entradaDados.question('Digite o número inicial: ', function(numero1){
    let numeroInicial = numero1

    entradaDados.question('Digite o número final: ', function(numero2){
        let numeroFinal = numero2

        entradaDados.question('Você quer ver apenas pares ou impares? \n Digite 1- Pares \n Digite 2- Impares \n Digite 3- Para as duas \n', function(escolhaDigitada){
            let escolha = escolhaDigitada

            if (escolha == ''){
                console.log('Você deixou a escolha vazia.')
                entradaDados.close()
            } else if (isNaN(escolha)){
                console.log('O valor digitado na escolha não é um número.')
                entradaDados.close()
            } else if(escolha != '1' && escolha != '2' && escolha != '3'){
                console.log('Digite uma opção válida.')
                entradaDados.close()
            } else if(escolha == '1'){
                let resultadoPares = matematica.separarParesDosImpares(numeroInicial, numeroFinal)

                if(resultadoPares === false){
                    entradaDados.close()
                    console.log('Não foi possivel executar o seu programa.')
                } else {
                    entradaDados.close()
                }
                
            } else if(escolha == '2'){
                let resultadoImpares = matematica.separarImparesDosPares(numeroInicial, numeroFinal)

                if(resultadoImpares === false){
                    entradaDados.close()
                    console.log('Não foi possivel executar o seu programa.')
                } else {
                    entradaDados.close()
                }

            } else {
                let resultadoParesImpares = matematica.separar(numeroInicial, numeroFinal)
         
                if(resultadoParesImpares === false){
                    entradaDados.close()
                    console.log('Não foi possivel executar o seu programa.')
                } else {
                    entradaDados.close()
                }
            }
            
        })
    })
})