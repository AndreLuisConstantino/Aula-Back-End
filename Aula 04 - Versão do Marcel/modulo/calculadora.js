/*****************************************************************************
 * Objetivo: Arquivo de funções para calculos matemáticos
 * Data: 03/02/2023
 * Autor: André 
 * Versão: 1.0
 **************************************************************************************/

//Função para realizar calculos matemáticos
function calculadora(numero1, numero2, tipoCalculo) {
    let valor1 = Number(numero1)
    let valor2 = Number(numero2)
    let operacao = tipoCalculo.toUpperCase()
    let resultado
    

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
        } else {
            resultado = Number(valor1) / Number(valor2)
        }
    } else {
        console.log('ERROR: A sua escolha e operação matemática foram inválidas')
        //Finaliza callback do objeto de entrada de dados(finaliza o programa)
        entradaDados.close()
    }
    //Validação para tratar quando a variável resultado não for processada por algum problema
    if (resultado == undefined) {
        return false
    } else {
        return resultado
    }

}

//Permite adicionar uma fuction em escopo global (public)
//As fuctions que não estiverem com export serão tratadas apenas com escopo local
module.exports = {
    calculadora
}