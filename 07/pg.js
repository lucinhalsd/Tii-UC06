function saudacao(nome, lugar) {
    console.log("Olá, " + nome + ", boa noite!");
    console.log("Seja Bem Vindos ao " + lugar );
}

// saudacao("Aecio", "Senac");
// saudacao("Adenilsa", "FreeFire");
// saudacao("Carlos", "TII09");
// saudacao("Lucas", "Aula de Sábado");

// let resultado = soma(5, 10);
// console.log(resultado); // exibe 15
// console.log(soma(3, 4)); // exibe 7
// console.log(soma(2, 2) * 5); // exibe 20

//// Escopo local de funções

function teste() {
    let mensagem = "Olá";
    console.log(mensagem);
}
 //teste();
 //console.log(mensagem); // Erro de escopo

 let dizAlgo = function() {
    console.log("Eu disse");
    console. log("eEle disse");
    console.log("Nos dissemos");
 }

 //dizAlgo()

 //Arrow funcion
 function dobro(x) {
    return x * 2;
 }
 let dobroAnonimo = function(x) {
    return x * 2;
 }
 let dobroArrow = (x) => {
    return x * 2;
 }

 let dobroSimples = x => x * 2;

 console.log(dobro(3));
 console.log(dobroAnonimo(3));
 console.log(dobroArrow(3));
 console.log(dobroSimples(3));