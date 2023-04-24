/****************************************************************************** 
* Objetivo: Responsável pela manipulação de dados dos Alunos no Banco de Dados
* Data: 14/04/2023
* Autor: André
* Versão: 1.0
******************************************************************************/

//Import da biblioteca do prisma client
var { PrismaClient } = require('@prisma/client')

//Inserir dados do aluno no Banco de Dados
const insertAluno = function (dadosAluno) {

}

//Atualizar dados do aluno no Banco de Dados
const updateAluno = function (dadosAluno) {

}

//Deletar dados do aluno no Banco de Dados
const deleteAluno = function (id) {

}

//Inserir dados do aluno no Banco de Dados
const selectAllAlunos = async function () {
    //Instancia da classe PrismaClient
    let prisma = new PrismaClient()

    //Script SQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno'

    //$queryRawUnsafe() -> Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('select * from tbl_aluno') -> Para interpretar o script SQL direto no método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if (rsAluno.length > 0){
        return rsAluno
    } else {
        return false
    }
}

//Inserir dados do aluno no Banco de Dados
const selectByIdAluno = async function (id) {
    let prisma = new PrismaClient()

    //Script SQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno where id =' + id

    //$queryRawUnsafe() -> Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('select * from tbl_aluno') -> Para interpretar o script SQL direto no método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if (rsAluno.length > 0){
        return rsAluno
    } else {
        return false
    }
}

const selectByNameAluno = async function (name) {
    let prisma = new PrismaClient()

    let sql = `select * fro tbl_aluno like`
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno
}