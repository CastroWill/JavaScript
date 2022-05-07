// == igual a 
// ==== valor igual e igual
// != não é igual
// !== não igual ou não igual
// > maior que
// < menor que
// >= maior ou igual a
// <= menor ou igual a 

console.log(3 == "3");
console.log(3 === "3");
console.log(2 != 2);
console.log(2 !== "2");
console.log(2 > 3);
console.log(2 < 3);
console.log(2 >= 2);
console.log(2 <= 2);8

//Exemplo de uso com Prompt e Alert

var idade = parseInt(prompt("Digite um número."));

var dobro = idade + idade;

alert("O dobro de " + idade + " é " + dobro);

//Exemplo de uso do Operador ternário

idade >= 18 ? console.log("Pode beber") : console.log("Não pode beber");