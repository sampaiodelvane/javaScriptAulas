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


