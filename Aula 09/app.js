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

app.use((request, response, next) => {
    //API pública - fica disponivel para a utilização de qualquer aplicação
    //API privada - somente o IP informado poderá consumir os dados da API

    //Define se a API será pública ou privada 
    response.header('Acess-Control-Allow-Origin', '*')

    //Permite definir quais métodos poderam ser utilizados nas requisições da API
    response.header('Acess-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS')

    //Envia para o cors() as regras de permissões
    app.use(cors())

    next()
})

//EndPoints
    //async -> estabelece um status de aguarde, assim que eu te processar eu te devolvo os dados
        /* Obs: Se não usar o async a requisição é perdida, 
        pois o front acha que API está fora do ar */

//Endpoint para listar todos os estados.
app.get('/estados', cors(), async function(request, response, next){
    const estadosCidades = require('./modulo/brasil.js')
    let estados = estadosCidades.getListaDeEstados()
    
    response.status(200)
    response.json(estados)
})


app.listen(8080, function(){
    console.log('Servidor aguardando na porta 8080')
})

