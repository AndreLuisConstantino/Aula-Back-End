/***************************************************************************************
* Objetivo: API para integração entre Back e Banco e Dados (GET, POST, PUT, DELETE)
* Data: 05/05/2023
* Autor: André Luiz
* Versão: 1.0
***************************************************************************************/
/* 
    INSTALAÇÃO DO PRISMA NO PROJETO (Biblioteca para conexão com o banco de dados)

    npm install prisma --save //Para instalar
    npx prisma //Para ver se ele foi instalado
    npx prisma init //Para inicia-lo        
    npm install @prisma/client --save

    npx prisma migrate dev //Serve para realizar o sincronismo entre o prisma e o BD
*/

//Import do arquivo da controller que irá solicitar a model os dados do banco
var controllerAluno = require('./controller/controller_aluno')

//Import do arquivo de configuração das variáveis, constantes e funções globais
var message = require('./controller/modulo/config.js')

//Import das bibliotecas para API
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria o objeto app conforme a classe do express
const app = express()

//Permissões do cors
app.use((request, response, next) => {
    //Define quem poderá acessar a API (* = Todos)
    response.header('Acess-Control-Allow-Origin', '*')
    //Define quais métodos serão utilizados na API
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao Cors
    app.use(cors())

    next()
})

//CRUD (Create, Read, Update e Delete)

/*********************************************************** 
* Objetivo: API de controle de alunos
* Data: 28/04/2023
* Autor: André
* Versão: 1.1
***********************************************************/

//ENDPOINT: ALUNO

//Define que os dados que iram chegar na requisição será no padrão JSON
const bodyParserJSON = bodyParser.json()

//Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

    let nomeAluno = request.query.nome

    if (nomeAluno != undefined) {

        let resultAluno = await controllerAluno.getAlunoByName(nomeAluno)

        response.status(resultAluno.status)
        response.json(resultAluno)
    } else {
        //Recebe os dados da controllerAluno 
        let aluno = await controllerAluno.getAlunos()

        // if (aluno) {
        //     response.status(200)
        //     response.json(dadosAluno)
        // } else {
        //     response.status(404)
        //     response.json('Aluno não encontrado no sistema')
        // }

        response.status(aluno.status)
        response.json(aluno)
    }
})

//Retorna todos o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
    let dadosAluno = {}

    let id = request.params.id

    let aluno = await controllerAluno.getBuscarAlunoID(id)

    response.status(aluno.status)
    response.json(aluno)
})

//Insere um aluno novo 
app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function (request, response) {

    let contentType = request.headers['content-type']

    if (String(contentType).toLowerCase() == 'application/json') {
        //Recebe os dados encaminhados na requisição
        let dadosBody = request.body

        let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }


})

//Atualiza um aluno existente filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), bodyParserJSON, async function (request, response) {

    //Recebe o content-type da requisição
    let contentType = request.headers['content-type']

    //Validação para receber dados apenas no formato json
    if (String(contentType).toLowerCase() == 'application/json') {
        //Recebe o id do aluno pelo parametro
        let idAluno = request.params.id
        //Recebe os dados do aluno encaminhado no corpo da requisição
        let dadosBody = request.body

        let resultDadosAluno = await controllerAluno.atualizarAluno(dadosBody, idAluno)

        response.status(resultDadosAluno.status)
        response.json(resultDadosAluno)
    } else {
        response.status(message.ERROR_INVALID_CONTENT_TYPE.status)
        response.json(message.ERROR_INVALID_CONTENT_TYPE)
    }


})

//Exclui um aluno filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
    let idAluno = request.params.id

    let result = await controllerAluno.deletarAluno(idAluno)

    response.status(result.status)
    response.json(result)
})

app.listen(8080, () => console.log('Servidor aguardando na porta 8080'))