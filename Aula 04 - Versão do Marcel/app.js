/*****************************************************************************
 * Objetivo: Projetar e realizar calculos matrmáticos (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
 * Data: 03/02/2023
 * Autor: André
 * Versão: 1.0
 **************************************************************************************/

//Import da biblioteca da calculadora
var matematica = require('./modulo/calculadora.js')

//import da biblioteca readline
var readline = require('readline')

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Valor1
entradaDados.question('Valor: \n', function (numero1) {
    let valor1 = numero1.replace(',', '.')

    //Valor2
    entradaDados.question('Valor2: \n', function (numero2) {
        let valor2 = numero2.replace(',', '.')

        //Tipo de operação matemática
        entradaDados.question('Escolha uma operação matemática: [Somar | Subtrair | Multiplicar | Dividir] \n', function (tipoCalculo) {
            let operacao = tipoCalculo.toUpperCase()

            let resultado

            //Validação entrada de dados vazia
            if (valor1 == '' || valor2 == '' || operacao == '') {
                console.log('ERROR: Não é possivel calcular se algum dado estiver vazio.')
                //else of (typeof(valor1) != 'number')    
                //typeof( ) → É um método que verifica o tipo de dado, e não o conteúdo.
                //O isNaN → identifica o tipo de conteúdo idependente do tipo de dados

                //Validação para entrada de dados númerico
            } else if (isNaN(valor1) || isNaN(valor2)) {
                console.log('ERROR: Não é possivel calcular se os dados digitados não forem número.')
            } else {
                //toUpperCase → converte uma string em maiúscula
                //toLowerCase → converte uma string em mínuscula

                resultado = matematica.calculadora(valor1, valor2, operacao)

                //Chama a função para calcular os valores(função que nós criamos)
                //if (resultado == false && typeof (resultado) == 'boolean'){
                if( resultado === false){
                    entradaDados.close()
                } else {
                    console.log(resultado)                   
                }
                
            }
        })
    })
})