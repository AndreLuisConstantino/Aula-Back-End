/*****************************************************************************
 * Objetivo: Criar uma API para disponibilizar dados de estados e cidades
 * Data: 10/03/2023
 * Autor: André
 * Versão: 1.0
 *****************************************************************************/

/* 
* Express - dependencia para realizar requisições de API pelo protocolo HTTP
*   npm install express --save
*   
* Cors - dependencia para gerenciar permissões de requisições da API
*   npm install cors --save
*
* Body-Parser - dependencia que gerencia o corpo das requisições
*   npm install body-parser --save
*/

//Import das depenencias do projeto

//Dependencia para criar as requisições da API
const express = require('express')
//Dependencia para gerenciar as permissões da API
const cors = require('cors')
//Dependencia para gerenciar o corpo de requisições da API
const bodyParser = require('body-parser')

//Cria um objeto com as características do express
const app = express()

//Import do arquivo modulo (funções)
const estadosCidades = require('./modulo/brasil.js')

app.use((request, response, next) => {
    //API pública - fica disponivel para a utilização de qualquer aplicação
    //API privada - somente o IP informado poderá consumir os dados da API

    //Define se a API será pública ou privada 
    response.header('Acess-Control-Allow-Origin', '*')

    //Permite definir quais métodos poderam ser utilizados nas requisições da API
    response.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o cors() as regras de permissões
    app.use(cors())

    next()
})

//EndPoints
//async -> estabelece um status de aguarde, assim que eu te processar eu te devolvo os dados
/* Obs: Se não usar o async a requisição é perdida, 
pois o front acha que API está fora do ar */

//Endpoint para listar todos os estados.
app.get('/estados', cors(), async function (request, response, next) {

    //Chama a função que vai listar todos os estados
    let estados = estadosCidades.getListaDeEstados()

    //Tratamento para validar o sucesso da requisição
    if (estados) {
        response.status(200)
        response.json(estados)
    } else {
        response.status(500)
    }

})

//Endpoint: Lista os dados do estado filtrando pela sigla
app.get('/estado/:uf', cors(), async function (request, response, next) {
    let statusCode
    let dadosCapitalDoEstado = {}

    //Recebe uma sigla do estado que será enviada pela URL da requisição
    let siglaEstado = request.params.uf

    //Tratamento para validação de entrada de dados incorreta
    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosCapitalDoEstado.message = 'Não foi possivel processar pois os dados de entrada(uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa tercaracteres e ter 2 digitos.'
    } else {
        //Chama a função para retornar os dados do estado
        let estado = estadosCidades.getDadosCapitalDoEstado(siglaEstado)

        if (estado) {
            statusCode = 200
            dadosCapitalDoEstado = estado
        } else {
            statusCode = 404
        }
    }
    //Retorna o código e o JSON
    response.status(statusCode)
    response.json(dadosCapitalDoEstado)
})

app.get('/capital/:uf', cors(), async function (request, response, next) {
    let statusCode
    let dadosCapitalDoEstado = {}

    let siglaEstado = request.params.uf

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        statusCode = 400
        dadosCapitalDoEstado.message = 'Não foi possivel processar pois os dados de entrada(uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa tercaracteres e ter 2 digitos.'
    } else {
        let capitalComInformacoes = estadosCidades.getCapitalEstado(siglaEstado)

        if (capitalComInformacoes) {
            statusCode = 200
            dadosCapitalDoEstado = capitalComInformacoes
        } else {
            statusCode = 404
        }
    }
    response.status(statusCode)
    response.json(dadosCapitalDoEstado)
})

app.get('/estados_da_regiao/:regiao', cors(), async function (request, response, next) {
    let statusCode
    let dadosRegiao = {}

    let regiaoDigitada = request.params.regiao

    if (regiaoDigitada == '' || regiaoDigitada == undefined || !isNaN(regiaoDigitada)) {
        statusCode = 400
        dadosRegiao.message = 'Não foi possivel processar pois os dados de entrada(regiao) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio'
    } else {
        let estadosDaRegiao = estadosCidades.getEstadosRegiao(regiaoDigitada)

        if(estadosDaRegiao){
            statusCode = 200
            dadosRegiao = estadosDaRegiao
        } else {
            statusCode = 404
        }
    }
    response.status(statusCode)
    response.json(dadosRegiao)
})

app.get('/capitais', cors(), async function (request, response, next){
    let statusCode
    let dadosCapitais

    let capitais = estadosCidades.getCapitalPais()

    if(capitais){
        statusCode = 200
        dadosCapitais = capitais
    } else {
        statusCode = 500
    }
    response.status(statusCode)
    response.json(dadosCapitais)
})

app.get('/cidades_do_estado/:uf', cors(), async function(request, response, next){
    let statusCode 
    let dadosDasCidadesDoEstado = {}

    let siglaEstado = request.params.uf

    if(siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)){
        statusCode = 400
        dadosDasCidadesDoEstado.message = 'Não foi possivel processar pois os dados de entrada(uf) que foi enviado não corresponde ao exigido, confira o valor, pois não pode ser vazio, precisa tercaracteres e ter 2 digitos.'
    } else {
        let cidades = estadosCidades.getCidades(siglaEstado)

        if(cidades){
            statusCode = 200
            dadosDasCidadesDoEstado = cidades
        } else{
            statusCode = 404
        }
    }
    response.status(statusCode)
    response.json(dadosDasCidadesDoEstado)
})

//Roda o serviço para a API para ficar aguardando as requisições
app.listen(8080, function () {
    console.log('Servidor aguardando na porta 8080')
})

