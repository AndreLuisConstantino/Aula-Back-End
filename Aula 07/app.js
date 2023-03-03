/*****************************************************************************
 * Objetivo: Utilizar códigos e métodos de array
 * Data: 24/02/2023
 * Autor: André
 * Versão: 1.0
 *****************************************************************************/

// [] - representa um objeto do tipo Array
// {} - representa um objeto do tipo JSON

const listaNomes = ['ZÉ', 'MARIA', 'ANTôNIO', 'ANA', 'CARLOS']
const listaProdutos = ['Teclado Kumara', 'Mouse GPRO SuperLight', 'Monitor Samgsung', 'Gabinete', 'HD', 'Memória']

/*****************
 * JSON é composto: chave(atributo) e valor
 *  chave   valor  chave       valor      chave    valor
 * {nome: 'José', celular: '1192222222', email: 'jose@gmail.com'}
 * 
 * 
 ****************/

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

const manipulandoDados = function () {
    //push - adiciona novos itens no final do Array, preservando os anteriores
    listaProdutos.push('Headset')
    listaProdutos.push('WebCam', 'Processador AMD', 'Processador Intel')
    console.table(listaProdutos)

    //unshift - Adiciona novos itens no inicio do Array, re-organizando todos os elementos
    listaProdutos.unshift('HD', 'PLACA-MÃE', 'SSD M.2')
    console.table(listaProdutos)

    //pop - Remove o ultimo itemProduto do Array, preservando os elementos anteriores
    listaProdutos.pop()
    console.table(listaProdutos)

    //shift - Remove o itemProduto do inicio do Array, re-organizando todos os elementos
    listaProdutos.shift()
    console.table(listaProdutos)

    //slice - permite criar uma cópia de uma Array
    const novosProdutos = listaProdutos.slice()
    console.log(listaProdutos)

    //indexOf - Permite buscar dentro de um Array um itemProduto
    //Se o retorno for -1, o itemProduto  não foi encontrado
    //Se o retorno for maior ou igual a zero, o itemProduto encontrado e ele retorna o indice
    console.log(listaProdutos.indexOf('Mouse GPRO SuperLight'))

    //Exemplo de utilização do indexOf()
    if (listaProdutos.indexOf('PC') >= 0) {
        console.log('itemProduto encontrado.')
    } else {
        console.log('itemProduto não encontrado.')
    }
}

const removerProduto = function (nomeProduto) {
    let nome = nomeProduto
    let status = true
    let indice = listaProdutos.indexOf(nome)

    //splice - Permite apagar um ou mais itens de um array através do indice
    //Se for encaminhado somente o indice ele irá apagar todos os itens 
    //para baixo
    //Para limitar a quantidade de itens a ser apagado, devemos informar como segundo parametro
    if (indice >= 0) {
        listaProdutos.splice(indice, 1)
        status = true
    } else {
        status = false
    }
    return status
}

const removeritemProduto = function (nome, array) {
    //Entrada
    const listaProdutosNova = array.slice()
    let indice = listaProdutosNova.indexOf(nome)
    let status = true

    //Processamento
    if (indice >= 0) {
        listaProdutosNova.splice(indice, 1)
        status = listaProdutosNova
    } else {
        status = false
    }

    //Saída
    return status
}

