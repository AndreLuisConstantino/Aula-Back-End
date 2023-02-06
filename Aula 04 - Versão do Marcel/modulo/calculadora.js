/*****************************************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Data: 03/02/2023
 * Autor: André 
 * Versão: 1.1
 **************************************************************************************/

//Função para realizar calculos matemáticos

//forma 1 de criar uma função (método mais tradicional)
/*function calculadora(numero1, numero2, tipoCalculo) {
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado
    let status = true


    if (operacao == 'SOMAR') {
        resultado = valor1 + valor2
    } else if (operacao == 'SUBTRAIR') {
        resultado = valor1 - valor2
    } else if (operacao == 'MULTIPLICAR') {
        resultado = valor1 * valor2
    } else if (operacao == 'DIVIDIR') {
        //Validação para tratar a divisão por 0
        if (valor2 == 0) {
            console.log('ERROR: Não é possivel realizar a divisão por 0.')
            status = false
        } else {
            resultado = Number(valor1) / Number(valor2)
        }
    } else {
        console.log('ERROR: A sua escolha e operação matemática foram inválidas')
        //Finaliza callback do objeto de entrada de dados(finaliza o programa)
        status = false
    }
    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined || status == false) {
        return false
    } else {
        return resultado
    }

}
*/

//forma 2 de criar uma função(mais utilizado por programadores (JS))
const calculadora = function (numero1, numero2, tipoCalculo) {
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado
    let status = true


    // if (operacao == 'SOMAR') {
    //     resultado = valor1 + valor2
    // } else if (operacao == 'SUBTRAIR') {
    //     resultado = valor1 - valor2
    // } else if (operacao == 'MULTIPLICAR') {
    //     resultado = valor1 * valor2
    // } else if (operacao == 'DIVIDIR') {
    //     //Validação para tratar a divisão por 0
    //     if (valor2 == 0) {
    //         console.log('ERROR: Não é possivel realizar a divisão por 0.')
    //         status = false
    //     } else {
    //         resultado = Number(valor1) / Number(valor2)
    //     }
    // } else {
    //     console.log('ERROR: A sua escolha e operação matemática foram inválidas')
    //     //Finaliza callback do objeto de entrada de dados(finaliza o programa)
    //     status = false
    // }

    switch (operacao) {
        case 'SOMAR':
            resultado = somar(valor1, valor2)
            break
        case 'SUBTRAIR':
            resultado = subtrair(valor1, valor2)
            break
        case 'MULTIPLICAR':
            resultado = multiplicar(valor1, valor2)
            break
        case 'DIVIDIR':
            //Validação para tratar a divisão por 0
            if (valor2 == 0) {
                console.log('ERROR: Não é possivel realizar a divisão por 0.')
                status = false
            } else {
                resultado = dividir(valor1, valor2)
            }
            break

        /*permite entrar nesta opção quando nenhum dos case forem válidos 
        (como se fosse o ultimo else de uma estrutura de if)*/
        default:
            console.log('ERROR: A sua escolha e operação matemática foram inválidas')
            //Finaliza callback do objeto de entrada de dados(finaliza o programa)
            status = false
    }


    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined || status == false) {
        return false
    } else {
        return resultado.toFixed(2)
    }
}

//Forma 3 de criar uma função (arrow function)
const somar       = (valor1, valor2) => Number(valor1) + Number(valor2)
const subtrair    = (valor1, valor2) => Number(valor1) - Number(valor2)
const multiplicar = (valor1, valor2) => Number(valor1) * Number(valor2)
const dividir     = (valor1, valor2) => Number(valor1) / Number(valor2)

//Permite adicionar uma fuction em escopo global (public)
//As fuctions que não estiverem com export serão tratadas apenas com escopo local
module.exports = {
    calculadora
}