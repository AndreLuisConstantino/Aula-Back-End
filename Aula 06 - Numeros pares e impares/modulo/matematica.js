/*****************************************************************************
 * Objetivo: App para fazer o calculo de separação de nuemros pares e impares
 * Data: 06/02/2023
 * Autor: André
 * Versão: 1.0
 **************************************************************************************/

const separarParesDosImpares = function (numeroInicialDigitado, numeroFinalDigitado) {
    let numeroInicial = Number(String(numeroInicialDigitado).replace(',', '.'))
    let numeroFinal = Number(String(numeroFinalDigitado).replace(',', '.'))
    let status = true

    if (numeroInicial == '' || numeroFinal == '') {
        console.log('Você deixou de entrar algum valor.')
        status = false
    } else if (numeroInicial < 0 || numeroInicial > 500) {
        console.log('O número inicial só pode estar entre 0 e 500.')
        status = false
    } else if (numeroFinal < 0 || numeroFinal > 1000) {
        console.log('O número final só pode estar entre 100 e 500.')
        status = false
    } else if (numeroInicial >= numeroFinal) {
        console.log('O número inicial não pode ser maior que o final ou igual ao mesmo.')
        status = false
    } else {
        console.log('***Tabela de números pares:***')
        for(numeroInicial; numeroInicial <= numeroFinal; numeroInicial++) {
            if (numeroInicial % 2 == false) {
                console.log(numeroInicial)
            }
        }
        return status
    }
}

const separarImparesDosPares = function (numeroInicialDigitado, numeroFinalDigitado){
    let numeroInicial = Number(String(numeroInicialDigitado).replace(',', '.'))
    let numeroFinal = Number(String(numeroFinalDigitado).replace(',', '.'))
    let status = true

    if (numeroInicial == '' || numeroFinal == '') {
        console.log('Você deixou de entrar algum valor.')
        status = false
    } else if (isNaN(numeroInicial) || isNaN(numeroFinal)){
        console.log('Algum dos valores digitados não é um número.')
    } 
    else if (numeroInicial < 0 || numeroInicial > 500) {
        console.log('O número inicial só pode estar entre 0 e 500.')
        status = false
    } else if (numeroFinal < 100 || numeroFinal > 1000) {
        console.log('O número final só pode estar entre 100 e 500.')
        status = false
    } else if (numeroInicial >= numeroFinal) {
        console.log('O número inicial não pode ser maior que o final ou igual ao mesmo.')
        status = false
    } else {
        console.log('***Tabela de números pares:***')
        for(numeroInicial; numeroInicial <= numeroFinal; numeroInicial++) {
            if (numeroInicial % 2 == true) {
                console.log(numeroInicial)
            }
        }
        return status
    }
}

separarParesDosImpares(10, 50)
separarImparesDosPares(10,70)  

module.exports = {
    separarImparesDosPares,
    separarParesDosImpares
}