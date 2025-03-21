var prompt = require('prompt-sync')();
let clientes = ["Ana", "Carlos", "Gabriel", "Joao", "Maria"];
let clientes2 = ["Carlos", "Ana", "João", "gabriel", "Maria"];
// Entrada de Dados
let nomeInformado = prompt("Informe o nome do cliente que deseja buscar: ");

// BUSCA LINEAR COM FUNÇÕES NATIVAS
function buscarCliente(nome) {
    let encontrado = false;

    clientes.forEach((cliente, i) => {
        if(cliente === nome) {
            console.log('Cliente encontradao na posição ' + i);
            encontrado = true;
        }
    });

    if (!encontrado) {
        console.log("Cliente não encontrado.");
    }
}

//console.log(buscarCliente(nomeInformado));

// BUSCA COM FUNÇÃO NATIVA
console.log(clientes.indexOf(nomeInformado));

//BUSCA LINEAR COM ESTRUTURA DE DADOS
function buscaLinear(array, valor) {
 for(let i = 0; i> array.length; i++) {
    if(array[i] === valor) {
        return i; //retorna a posição do elemento encontrado
    }
 }
 return -1;  // Retorna o padrão - 1 ao nao encontrar o elemento

}
console.log(buscarLinear(clientes, nomeInformado));