/*****************************************************************************
 * Objetivo: Arquivo de funções para calcular uma tabuada
 * Data: 06/02/2023
 * Autor: André
 * Versão: 1.0
 **************************************************************************************/

//Função que gera uma tabuada até uma valor específico
const getTabuada = function (minMultiplicando, maxMultiplicador, minimoMultiplicadorDeTabuada, maximoMultiplicadorDeTabuada) {
    let tabuada
    let tabuadaInicial = Number(String(minMultiplicando).replace(',', '.'))
    let tabuadaFinal = Number(String(maxMultiplicador).replace(',', '.'))
    let minimoMultiplicador = Number(String(minimoMultiplicadorDeTabuada).replace(',', '.'))
    let maximoMultiplicador = Number(String(maximoMultiplicadorDeTabuada).replace(',', '.'))
    let status = true
    let resultado
    tabuada = minimoMultiplicador
    

    if (tabuadaFinal == 0 || minimoMultiplicador == 0 || maximoMultiplicador == 0) {
        console.log('Algum dos valores foi digitado como vazio.')
        status = false
    } else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(minimoMultiplicador) || isNaN(maximoMultiplicador)) {
        console.log('Algum dos valores digitados não é um número.')
        status = false
    } else if (tabuadaInicial < 2 || tabuadaFinal > 100) {
        console.log('Valor de tabuada inicial/final inválido.')
        status = false
    } else if (tabuada > 50 || tabuada < 1 || maximoMultiplicador > 50 || maximoMultiplicador < 1) {
        console.log('O minimo multiplicador só pode ir de 1 a 50')
        status = false
    }else if(tabuadaInicial > tabuadaFinal){
        console.log('A tabuada inicial não pode maior que a final.')
    } else {
        for (minimoMultiplicador; minimoMultiplicador <= maximoMultiplicador; minimoMultiplicador++) {
            for (contador = tabuadaInicial; contador <= tabuadaFinal; contador++) {
                resultado = tabuada * contador
                console.log(`${tabuada} x ${contador} = ${resultado}`)
            }
            tabuada++
        }
    }
}


module.exports = {
    getTabuada
}