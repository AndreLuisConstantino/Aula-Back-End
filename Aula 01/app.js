//Exibe uma mensagem no terminal
console.log('Olá Mundo!!!');


//Import da biblioteca que permite entrada de dados via teclado
var readLine = require('readline');

//Criamos um objeto ou variável que vai ser especialista na entrada de dados via teclado
var entradaDados = readLine.createInterface({
    input: process.stdin, 
    output: process.stdout
});

/*CallBack - Uma função de CallBack permite que na própia linha de programação
seja uma variavel, um processamento, a cahmada de um método possa acontecer 
um retorno de dados automaticamente, sem precisar sair deste processamento.
*/

/*Cria uma interação com o usuário para entrada de dados. Após o usuário digitar o conteúdo ,
 o objeto entradaDados permite retornar o conteúdo digitado para ser utilizado. 
 Isso acontece através de uma função de callback
 */
entradaDados.question('Favor digitar o seu nome: \n', function(nome){
    console.log('Bem vindo, '+ nome + ' ao servidor Node.js')
});
