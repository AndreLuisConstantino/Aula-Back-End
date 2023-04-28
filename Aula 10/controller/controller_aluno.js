/*********************************************************** 
* Objetivo: Responsavel pela regra de negócio referente ao CRUD de alunos
* Data: 28/04/2023
* Autor: André
* Versão: 1.1
**********************************************************/

//Import do arquivo de configuração das variáveis, constantes e funções globais
var message = require('./modulo/config.js')

//Import do arquivo DAO para acessar dados do aluno no BD
var alunoDAO = require('../model/dao/alunoDAO.js')

//Função que insere um novo aluno
const inserirAluno = async function (dadosAluno) {

    //Validação para tratar campos obrigatórios e quantidade de caracteres
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200
    ) {
        return message.ERROR_REQUIRED_FIELDS //StatusCode 400
    } else {
        //Envia os dados para a model inserir no banco de dados
        let resultDadosAluno = await alunoDAO.insertAluno(dadosAluno)

        //Valida se o BD inseriu corretamente os dados
        if (resultDadosAluno) {
            return message.SUCCESS_CREATED_ITEM //StatusCode 201
        } else {
            return message.ERROR_INTERNAL_SERVER //StatusCode 500
        }
    }
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

    if (dadosAluno == false || dadosAluno == undefined || dadosAluno == null) {
        return false
    } else {
        dadosAlunoJson = dadosAluno
        if (dadosAluno) {
            return dadosAlunoJson
        } else {
            return false
        }
    }


}

//Retorna a lista dos alunos que possuem o nome solicitado
const getBuscarAlunoName =  async function (name) {


    if(name == '' || name == undefined || name == null){
        return message.ERROR_MISTAKE_IN_THE_FILDS
    } else {
        let dadosAluno = await alunoDAO.selectByNameAluno(name)

        if(dadosAluno){
            return dadosAluno
        } else {
            return false
        }
    }
}

module.exports = {
    getAlunos,
    getBuscarAlunoID,
    inserirAluno,
    getBuscarAlunoName
}