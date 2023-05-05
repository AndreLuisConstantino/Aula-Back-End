/****************************************************************************** 
* Objetivo: Responsável pela manipulação de dados dos Alunos no Banco de Dados
* Data: 28/04/2023
* Autor: André
* Versão: 1.1
******************************************************************************/

//Import da biblioteca do prisma client
var { PrismaClient } = require('@prisma/client')

var prisma = new PrismaClient()

//Inserir dados do aluno no Banco de Dados
const insertAluno = async function (dadosAluno) {
    
    //ScriptSQL para inserir dados
    let sql = `insert into tbl_aluno (
                    nome,
                    rg,
                    cpf,
                    data_nascimento,
                    email
                    ) values (
                        '${dadosAluno.nome}',
                        '${dadosAluno.rg}',
                        '${dadosAluno.cpf}',
                        '${dadosAluno.data_nascimento}',
                        '${dadosAluno.email}'
                    )`
    
    //Executa o script sql no banco de dados
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if(resultStatus) {
        return true
    } else {
        return false
    }
}

//Atualizar dados do aluno no Banco de Dados
const updateAluno = async function (dadosAluno) {
    //Script sql para atualizar os dados no BD
    let sql = `
        update tbl_aluno set
                    nome = '${dadosAluno.nome}',
                    rg = '${dadosAluno.rg}',
                    cpf = '${dadosAluno.cpf}',
                    data_nascimento = '${dadosAluno.data_nascimento}',
                    email = '${dadosAluno.email}'
        where id = ${dadosAluno.id}
        `
        
    //Executa o script no BD
    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false
    }
}

//Deletar dados do aluno no Banco de Dados
const deleteAluno = async function (id) {
    let sql = `
        delete from tbl_aluno where id = ${id}
    `

    let resultStatus = await prisma.$executeRawUnsafe(sql)

    if (resultStatus) {
        return true
    } else {
        return false

    }
}

//Inserir dados do aluno no Banco de Dados
const selectAllAlunos = async function () {

    //Script SQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno'

    //$queryRawUnsafe() -> Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('select * from tbl_aluno') -> Para interpretar o script SQL direto no método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

//Inserir dados do aluno no Banco de Dados
const selectByIdAluno = async function (id) {

    //Script SQL para buscar todos os itens no BD
    let sql = 'select * from tbl_aluno where id =' + id

    //$queryRawUnsafe() -> Permite interpretar uma variável como sendo um scriptSQL
    //$queryRaw('select * from tbl_aluno') -> Para interpretar o script SQL direto no método
    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

const selectByNameAluno = async function (name) {

    let sql = `select * from tbl_aluno where nome like '%${name}%'`

    let rsAluno = await prisma.$queryRawUnsafe(sql)

    //Valida se o BD retornou algum registro
    if (rsAluno.length > 0) {
        return rsAluno
    } else {
        return false
    }
}

module.exports = {
    selectAllAlunos,
    selectByIdAluno,
    insertAluno, 
    selectByNameAluno,
    updateAluno,
    deleteAluno
}