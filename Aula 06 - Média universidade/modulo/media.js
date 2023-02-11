/*****************************************************************************
 * Objetivo: Arquivo de funções para calcular uma média de universidade
 * Data: 06/02/2023
 * Autor: André
 * Versão: 1.0
 **************************************************************************************/

const calculoMedia = function (notaUm, notaDois, notaTres, notaQuatro) {
    let nota1 = String(notaUm).replace(',', '.')
    let nota2 = String(notaDois).replace(',', '.')
    let nota3 = String(notaTres).replace(',', '.')
    let nota4 = String(notaQuatro).replace(',', '.')
    let status = true
    let media
    


    if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
        status = false
    }else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)){
        status = false
    } 
    else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100 || nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
        status = false
    } else {
        media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
        return media
    }
}

const calculoMediaExame = function calculoExame(mediaParaSerCalculada, notaDoExameParaSerPassada) {
    let media = String(mediaParaSerCalculada).replace(',', '.')
    let notaDoExame = String(notaDoExameParaSerPassada).replace(',', '.')
    let mediaDoExame
    let statusDaMedia
    let status = true


        if (notaDoExame == '') {
            status = false
        } else if (notaDoExame < 0 || notaDoExame > 100) {
            status = false
        } else {
            mediaDoExame = Number(media) + Number(notaDoExame) / 2
            if(mediaDoExame > 100){
                mediaDoExame = 100
                statusDaMedia = ' APROVADO '
            }
            else if (mediaDoExame >= 60) {
                statusDaMedia = ' APROVADO '
            } else if (mediaDoExame < 60) {
                statusDaMedia = ' REPROVADO '
            }
        }
        return mediaDoExame + statusDaMedia
    
}

const sexoDoProfessor = function definicaoDoProfessor(sexoDoProfessorParaSerPassado){
    let generoDoProfessor = String(sexoDoProfessorParaSerPassado).toUpperCase()
    let statusProf
    let status = true

    if(generoDoProfessor == ''){
        status = false
    } else if(!isNaN(generoDoProfessor)){
        status = false
    } else if(generoDoProfessor != 'M' && generoDoProfessor != 'F'){
        status = false
    } else if(generoDoProfessor == 'M'){
            statusProf = 'Professor'
            return statusProf
        } else {
            statusProf = 'Professora'
            return statusProf
        }    
}   

const sexoDoAluno = function definicaoDoAluno(sexoDoAlunoParaSerPassado){
    let generoDoAluno = String(sexoDoAlunoParaSerPassado).toUpperCase()
    let statusDoAluno
    let status = true


    if(generoDoAluno == ''){
        status = false
    } else if(!isNaN(generoDoAluno)){
        status = false
    } else if (generoDoAluno != 'M' && generoDoAluno != 'F'){
        status = false
    } else if (generoDoAluno == 'M'){
        statusDoAluno = 'Aluno'
        return statusDoAluno
    } else {
        statusDoAluno = 'Aluna'
        return statusDoAluno
    }
}

module.exports = {
    calculoMedia,
    calculoMediaExame,
    sexoDoProfessor,
    sexoDoAluno
}

