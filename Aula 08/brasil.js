/*****************************************************************************
 * Objetivo: Retornar diversos valores de JSON filtrados para uma API
 * Data: 03/03/2023
 * Autor: André
 * Versão: 1.0
 *****************************************************************************/



var brasil = require('./estados_cidades')

const getListaDeEstados = function () {
    let jsonListaDeEstados = {}
    let uf = []

    brasil.estadosCidades.estados.forEach(function (estado) {
        uf.push(estado.sigla)
    })

    jsonListaDeEstados = {
        uf,
        quantidade: brasil.estadosCidades.estados.length
    }

    return jsonListaDeEstados
}

const getDadosEstado = function (sigla) {
    let jsonListaDeDadosEstado = {}
    let status = false


    brasil.estadosCidades.estados.forEach(function (estado) {
        if (estado.sigla == sigla) {
            jsonListaDeDadosEstado = {
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
                regiao: estado.regiao
            }
            status = true
        }
    })

    if (status == true)
        return jsonListaDeDadosEstado
    else
        return false
}

const getCapitalEstado = function (sigla) {
    let jsonListaCapitalDoEstado = {}
    let status = false

    brasil.estadosCidades.estados.forEach(function (estado) {
        if (estado.sigla == sigla){
            jsonListaCapitalDoEstado = {
                uf: estado.sigla,
                descricao: estado.nome,
                capital: estado.capital,
            }
            status = true
        }
    })

    if (status == true)
        return jsonListaCapitalDoEstado
    else
        return false
}

console.log(getCapitalEstado('Sj'))