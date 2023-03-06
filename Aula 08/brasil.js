/*****************************************************************************
 * Objetivo: Retornar diversos valores de JSON filtrados para uma API
 * Data: 06/03/2023
 * Autor: André
 * Versão: 1.1
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
        if (estado.sigla == sigla) {
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

const getEstadosRegiao = function (regiaoVar) {
    let jsonListaDeEstadosPorRegiao = {}
    let status = false
    let estados = []
    let regiao = regiaoVar

    brasil.estadosCidades.estados.forEach(function (estadoVar) {
        let estado = estadoVar
        let jsonEstadoDaRegiao = {}
        if (regiao == estado.regiao) {
            jsonEstadoDaRegiao.uf = estado.sigla
            jsonEstadoDaRegiao.descricao = estado.nome

            jsonListaDeEstadosPorRegiao = {
                regiao: estado.regiao,
                estados
            }
            estados.push(jsonEstadoDaRegiao)
        }
        status = true
    })



    if (status == true)
        return jsonListaDeEstadosPorRegiao
    else
        return false
}

const getCapitalPais = function () {
    let jsonListaDeCapitais = {}
    let status = false
    let arrayDeCapitais = []

    brasil.estadosCidades.estados.forEach(function (estado) {
        let jsonCapitais = {}
        if (estado.capital_pais) {
            jsonCapitais.capital_atual = estado.capital_pais.capital
            jsonCapitais.uf = estado.sigla
            jsonCapitais.descricao = estado.nome
            jsonCapitais.capital = estado.capital
            jsonCapitais.regiao = estado.regiao
            jsonCapitais.capital_pais_ano_inicio = estado.capital_pais.ano_inicio
            jsonCapitais.capital_pais_ano_termino = estado.capital_pais.ano_fim

            arrayDeCapitais.push(jsonCapitais)
        }
        
        jsonListaDeCapitais.capitais = arrayDeCapitais
        status = true
    })
   
    
    if (status == true)
        return jsonListaDeCapitais
    else
        return false
}

const getCidades = function(uf){
    let jsonListaCidades = {}
    let arrayCidades = []
    let status = false

    brasil.estadosCidades.estados.forEach(function (estado){
        if(uf == estado.sigla){
            jsonListaCidades.uf = estado.sigla
            jsonListaCidades.descricao = estado.nome
            jsonListaCidades.quantidade_cidades = estado.cidades.length
            estado.cidades.forEach(function (cidade){
                arrayCidades.push(cidade.nome)
            })
        }
        jsonListaCidades.cidades = arrayCidades
        status = true
    })

    if (status == true)
        return jsonListaCidades
    else
        return false
}

console.log(getEstadosRegiao('Sudeste'))