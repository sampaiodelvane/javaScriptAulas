// === Exercício 1: Dados Pessoais e Moeda ===
var nome = window.prompt('Qual é o seu nome?');
var salarioBruto = window.prompt('Digite seu salário');

// Convertendo para número para formatar como moeda
let salarioNumerico = Number(salarioBruto);
let salarioFormatado = salarioNumerico.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

document.write(`Olá, <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br/>`);
document.write(`Seu nome com maiúsculas é ${nome.toUpperCase()}<br/>`);
document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}<br/>`);
document.write(`Seu salário formatado é ${salarioFormatado}<br/>`);

// === Exercício 2: Idade ===
let nomeSimples = prompt('Qual é o seu nome?');
let idade = Number(prompt('Qual sua idade?'));
document.write(`Seu nome é ${nomeSimples} e sua idade é ${idade} anos!<br/>`);






// === A) Cálculo do IMC com Classificação ===
let pesoIMC = Number(prompt("Digite o seu peso (kg): "));
let alturaIMC = Number(prompt("Digite a sua altura em cm: ")) / 100; // Converte cm para metros

let imcValue = pesoIMC / (alturaIMC * alturaIMC);
let classificacao = '';

if (imcValue < 18.5) {
    classificacao = "Magreza";
} else if (imcValue <= 24.9) {
    classificacao = "Peso normal";
} else if (imcValue <= 29.9) {
    classificacao = "Sobrepeso";
} else if (imcValue <= 34.9) {
    classificacao = "Obesidade grau I";
} else if (imcValue <= 39.9) {
    classificacao = "Obesidade grau II";
} else {
    classificacao = "Obesidade grau III (mórbida)";
}

alert(`Seu IMC é ${imcValue.toFixed(2)} e sua avaliação é: ${classificacao}`);

// === B) Calculadora Completa com Validações ===
let n1 = prompt("Digite o primeiro número");
let n2 = prompt("Digite o segundo número");
let op = prompt("Operação: +, -, * ou /");

if (n1 === null || n2 === null || op === null) {
    alert("Operação cancelada.");
} else if (n1 === "" || n2 === "" || op === "") {
    alert("Preencha todos os campos!");
} else if (isNaN(n1) || isNaN(n2)) {
    alert("Digite apenas números!");
} else {
    n1 = Number(n1);
    n2 = Number(n2);
    let calcRes;

    switch (op) {
        case "+": calcRes = n1 + n2; break;
        case "-": calcRes = n1 - n2; break;
        case "*": calcRes = n1 * n2; break;
        case "/": 
            calcRes = (n2 !== 0) ? n1 / n2 : "Erro: Divisão por zero"; 
            break;
        default: alert("Operação inválida!");
    }

    if (calcRes !== undefined) alert("Resultado: " + calcRes);
}







// === Arrow Functions Curtas ===
const gerarAleatorio = () => Math.floor(Math.random() * 100);
const dobrar = n => n * 2;
const somarRapido = (a, b) => a + b;

// === Manipulação de Texto com Arrow Function ===
const limparEFormatar = (texto) => texto.trim().toUpperCase();

console.log(limparEFormatar("   javascript é legal   ")); // "JAVASCRIPT É LEGAL"

// === Função de Substituição ===
function substituirLetra(texto) {
    let t = texto.toLowerCase();
    return t.includes("a") ? t.replaceAll("a", "o") : t;
}

// === Orquestração de Funções (Boas Práticas) ===
const coletarDados = () => prompt("Digite algo:");
const exibir = (m) => alert("Mensagem: " + m);

const iniciarApp = () => {
    const info = coletarDados();
    exibir(limparEFormatar(info));
};








// === Jogo de Adivinhação (do/while) ===
const numSecreto = Math.floor(Math.random() * 10) + 1;
let tentativa;
let contador = 0;

do {
    tentativa = Number(prompt("Chute um número de 1 a 10:"));
    contador++;
    if (tentativa < numSecreto) alert("Muito baixo!");
    else if (tentativa > numSecreto) alert("Muito alto!");
} while (tentativa !== numSecreto);

alert(`Acertou em ${contador} tentativas!`);

// === Validação de Cadastro Robusta ===
let userNome, userIdade;

do {
    userNome = prompt("Digite seu nome (mínimo 3 letras):");
} while (!userNome || userNome.length <= 3);

do {
    userIdade = Number(prompt("Digite sua idade (0-150):"));
} while (isNaN(userIdade) || userIdade < 0 || userIdade > 150);

alert(`Usuário ${userNome} de ${userIdade} anos cadastrado com sucesso!`);

// === Tabuada (for) ===
let tabNum = Number(prompt("Ver tabuada de:"));
if (!isNaN(tabNum)) {
    let tabela = "";
    for (let i = 1; i <= 10; i++) {
        tabela += `${tabNum} x ${i} = ${tabNum * i}\n`;
    }
    alert(tabela);
}

//Última aula


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>




<script src="script.js"></script>
   
</body>
</html>




----------------------------------



// 01 function diminuirNumero(numero){
//     while (numero <=10) {
//         console.log(numero);
//         numero++;      
//     }
// }
// let numeroDigitado = Number(prompt("Digite um numero"))
// diminuirNumero(numeroDigitado)






// 02 lopping para contagem regressiva
// let numeroDigitado = Number(prompt("Digite um numero"))
// diminuirNumero(numeroDigitado)
// function diminuirNumero(numero){
//     while (numero >=1) {
//         console.log(numero);
//         numero--;      
//     }
// }




// 03 lopping para contagem regressiva



// let nome;
// do{
//     nome = prompt("Digite um nome");
//     if(nome.length <=3){
//         alert("Digite nome valido")
//     }
// } while(nome.length <=3)

// let idade;
// do{
//     idade = prompt("Digite sua idade");
// } while(isNaN(idade>0 || idade >150))


// let salario;
// do{
//     salario = prompt("Digite seu salario");
// } while(isNaN(salario>0))


// let genero;
// do{
//     genero = prompt("Digite seu genero");
// } while(genero !=='f' && genero !=='m')


// let estadoCivil;
// do{
//     estadoCivil = prompt("Digite seu Estado Civil");
// } while(estadoCivil !=='s'&& estadoCivil !=='c' && estadoCivil !=='v'&& estadoCivil !=='d')


// // 04 faça um programa usando estrutura de repetição que mostre a tabuada
// //ate 10 que qualquer numero fornecido


// let numero = Number(prompt("Digite um numero"))
// for(let i = 1; i <= 10; i++){
//     console.log(`O numero ${numero} x ${i} é ${numero *i}`);
// }




//Palindromo

let palavra = prompt("Digite uma palavra:").toLowerCase();

let invertida = "";

for (let i = palavra.length - 1; i >= 0; i--) {
    invertida += palavra[i];
}

if (palavra === invertida) {
    document.write("A palavra <strong>" + palavra + "</strong> é um palíndromo.");
} else {
    document.write("A palavra <strong>" + palavra + "</strong> não é um palíndromo.");
}


//Par e impar

let numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
    document.write("O número <strong>" + numero + "</strong> é PAR.");
} else {
    document.write("O número <strong>" + numero + "</strong> é ÍMPAR.");
}


//Numeros primos

let numero = Number(prompt("Digite um número:"));
let primo = true;

if (numero <= 1) {
    primo = false;
}

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        primo = false;
    }
}

if (primo) {
    document.write("O número <strong>" + numero + "</strong> é primo.");
} else {
    document.write("O número <strong>" + numero + "</strong> não é primo.");
}

//Caixa Eletronico

let total = 0;
let preco = 0;

while (preco !== 0) {

    preco = Number(prompt("Digite o preço do produto (0 para finalizar):"));

    if (preco !== 0) {
        total += preco;
    }
}

document.write("<h2>Total da compra: R$ " + total.toFixed(2) + "</h2>");

//Verificar numero negativo ou zero

let numero = Number(prompt("Digite um número:"));

if (numero > 0) {
    document.write("Número positivo");
} else if (numero < 0) {
    document.write("Número negativo");
} else {
    document.write("Número igual a zero");
}


//Calcular média de duas nota

let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

document.write("Média: " + media.toFixed(1));

if (media >= 6) {
    document.write("<br>Aprovado");
} else {
    document.write("<br>Reprovado");
}


//Verificar se um número é par ou ímpar

let numero = Number(prompt("Digite um número:"));

if (numero % 2 === 0) {
    document.write("Número PAR");
} else {
    document.write("Número ÍMPAR");
}


//Tabuada de um número

let numero = Number(prompt("Digite um número:"));

for (let i = 1; i <= 10; i++) {
    document.write(numero + " x " + i + " = " + (numero * i) + "<br>");
}


//Sistema simples de mercado

let total = 0;
let preco = 0;

while (preco !== 0) {

    preco = Number(prompt("Digite o preço do produto (0 para finalizar):"));

    if (preco !== 0) {
        total += preco;
    }
}

document.write("Total da compra: R$ " + total.toFixed(2));


//Verificar número primo

let numero = Number(prompt("Digite um número:"));
let primo = true;

if (numero <= 1) {
    primo = false;
}

for (let i = 2; i < numero; i++) {

    if (numero % i === 0) {
        primo = false;
    }
}

if (primo) {
    document.write("Número primo");
} else {
    document.write("Número não primo");
}


//Contagem regressiva

for (let i = 10; i >= 0; i--) {
    document.write(i + "<br>");
}

document.write("FIM!");


//Calculadora simples

let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

let operacao = prompt("Digite a operação (+, -, *, /)");

if (operacao === "+") {
    document.write("Resultado: " + (numero1 + numero2));
} else if (operacao === "-") {
    document.write("Resultado: " + (numero1 - numero2));
} else if (operacao === "*") {
    document.write("Resultado: " + (numero1 * numero2));
} else if (operacao === "/") {
    document.write("Resultado: " + (numero1 / numero2));
} else {
    document.write("Operação inválida");
}

//. Verificar maioridade

let idade = Number(prompt("Digite sua idade:"));

if (idade >= 18) {
    document.write("Maior de idade");
} else {
    document.write("Menor de idade");
}


//Calculadora de desconto

let valor = Number(prompt("Digite o valor da compra:"));

if (valor >= 100) {
    valor = valor * 0.9;
}

document.write("Valor final: R$ " + valor.toFixed(2));


//Média de 4 notas

let soma = 0;

for (let i = 1; i <= 4; i++) {

    let nota = Number(prompt("Digite a nota " + i + ":"));

    soma += nota;
}

let media = soma / 4;

document.write("Média final: " + media.toFixed(1));

if (media >= 6) {
    document.write("<br>Aprovado");
} else {
    document.write("<br>Reprovado");
}


//Contador de números pares

let pares = 0;

for (let i = 1; i <= 10; i++) {

    let numero = Number(prompt("Digite um número:"));

    if (numero % 2 === 0) {
        pares++;
    }
}

document.write("Quantidade de pares: " + pares);



//Login

let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

if (usuario === "admin" && senha === "1234") {
    document.write("Login realizado com sucesso");
} else {
    document.write("Usuário ou senha inválidos");
}


//Menu
let opcao = 0;

while (opcao !== 3) {

    opcao = Number(prompt(
        "MENU\n" +
        "1 - Olá Mundo\n" +
        "2 - Data Atual\n" +
        "3 - Sair"
    ));

    if (opcao === 1) {

        document.write("Olá Mundo<br>");

    } else if (opcao === 2) {

        document.write(new Date() + "<br>");

    } else if (opcao === 3) {

        document.write("Sistema encerrado");

    } else {

        document.write("Opção inválida<br>");
    }
}