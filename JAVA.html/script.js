var numero = prompt ("Digite um número: ");

if (numero > 10){
    alert(numero + " é maior que 10")
}else if (numero < 10){
    alert(numero + " é menor que 10")
}else{
    alert(numero + " é igual a 10");
}

alert("Parte2.1")
var num1 = prompt("valor1")
var num2 = prompt("valor2")

num1 = parseInt(num1)
num2 = parseInt(num2)

alert(num1 + num2);

alert("Parte3.1")
var n1 = prompt("valor 1: ")
var op = prompt("Operação a ser realizada (+, -, *, /: ")
var n2 = prompt("valor 2: ")
n1 = parseFloat(n1)
n2 = parseFloat(n2)

switch(op){
    case '+':
        alert(n1 + n2);
        break;
    case '-':
        alert(n1 - n2);
        break;
    case '*':
        alert(n1 * n2);
        break;
    case '/':
        alert(n1 / n2);
        break;        
    default:
        alert("ERRO FATAL! OPERAÇÃO INVÁLIDA");        
}

alert("Parte4.1")
var nome = prompt("Digite um nome: ")
var valor = prompt("Digite um valor: ")

for (var i = 0; 1<valor; i++){
    alert(nome);
}

alert("Parte5.1")
var variavel = [];
variavel[0] = prompt("Digite um nome");
variavel[1] = prompt("Digite um endereço");
variavel[2] = prompt("Digite um email");
alert(variavel[0]);
alert(variavel[1]);
alert(variavel[2]);

alert("Parte6.1")
nome = prompt("Digite um nome");
endereço = prompt("Digite um endereço");
email = prompt("Digite um email");

var obj = { 
    propriedadenome: nome,
    propriedadeendereço: endereço,
    propriedadeemail: email
}

alert (obj.propriedadenome);
alert (propriedadeendereço);
alert (propriedadeemail);
