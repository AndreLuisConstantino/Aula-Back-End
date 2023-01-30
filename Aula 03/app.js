/******************************************************************************************* 
* Objetivo: MiniCalculadora
* Autor: André
* Data: 27/01/23
* Versão 1.0
*********************************************************************************************/

//import da biblioteca readline
var readline = require('readline')

//Cria o objeto para ser especialista em entrada de dados pelo teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Olá, este é o programa Calcs \n')
entradaDados.question(' 1 para somar \n 2 para subtrair \n 3 para multiplicar \n 4 para dividir \n', function (operacaoResposta) {
    let operacaoMat = operacaoResposta


    if (operacaoMat == 1) {
        entradaDados.question('Digite o primeiro valor \n', function (valorSoma1) {
            let valorOperacaoSomar1 = valorSoma1.replace(',', '.')

            entradaDados.question('Digite o segundo valor \n', function (valorSoma2) {
                let valorOperacaoSomar2 = valorSoma2.replace(',', '.')


                if (valorOperacaoSomar1 == '' || valorOperacaoSomar2 == '') {
                    console.log('ERROR: Você deixou de entrar algum valor')
                } else if (isNaN(valorOperacaoSomar1) || isNaN(valorOperacaoSomar2)) {
                    console.log('ERROR: Digite um número válido')
                } else {
                    let resultadoSoma
                    resultadoSoma = parseFloat(valorOperacaoSomar1) + parseFloat(valorOperacaoSomar2)

                    console.log('O seu resultado é: ' + resultadoSoma)
                }
            })

        })
    } else if (operacaoMat == 2) {
        entradaDados.question('Digite o primeiro valor \n', function (valorSubtrair1) {
            let valorOperacaoSubtrair1 = valorSubtrair1.replace(',', '.')

            entradaDados.question('Digite o segundo valor \n', function (valorSubtrair2) {
                let valorOperacaoSubtrair2 = valorSubtrair2.replace(',', '.')

                if (valorOperacaoSubtrair1 == '' || valorOperacaoSubtrair2 == '') {
                    console.log('ERROR: Você deixou de entrar algum valor')
                } else if (isNaN(valorOperacaoSubtrair1) || isNaN(valorOperacaoSubtrair2)) {
                    console.log('ERROR: Digite um número válido')
                } else {
                    let resultadoSubtracao
                    resultadoSubtracao = parseFloat(valorOperacaoSubtrair1) + parseFloat(valorOperacaoSubtrair2)

                    console.log('O resultado é: ' + resultadoSubtracao)
                }
            })
        })
    } else if (operacaoMat == 3) {
        entradaDados.question('Digite o primeiro valor: \n', function (valorMultiplicar1) {
            let valorOperacaoMultiplicar1 = valorMultiplicar1.replace(',', '.')

            entradaDados.question('Digite o segundo valor: \n', function (valorMultiplicar2) {
                let valorOperacaoMultiplicar2 = valorMultiplicar2.replace(',', '.')

                if (valorOperacaoMultiplicar1 == '' || valorOperacaoMultiplicar2 == '') {
                    console.log('ERROR: Você deixou de entrar algum valor')
                } else if (isNaN(valorOperacaoMultiplicar1) || isNaN(valorOperacaoMultiplicar2)){
                    console.log('ERROR: Digite um número válido')
                } else {
                    let resultadoMultiplicacao
                    resultadoMultiplicacao = parseFloat(valorOperacaoMultiplicar1) * parseFloat(valorOperacaoMultiplicar2)

                    console.log('O seu resultado é: ' +resultadoMultiplicacao)
                }

            })
        })
    } else if(operacaoMat == 4){
        entradaDados.question('Digite o primeiro valor: ', function(valorDividir1){
            let valorOperacaoDividir1 = valorDividir1.replace(',','.')

            entradaDados.question('Digite o segundo valor: ', function(valorDividir2){
                let valorOperacaoDividir2 = valorDividir2.replace(',','.')

                if (valorOperacaoDividir1 == '' || valorOperacaoDividir2 == ''){
                    console.log('ERROR: Você deixou de entrar algum valor')
                } else if (isNaN(valorOperacaoDividir1) || isNaN(valorOperacaoDividir2)){
                    console.log('ERROR: Digite um número válido')
                } else if (valorOperacaoDividir1 == 0 || valorOperacaoDividir2 == 0){
                    console.log('Não é possível dividir com 0')
                } else {
                    let resultadoDivisao
                    resultadoDivisao = parseFloat(valorOperacaoDividir1) / parseFloat(valorOperacaoDividir2)

                    console.log('O seu resultado é: ' +resultadoDivisao)
                }

            })
        })
    }


})
