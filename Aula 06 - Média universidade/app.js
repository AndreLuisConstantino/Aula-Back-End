/*****************************************************************************
 * Objetivo: Fazer uma média de universidade
 * Data: 06/02/2023
 * Autor: André
 * Versão: 1.0
 **************************************************************************************/

//Import da biblioteca da calculadora
var matematica = require('./modulo/media.js')

//import da biblioteca readline
var readline = require('readline')

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('*****Olá, Bem vindo a sua Calculadora de Média Univer!!!*****')
entradaDados.question('Digite o seu nome: \n', function(nomeDigitado){
    let nome = nomeDigitado

    entradaDados.question('Digite a sua disciplina: \n', function(disciplinaDigitada){
        let disciplina = disciplinaDigitada

        entradaDados.question('Digite o seu curso: \n', function(cursoDigitado){
            let curso = cursoDigitado

            entradaDados.question('Digite o nome do seu professor: \n', function(nomeProfessorDigitado){
                let nomeProfessor = nomeProfessorDigitado

                entradaDados.question('Digite o sexo do professor: \n 1- M (Masculino) \n 2- F (Feminino) \n', function(generoProfessor){
                    let sexoProfessor = generoProfessor

                    entradaDados.question('Digite o seu sexo:  \n 1- M (Masculino) \n 2- F (Feminino) \n', function(generoAluno){
                        let sexoAluno = generoAluno

                    
                    })
                })
            })
        })
    })
})