const listagemProdutos = function () {

    //Forma nº1 de criar um Json e já atribuir chaves e valores
    // let listProdutosJson = {
    //     produtos: listaProdutos, 
    //     clientes: listaNomes
    // }

    //Forma nº2 de criar o Json, onde as chaves e valores são atribuidos ao redor do projeto
    // let listProdutosJson = {}

    // listProdutosJson.produtos = listaProdutos
    // listProdutosJson.clientes = listaNomes

    //Extraindo valores do Json e Array
    // console.log(listProdutosJson)
    // console.log(listProdutosJson.produtos[1])
    // console.log(listProdutosJson.clientes[4])

    //Cria um JSON
    let listProdutosJson = {}

    //Cria um Array
    let listProdutosArray = [
        {
            nome: 'Monitor',
            quantidade: 300,
            marca: 'Dell',
            valor: 1000,
            codigo: 100
        },
        {
            nome: 'Monitor',
            quantidade: 300,
            marca: 'LG',
            valor: 1000,
            codigo: 101
        },
        {
            nome: 'Teclado',
            quantidade: 101,
            marca: 'Razer',
            valor: 1000,
            codigo: 102
        },
        {
            nome: 'Teclado',
            quantidade: 100,
            marca: 'RedDragon',
            valor: 200,
            codigo: 103
        },
        {
            nome: 'Mouse',
            quantidade: 780,
            marca: 'Dell',
            valor: 115,
            codigo: 104
        },
        {
            nome: 'Mouse',
            quantidade: 780,
            marca: 'Razer',
            valor: 800,
            codigo: 105
        }
    ]

    //Arrays para cores
    let listCoresDellArray = ['Preto', 'Branco', 'Cinza']
    let listCoresLgArray = ['Preto', 'Cinza']
    let listCoresTecladoArray = ['Preto', 'Branco', 'Cinza', 'Rosa', 'Azul']
    let listCoresMouseArray = ['Preto', 'Branco', 'Azul', 'Verde', 'Rosa', 'Amarelo', 'Vermelho', 'Roxo']

    //Arrays para modelo
    let listModelosMonitor = ['LCD', 'LED', 'OLED', '4K', '5K', 'IPS']
    let listModelosTeclado = ['Mecânico', 'Optico', 'Semi-Mecânico', 'Membrana']

    //Adicona o Array produtos dentro de um JSON
    listProdutosJson.produtos = listProdutosArray

    //Adicionar cores ao monitor Dell
    listProdutosJson.produtos[0].cores = listCoresDellArray
    listProdutosJson.produtos[1].cores = listCoresLgArray
    listProdutosJson.produtos[2].cores = listCoresTecladoArray
    listProdutosJson.produtos[3].cores = listCoresMouseArray
    listProdutosJson.produtos[4].cores = listCoresMouseArray
    listProdutosJson.produtos[5].cores = listCoresMouseArray

    //Adicionar modelos aos monitores
    listProdutosJson.produtos[0].modelo = listModelosMonitor
    listProdutosJson.produtos[1].modelo = listModelosMonitor
    listProdutosJson.produtos[2].modelo = listModelosTeclado
    listProdutosJson.produtos[3].modelo = listModelosTeclado



    // console.table(listProdutosArray)
    // console.log(`Nome: ${listProdutosJson.produtos[1].nome}`)
    // console.log(`Marca: ${listProdutosJson.produtos[1].marca}`)
    // console.log(`Valor: ${listProdutosJson.produtos[1].valor}`)
    // console.log(`Cor: ${listProdutosJson.produtos[1].cores[1]}`)
    // console.log(`Modelo: ${listProdutosJson.produtos[1].modelo[1]}`)

    //Print feita com o for:
    // for (let contador = 0; contador < listProdutosJson.produtos.length; contador++) {
    //     console.log(`Nome: ${listProdutosJson.produtos[contador].nome}`)
    //     console.log(`Marca: ${listProdutosJson.produtos[contador].marca}`)
    //     console.log(`Valor: ${listProdutosJson.produtos[contador].valor}`)  
    //     console.log(`Código: ${listProdutosJson.produtos[contador].codigo}`)  
    //     let contCor = 0
    //     for(let contadorCores = contCor; contadorCores < listProdutosJson.produtos[contador].cores.length; contadorCores++){
    //         console.log(`Cores: ${listProdutosJson.produtos[contador].cores[contadorCores]}`)
    //     }
    //     if(contador <= 3){
    //         let contadorModelo = 0
    //         for(let contadorModel = contadorModelo; contadorModel < listProdutosJson.produtos[contador].modelo.length; contadorModel++){
    //             console.log(`Modelo: ${listProdutosJson.produtos[contador].modelo[contadorModel]}`)
    //         }
    //     }
    //     console.log('****************************************')
    // }

    //Percorre o Array de produtos para listar os itens
    listProdutosJson.produtos.forEach(function (itemProduto) {
        console.log(`Nome: ${itemProduto.nome}`)
        console.log(`Marca: ${itemProduto.marca}`)
        console.log(`Valor: ${itemProduto.valor}`)
        console.log(`Código: ${itemProduto.codigo}`)

        //Tratamento de erro para quando não existir Array de cores
        if (itemProduto.cores != undefined) {
            //Percorre o Array de cores que está no itemProduto
            itemProduto.cores.forEach(function (itemCores) {
                console.log('**** Cores: ' + itemCores);
            })
        }
        //Para quando não existir Array de modelos
        if (itemProduto.modelo != undefined) {
            //Percorre o  Array de modelos que está dentro do Array de produtos
            itemProduto.modelo.forEach(function (itemModelo) {
                console.log('**** Modelos: ' + itemModelo)
            })
        }
        console.log('*******************************')
    })
}

listagemProdutos()
// console.table(removeritemProduto('HD', listaProdutos))
// console.table(listaProdutos)