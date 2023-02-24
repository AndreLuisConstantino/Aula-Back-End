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
entradaDados.question('Digite o seu nome: \n', function (nomeDigitado) {
    let nome = nomeDigitado

    entradaDados.question('Digite a sua disciplina: \n', function (disciplinaDigitada) {
        let disciplina = disciplinaDigitada

        entradaDados.question('Digite o seu curso: \n', function (cursoDigitado) {
            let curso = cursoDigitado

            entradaDados.question('Digite o nome do seu professor: \n', function (nomeProfessorDigitado) {
                let nomeProfessor = nomeProfessorDigitado

                entradaDados.question('Digite o sexo do professor: \n 1- M (Masculino) \n 2- F (Feminino) \n', function (generoProfessor) {
                    let sexoProfessor = generoProfessor

                    entradaDados.question('Digite o seu sexo:  \n 1- M (Masculino) \n 2- F (Feminino) \n', function (generoAluno) {
                        let sexoAluno = generoAluno

                        entradaDados.question('Digite a primeita nota: ', function (numero1) {
                            let nota1 = numero1

                            entradaDados.question('Digite a segunda nota: ', function (numero2) {
                                let nota2 = numero2

                                entradaDados.question('Digite a terceita nota: ', function (numero3) {
                                    let nota3 = numero3

                                    entradaDados.question('Digite a quarta nota: ', function (numero4) {
                                        let nota4 = numero4

                                        if (nome == '' || disciplina == '' || curso == '' || nomeProfessor == '' ||
                                            sexoProfessor == '' || sexoProfessor == '' || sexoAluno == '' ||
                                            nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                                            console.log('Algum dos valores ou informações deixoi de ser digitado. ')
                                            entradaDados.close()
                                        } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
                                            console.log('Alguma das notas digitadas não são um número. ')
                                            entradaDados.close()
                                        } else if (!isNaN(nome) || !isNaN(nomeProfessor) || !isNaN(sexoProfessor) || !isNaN(sexoProfessor)) {
                                            console.log('Alguma dos nomes os genêros são números. ')
                                            entradaDados.close()
                                        } else {
                                            let resultadoAluno
                                            resultadoAluno = matematica.calculoMedia(nota1, nota2, nota3, nota4)
                                            let statusDoAluno

                                            if (resultadoAluno >= 70) {
                                                statusDoAluno = ' APROVADO '
                                            }
                                            else if (resultadoAluno < 70 && resultadoAluno >= 50) {
                                                statusDoAluno = ' EXAME '
                                            } else if (resultadoAluno < 50) {
                                                statusDoAluno = ' REPROVADO '
                                            }

                                            let notaDoExame = 0
                                            let resultadoAlunoExame = 0
                                            if (statusDoAluno == ' EXAME ') {
                                                console.log('O seu status nos mostra que você está de exame.')
                                                entradaDados.question('Digite a nota do seu exame: ', function (notaDoExameParaSerDigitada) {
                                                    notaDoExame = notaDoExameParaSerDigitada
                                                    resultadoAlunoExame = matematica.calculoMediaExame(resultadoAluno, notaDoExame)
                                                    console.log('***Resultado***')
                                                    console.log(`O ${matematica.sexoDoAluno(sexoAluno)} ${nome} foi ${statusDoAluno} na disciplina ${disciplina}.\n` +
                                                        `Curso: ${curso}.\n` +
                                                        `${matematica.sexoDoProfessor(sexoProfessor)} : ${nomeProfessor}.\n` +
                                                        `Notas do Aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}, Nota do Exame: ${notaDoExame}.\n` +
                                                        `Média Final: ${resultadoAluno}.\n` +
                                                        `Média Final do Exame: ${resultadoAlunoExame}.`
                                                    )
                                                })
                                            } else if (statusDoAluno == ' APROVADO ' || statusDoAluno == ' REPROVADO ') {
                                                console.log('***Resultado***')
                                                console.log(`O ${matematica.sexoDoAluno(sexoAluno)} ${nome} foi ${statusDoAluno} na disciplina ${disciplina}. \n` +
                                                    `Curso: ${curso} \n` +
                                                    `${matematica.sexoDoProfessor(sexoProfessor)} : ${nomeProfessor} \n` +
                                                    `Notas do Aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}. \n` +
                                                    `Média Final: ${resultadoAluno} \n`
                                                )
                                            }
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})