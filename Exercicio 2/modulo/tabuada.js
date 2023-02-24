/*****************************************************************************
 * Objetivo: Arquivo de funções para calcular uma tabuada
 * Data: 13/02/2023
 * Autor: André
 * Versão: 1.0
 **************************************************************************************/

//Função que gera uma tabuada até uma valor específico
const getTabuada = function (tabuadaInicialDigitada, tabuadaFinalDigitada, minimoMultiplicadorDigitado, maximoMultiplicadorDigitado) {
    let tabuada
    let tabuadaInicial = Number(String(tabuadaInicialDigitada).replace(',', '.'))
    let tabuadaFinal = Number(String(tabuadaFinalDigitada
).replace(',', '.'))
    let minimoMultiplicador = Number(String(minimoMultiplicadorDigitado).replace(',', '.'))
    let maximoMultiplicador = Number(String(maximoMultiplicadorDigitado).replace(',', '.'))
    let status = true
    let resultado
    tabuada = minimoMultiplicador
    

    if (tabuadaFinal == '' || minimoMultiplicador == '' || maximoMultiplicador == '') {
        console.log('Algum dos valores foi digitado como vazio.')
        status = false
    } else if (isNaN(tabuadaInicial) || isNaN(tabuadaFinal) || isNaN(minimoMultiplicador) || isNaN(maximoMultiplicador)) {
        console.log('Algum dos valores digitados não é um número.')
        status = false
    } else if (tabuadaInicial < 2 || tabuadaFinal > 100) {
        console.log('Valor de tabuada inicial/final inválido.')
        status = false
    } else if (maximoMultiplicador > 50 || maximoMultiplicador < 1 || minimoMultiplicador > 50 || minimoMultiplicador < 1) {
        console.log('A tabuada e os minimos/maximos multiplicadores só pode ir de 1 a 50')
        status = false
    }else if(tabuadaInicial > tabuadaFinal){
        console.log('A tabuada inicial não pode maior que a final.')
        status = false
    } else {
        for (minimoMultiplicador; minimoMultiplicador <= maximoMultiplicador; minimoMultiplicador++) {
            console.log(`Tabuada do: ${tabuada}`)
            for (contador = tabuadaInicial; contador <= tabuadaFinal; contador++) {
                resultado = tabuada * contador
                console.log(`${tabuada} x ${contador} = ${resultado}`)
            }
            tabuada++
            console.log('*************')
        }
    }
}


module.exports = {
    getTabuada
}