/***************************************************************************************
* Objetivo: API para integração entre Back e Banco e Dados (GET, POST, PUT, DELETE)
* Data: 14/04/2023
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

//Define que os dados que iram chegar na requisição será no padrão JSON
const bodyParserJSON = bodyParser.json()

//Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

    let dadosAluno = {}

    let nomeAluno = request.query.nome


    if (nomeAluno != undefined) {

        let resultAluno = await controllerAluno.getBuscarAlunoName(nomeAluno)

        dadosAluno.aluno = resultAluno

        if (resultAluno == false || resultAluno == undefined || resultAluno == null) {
            response.status(400)
            response.json('O nome enviado está incorreto')
        } else {
            if (resultAluno) {
                response.status(200)
                response.json(dadosAluno)
            } else {
                response.status(404)
                response.json('Nenhum aluno encontrado no sistema')
            }
        }
    } else {

        //Recebe os dados da controllerAluno 
        let aluno = await controllerAluno.getAlunos()
        dadosAluno = aluno

        if (aluno) {
            response.status(200)
            response.json(dadosAluno)
        } else {
            response.status(404)
            response.json('Aluno não encontrado no sistema')
        }
    }
})

//Retorna todos o aluno filtrando pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
    let dadosAluno = {}
    let id = request.params.id
    let aluno = await controllerAluno.getBuscarAlunoID(id)

    dadosAluno.aluno = aluno

    if (id == '' || id == undefined || isNaN(id)) {
        response.status(400)
        response.json({ message: 'O ID passado está vazio ou não é um número' })
    } else {
        if (aluno) {
            response.status(200)
            response.json(dadosAluno)
        } else {
            response.status(404)
            response.json({ message: 'Não foi encontrado nenhum aluno' })
        }
    }
})


//Insere um aluno novo 
app.post('/v1/lion-school/aluno', cors(), bodyParserJSON, async function (request, response) {

    //Recebe os dados encaminhados na requisição
    let dadosBody = request.body

    let resultDadosAluno = await controllerAluno.inserirAluno(dadosBody)

    response.status(resultDadosAluno.status)
    response.json(resultDadosAluno)
})

//Atualiza um aluno existente filtrando pelo ID
app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

})

//Exclui um aluno filtrando pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

})

app.listen(8080, () => console.log('Servidor aguardando na porta 8080'))