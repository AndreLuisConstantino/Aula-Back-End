/*********************************************************** 
* Objetivo: Responsavel pela regra de negócio referente ao CRUD de alunos
* Data: 14/04/2023
* Autor: André
* Versão: 1.0
**********************************************************/

//Import do arquivo DAO para acessar dados do aluno no BD
var alunoDAO = require('../model/dao/alunoDAO.js')

//Função que insere um novo aluno
const inserirAluno = function (dadosAluno) {

}

//Atualizar um aluno existente
const atualizarAluno = function (dadosAluno) {

}

//Função que deleta um aluno
const deletarAluno = function (id) {

}

//Retorna a lista de todos os alunos
const getAlunos = async function () {
    let dadosAlunosJson = {}

    //Chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunoDAO.selectAllAlunos()

    if (dadosAluno) {
        //Criando um JSON com o atributo alunos, para encaminhar o array de alunos
        dadosAlunosJson.quantidade = dadosAluno.length
        dadosAlunosJson.alunos = dadosAluno
        return dadosAlunosJson
    } else {
        return false
    }
}

//Retorna a lista de todos os alunos pelo id
const getBuscarAlunoID = async function (id) {

    let dadosAlunoJson = {}

    let dadosAluno = await alunoDAO.selectByIdAluno(id)

    dadosAlunoJson.aluno = dadosAluno

    if (dadosAluno) {
        return dadosAlunoJson
    } else {
        return false
    }
}

module.exports = {
    getAlunos,
    getBuscarAlunoID
}