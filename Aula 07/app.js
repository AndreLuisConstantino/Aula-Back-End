/*****************************************************************************
 * Objetivo: Utilizar códigos e métodos de array
 * Data: 24/02/2023
 * Autor: André
 * Versão: 1.0
 *****************************************************************************/

// [] - representa um objeto do tipo Array
// {} - representa um objeto do tipo JSON
const listaNomes = ['ZÉ', 'MARIA', 'ANTôNIO', 'ANA', 'CARLOS']
const listaProdutos = ['Teclado Kumara','Mouse GPRO SuperLight','Monitor Samgsung','Gabinete','HD','Memória']

const exibindoDados = function () {
    
    console.log(listaNomes)

    //table -permite visualizar o conteúdo do array em tabela.
    console.table(listaNomes)


    //concatenação com array
    console.log(`este é nóia -> ' ${listaNomes[0]}`)

    //Qual o número do array
    console.log(listaNomes.length)

    //percorrendo um array com while
    console.log('***Exemplo com o while***')
    let cont = 0 //Start
    let qtdeItend = listaNomes.length //Stop
    while (cont < qtdeItend) {
        console.log(`O nome do aluno é -> ' ${listaNomes[cont]}`)
        cont += 1
    }

    //percorrendo um array com for
    console.log('***Exemplo com o for***')
    for (let cont = 0; cont < listaNomes.length; cont++) {
        console.log(`O nome do aluno é -> ' ${listaNomes[cont]}`)
    }

    //percorrendo array com for each
    console.log('***Exemplo com o for each***')
    listaNomes.forEach(function (nome) {
        console.log(`O nome do aluno é -> ' ${listaNomes[nome]}`)
    })

}

const manipulandoDados = function(){
    //push - adiciona novos itens no final do Array, preservando os anteriores
    listaProdutos.push('Headset')
    listaProdutos.push('WebCam','Processador AMD','Processador Intel')
    console.table(listaProdutos)

    //unshift - Adiciona novos itens no inicio do Array, re-organizando todos os elementos
    listaProdutos.unshift('HD','PLACA-MÃE','SSD M.2')
    console.table(listaProdutos)

    //pop - Remove o ultimo item do Array, preservando os elementos anteriores
    listaProdutos.pop()
    console.table(listaProdutos)

    //shift - Remove o item do inicio do Array, re-organizando todos os elementos
    listaProdutos.shift()
    console.table(listaProdutos)

    //slice - permite criar uma cópia de uma Array
    const novosProdutos = listaProdutos.slice()
    console.log(listaProdutos)

    //indexOf - Permite buscar dentro de um Array um item
        //Se o retorno for -1, o item  não foi encontrado
        //Se o retorno for maior ou igual a zero, o item encontrado e ele retorna o indice
    console.log(listaProdutos.indexOf('Mouse GPRO SuperLight'))

    //Exemplo de utilização do indexOf()
    if(listaProdutos.indexOf('PC') >= 0){
        console.log('Item encontrado.')
    } else {
        console.log('Item não encontrado.')
    }
}

const removerProduto = function(nomeProduto){
        let nome = nomeProduto
        let status = true
        let indice = listaProdutos.indexOf(nome)

        //splice - Permite apagar um ou mais itens de um array através do indice
            //Se for encaminhado somente o indice ele irá apagar todos os itens 
            //para baixo
            //Para limitar a quantidade de itens a ser apagado, devemos informar como segundo parametro
        if(indice >= 0){
            listaProdutos.splice(indice, 1)
            status = true
        } else {
            status = false
        } 
        return status
}

const removerItem = function(nome, array){
    //Entrada
    const listaProdutosNova = array.slice()
    let indice = listaProdutosNova.indexOf(nome)
    let status = true

    //Processamento
    if(indice >= 0){
        listaProdutosNova.splice(indice, 1)
        status = listaProdutosNova
    } else {
        status = false
    }

    //Saída
    return status
}




// manipulandoDados()
// console.table(listaProdutos)
// console.log(removerProduto('Gabinete'))
// console.table(listaProdutos)
console.table(removerItem('HD', listaProdutos))
console.table(listaProdutos)
