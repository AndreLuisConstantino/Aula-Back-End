/*****************************************************************************
 * Objetivo: Retornar diversos valores de JSON filtrados para uma API
 * Data: 03/03/2023
 * Autor: André
 * Versão: 1.0
 *****************************************************************************/



var brasil = require('./estados_cidades')

const getListaDeEstados = function(){
   let jsonListaDeEstados = {}
   let uf = []

   brasil.estadosCidades.estados.forEach(function(estado){
      uf.push(estado.sigla)
   })

   jsonListaDeEstados = {
      uf
   }
   
   return jsonListaDeEstados
}

console.log(getListaDeEstados())