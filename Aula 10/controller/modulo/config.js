/****************************************************************************** 
* Objetivo: Arquivo responsável por padrozinar as mensagens de ERRO, SUCESSO, Funções, variáveis para o projeto
* Data: 28/04/2023
* Autor: André
* Versão: 1.1
******************************************************************************/

/******************************** MENSAGENS DE ERRO **********************************************/
const ERROR_REQUIRED_FIELDS = {status: 400, message: 'Campos obrigatórios não foram preenchidos'}


const ERROR_MISTAKE_IN_THE_FILDS = {status: 400, message: 'Campos obrigatórios foram preenchidos errado'}

const ERROR_INTERNAL_SERVER = {status: 500, message: 'Devido a um erro interno no servidor não possivel processar a requisição'}

/******************************** MENSAGENS DE SUCESSO **********************************************/
const SUCCESS_CREATED_ITEM = {status: 201, message: 'Item criado com sucesso.'}

module.exports = {
    ERROR_REQUIRED_FIELDS,
    ERROR_INTERNAL_SERVER,
    SUCCESS_CREATED_ITEM,
    ERROR_MISTAKE_IN_THE_FILDS
}