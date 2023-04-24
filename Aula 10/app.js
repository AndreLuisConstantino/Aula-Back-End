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
    response.header('Acess-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')

    //Atribui as permissões ao Cors
    app.use(cors())

    next()
})

//CRUD (Create, Read, Update e Delete)

/*********************************************************** 
* Objetivo: API de controle de alunos
* Data: 14/04/2023
* Autor: André
* Versão: 1.0
***********************************************************/

    //Retorna todos os dados de alunos
    app.get('/v1/lion-school/aluno', cors(), async function (request, response) {

        //Recebe os dados da controllerAluno 
        let dadosAluno = await controllerAluno.getAlunos()

        //Valida se exite registros de aluno
        if(dadosAluno){
            response.json(dadosAluno)
            response.status(200)
        } else {
            response.json()
            response.status(404)
        }
    })

    //Retorna todos o aluno filtrando pelo ID
    app.get('/v1/lion-school/aluno/:id', cors(), async function (request, response) {
        let dadosAluno = {}
        let statusCode
        let id = request.params.id

        if(id == '' || id == undefined  || isNaN(id)){
            statusCode = 400
            dadosAluno.message = "Por favor verifique se o id está preenchido corretamente"
        } else {
            let aluno = await controllerAluno.getBuscarAlunoID(id)

            if(aluno){
                statusCode = 200
                dadosAluno.aluno = aluno
            } else {
                statusCode = 404
            }
        }
        response.json(dadosAluno)
        response.status(statusCode)

    })

    //Retorna todos o aluno filtrando pelo nome
    app.get('/v1/lion-school/aluno/:nome', cors(), async function (request, response) {

    })

    //Insere um aluno novo 
    app.post('/v1/lion-school/aluno', cors(), async function (request, response) {

    })

    //Atualiza um aluno existenten filtrando pelo ID
    app.put('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    })

    //Exclui um aluno filtrando pelo ID
    app.delete('/v1/lion-school/aluno/:id', cors(), async function (request, response) {

    })

app.listen(8080, () => console.log('Servidor aguardando na porta 8080'))