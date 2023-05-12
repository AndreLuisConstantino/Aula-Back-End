/*********************************************************** 
* Objetivo: Responsavel pela regra de negócio referente ao CRUD de alunos
* Data: 12/05/2023
* Autor: André
* Versão: 1.2
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

            //Chama a função que vai encontrar o ID gerado após o inser
            let novoAluno = await alunoDAO.selectLastID()

            let dadosAlunoJson = {}
            dadosAlunoJson.message = message.SUCCESS_CREATED_ITEM.message
            dadosAlunoJson.status = message.SUCCESS_CREATED_ITEM.status
            dadosAlunoJson.aluno = novoAluno

            return dadosAlunoJson //StatusCode 201
        } else {
            return message.ERROR_INTERNAL_SERVER //StatusCode 500
        }
    }
}

//Atualizar um aluno existente
const atualizarAluno = async function (dadosAluno, idAluno) {

    //Validação para tratar campos obrigatórios e quantidade de caracteres
    if (dadosAluno.nome == '' || dadosAluno.nome == undefined || dadosAluno.nome.length > 100 ||
        dadosAluno.rg == '' || dadosAluno.rg == undefined || dadosAluno.rg.length > 15 ||
        dadosAluno.cpf == '' || dadosAluno.cpf == undefined || dadosAluno.cpf.length > 18 ||
        dadosAluno.data_nascimento == '' || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento.length > 10 ||
        dadosAluno.email == '' || dadosAluno.email == undefined || dadosAluno.email.length > 200
    ) {
        return message.ERROR_REQUIRED_FIELDS //StatusCode 400
        //Validação de ID incorreto ou não informado
    } else if (idAluno == '' || idAluno == undefined || isNaN(idAluno)) {
        return message.ERROR_INVALID_ID
    } else {
        //Adiciona o ID do aluno no JSON dos dados.
        dadosAluno.id = idAluno

        let statusId = await alunoDAO.selectByIdAluno(idAluno)

        if (statusId) {
            //Encaminha os dados para a model do aluno
            let resultDadosAluno = await alunoDAO.updateAluno(dadosAluno)

            if (resultDadosAluno) {
                let novoAluno = await alunoDAO.selectByIdAluno(idAluno)

                let dadosAlunoJson = {}
                dadosAlunoJson.message = message.SUCCESS_UPDATED_ITEM.message
                dadosAlunoJson.status = message.SUCCESS_UPDATED_ITEM.status
                dadosAlunoJson.aluno = novoAluno
                return dadosAlunoJson //Status Code 200
            } else {
                return message.ERROR_INTERNAL_SERVER //Status Code 500
            }
        } else {
            return message.ERROR_ITEM_NOT_FOUND //Status Code 500
        }

    }
}

//Função que deleta um aluno
const deletarAluno = async function (id) {

    if (id == null || id == undefined || id == '' || isNaN(id)) {
        return message.ERROR_REQUIRED_FIELDS
    } else {
        let idAluno = alunoDAO.selectByIdAluno(id)

        if (idAluno) {
            let result = await alunoDAO.deleteAluno(id)

            if (result) {
                return message.SUCCESS_DELETED_ITEM
            } else {
                return message.ERROR_DELETED_ITEM
            }
        } else {
            return message.ERROR_ITEM_NOT_FOUND
        }
    } 
}

//Retorna a lista de todos os alunos
const getAlunos = async function () {
    let dadosAlunosJson = {}

    //Chama a função do arquivo DAO que irá retornar todos os registros do BD
    let dadosAluno = await alunoDAO.selectAllAlunos()

    if (dadosAluno) {
        //Criando um JSON com o atributo alunos, para encaminhar o array de alunos
        dadosAlunosJson.status = message.SUCCES_REQUEST.status
        // dadosAlunosJson.message = message.SUCCES_REQUEST.message
        dadosAlunosJson.quantidade = dadosAluno.length
        dadosAlunosJson.alunos = dadosAluno
        return dadosAlunosJson
    } else {
        return message.ERROR_ITEM_NOT_FOUND
    }
}

//Retorna a lista de todos os alunos pelo id
const getBuscarAlunoID = async function (id) {

    if (id == undefined || id == '' || isNaN(id)) {
        return message.ERROR_INVALID_ID
    } else {
        let dadosAlunoJson = {}

        let dadosAluno = await alunoDAO.selectByIdAluno(id)

        if (dadosAluno) {
            dadosAlunoJson.status = message.SUCCES_REQUEST.status
            dadosAlunoJson.aluno = dadosAluno
            return dadosAlunoJson
        } else {
            return message.ERROR_ITEM_NOT_FOUND
        }
    }
}

//Retorna a lista dos alunos que possuem o nome solicitado
const getAlunoByName = async function (name) {
    let dadosAlunoJson = {}

    if (name == '' || name == undefined || name == null) {
        return message.ERROR_MISTAKE_IN_THE_FILDS
    } else {

        let aluno = await alunoDAO.selectByNameAluno(name)

        if (aluno) {
            dadosAlunoJson.alunos = aluno
            dadosAlunoJson.status = message.SUCCES_REQUEST.status
            return dadosAlunoJson
        } else {
            return message.ERROR_ITEM_NOT_FOUND
        }
    }
}

module.exports = {
    getAlunos,
    getBuscarAlunoID,
    inserirAluno,
    getAlunoByName,
    atualizarAluno,
    deletarAluno
}