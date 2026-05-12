 alert("Hello World!");
 console.log("Hello World!");
let x = prompt("Qual é o seu nome");
 confirm("Você tem certeza disso?");
alert(x);
 //Comentar: Ctrl + ; | // | /*   */

 //let nome = "Vinícius";
 console.log(nome);
 const pi = 3.1415;
 console.log(typeof nome);
alert(`Olá ${x}`);

//-------------------------------------------

alert("Bem vindo a esse site!");
let nome = prompt("Digite seu nome");
let idade = prompt("Digite sua idade");
let prof = prompt("Digite sua profissão");
alert(`Olá ${nome}, você tem ${idade} anos e trabalha como ${prof}`)

//-------------------------------------------

// Exercício 1
let metros = prompt("Digite o valor para ser convertido: ");

cm = metros * 100;

alert(`${metros} metros são ${cm} centímetros`);

// Exercício 2
let peso = parseFloat(prompt("Digite seu peso"));
let altura = parseFloat(prompt("Digite sua altura"));

imc = peso / (altura * altura);

alert(`Seu IMC é igual a ${imc.toFixed(2)}`);
if (imc < 18.5) {
    alert("Você está abaixo do peso normal");
}
else if (18.5 <= imc && imc < 24.9){
    alert("Você está no peso ideal")
}
else if (24.9 <= imc && imc < 29.9){
    alert("Você está levemente acima do peso")
}
else if (29.9 <= imc && imc < 34.9){
    alert("Você tem obesidade grau I")
}
else if (34.9 <= imc && imc < 39.9){
    alert("Você tem obesidade grau II (severa)")
}
else if (imc >= 39.9){
    alert("Você tem obesidade grau III (mórbida)")
}

//------------------------------------------------------


let nome = String(prompt("Digite um nome"));
let num = parseFloat(prompt("Digite um número"))

if (nome.length <= 2){
    alert("Digite um nome válido");
}

alert(nome.length);
console.log(nome.length);
console.log(nome.trim().includes("a"));
console.log(nome);
console.log(nome.trim());

console.log(nome.replace("a", "o"));
console.log(nome.replaceAll("a", "o"));

console.log(num.toFixed(2))
console.log(Math.floor(Math.random() * 11))


//-----------------------------------------------


function saudacao(nome='Visitante', idade = 20) {
    return `Olá, ${nome}, ${idade}`
}

const frase = saudacao("Caio")

saudacao("Vinícius")
saudacao("Felipe")
saudacao("Fabio")
saudacao()


//-----------------------------------------

// let i1 = 0;

function aumentarNumero(num) {
    while (num <= 10){
        console.log(num);
        num++;
    }
}

aumentarNumero(i1)

let i;
do {
    i = Number(prompt("Digite um número"))
} while (isNaN(i))

for (let i = 0; i <= 10; i++){
    console.log(i)
}

// Exercício 1
let n1 = Number(prompt("Digite um número"));

function diminuirNumero (i) {
    while (i >= 0){
        console.log(i);
        i--;
    }
}

diminuirNumero(n1)

// Exercício 2
let nome;
let idade;
let sal;
let gen;
let estciv;

do {
    nome = prompt("Digite seu nome");
} while (nome.length <= 3);

do {
    idade = Number(prompt("Digite sua idade"));
} while (idade < 0 || idade > 150);

do {
    sal = parseFloat(prompt("Digite seu salário"));
} while (sal < 0);

do {
    gen = prompt("Digite seu gênero");
} while (gen !== 'f' && gen !== 'm');

do {
    estciv = prompt("Digite seu estado civil");
} while (estciv !== 's' && estciv !== 'c' && estciv !== 'v' && estciv !== 'd');

// Exercício 3
let n = Number(prompt("Digite um número"));

for (i = 0; i <= 10; i++){
    console.log(`${n} X ${i} = ${n * i}`)
}

// Exercício 4
let car = '*'

for (i = 0; i = 10; i++){
    console.log(car)
    car = car + '*'
}

//-----------------------------------------

//Exercíco 1
let nome = prompt("Digite um texto")

function limpeza (texto){ 
    
    texto = texto.trim().toUpperCase()
    return texto
}

console.log(limpeza(nome))

//Exercício 2
let nome = prompt("Digite um texto")

function formatacao (texto) {
    texto = texto.toLowerCase()

    if (texto.includes('a')){
        texto = texto.replaceAll('a', 'o')
        return texto
    } 
    
    return texto
}

console.log(formatacao(nome))



/*// //================================================================================
// //================================================================================


// //📚 AULA 02 E 03
// //📌 A) Cálculo do IMC

// // === ENTRADA ===
// let peso = Number(prompt("Digite seu peso em kg:"));
// let altura = Number(prompt("Digite sua altura em metros:"));

// // === PROCESSAMENTO ===
// let imc = peso / (altura * altura);

// // === SAÍDA ===
// alert(`Seu IMC é: ${imc.toFixed(2)}`);

// //Obs: o toFixed(2) é usado para limitar o número de casas decimais a 2,
// //tornando a saída mais legível.

// //Explicação:
// //- let peso = Number(prompt(...)) → pede o peso e converte de texto para número
// //- let altura = Number(prompt(...)) → pede a altura e converte para número
// //- let imc = peso / (altura * altura) → calcula o IMC (peso dividido pela altura ao quadrado)
// //- alert() → exibe o resultado na tela
// //- toFixed(2) → limita o resultado a 2 casas decimais



// //================================================================================
// //================================================================================

// //📚 AULA 02 E 03
// //📌 B) Calculadora com validações completas

// // === ENTRADA ===
// let n1 = prompt("Digite o primeiro número");
// let n2 = prompt("Digite o segundo número");
// let op = prompt("Operação: +, -, * ou /");

// // === VALIDAÇÃO DE CANCELAMENTO ===
// if (n1 === null || n2 === null || op === null) {
//   alert("Operação cancelada pelo usuário.");
// }
// // === VALIDAÇÃO DE CAMPOS VAZIOS ===
// else if (n1 === "" || n2 === "" || op === "") {
//   alert("Preencha todos os campos!");
// }
// // === VALIDAÇÃO DE TIPO ===
// else if (isNaN(n1) || isNaN(n2)) {
//   alert("Digite apenas números!");
// }
// // === VALIDAÇÃO DA OPERAÇÃO ===
// else if (op !== "+" && op !== "-" && op !== "*" && op !== "/") {
//   alert("Operação inválida! Use +, -, * ou /");
// }
// // === PROCESSAMENTO E SAÍDA ===
// else {
//   n1 = Number(n1);
//   n2 = Number(n2);
//   let resultado;

//   if (op === "+") {
//     resultado = n1 + n2;
//   } else if (op === "-") {
//     resultado = n1 - n2;
//   } else if (op === "*") {
//     resultado = n1 * n2;
//   } else if (op === "/") {
//     if (n2 === 0) {
//       alert("Não é possível dividir por zero!");
//     } else {
//       resultado = n1 / n2;
//     }
//   }

//   if (resultado !== undefined) {
//     alert("Resultado: " + resultado);
//   }
// }

// //Explicação:
// //- prompt() coleta os dados como texto
// //- null → usuário clicou em "Cancelar"
// //- === "" → campo vazio
// //- isNaN() → verifica se não é número (NaN = Not a Number)
// //- op !== "+" && op !== "-" → verifica se operação é válida
// //- Number() converte texto para número
// //- resultado !== undefined → só mostra se houve resultado
// //- Divisão por zero tem validação específica

// //================================================================================
// //================================================================================


// //📚 AULA 02 E 03
// //📌 C) Conversão metros para centímetros

// // === ENTRADA ===
// let metros = Number(prompt("Digite a distância em metros:"));

// // === PROCESSAMENTO ===
// let centimetros = metros * 100;

// // === SAÍDA ===
// alert(`${metros}m equivale a ${centimetros}cm`);

// //Explicação:
// //- metros = Number(prompt(...)) → pede valor em metros e converte para número
// //- centimetros = metros * 100 → cada metro tem 100 centímetros
// //- alert() → exibe o resultado formatado

// //================================================================================
// //================================================================================


// //📚 AULA 02 E 03
// //📌 D) Cálculo de preço por peso

// // === ENTRADA ===
// let peso = Number(prompt("Digite o peso do produto em gramas:"));

// // === PROCESSAMENTO ===
// let preco = (peso / 100) * 5;

// // === SAÍDA ===
// alert(`O preço do produto é: R$${preco.toFixed(2)}`);

// //Explicação:
// //- peso = Number(prompt(...)) → pede peso em gramas e converte para número
// //- (peso / 100) * 5 → regra: a cada 100g custa R$5
// //- toFixed(2) → formata para 2 casas decimais (reais)



// //================================================================================
// //================================================================================



// //📚 AULA 02 E 03
// //📌 E) Erro de tipagem e correção

// /* 
//     1. Código somar com erro de tipagem
// */

// // let numero1 = prompt("Digite o primeiro número")
// // let numero2 = prompt("Digite o segundo número")

// // let resultado = numero1 + numero2

// // alert(O resultado da soma é: ${resultado})

// /*
//     2. Código corrigido para somar corretamente
// */
// let numero1 = parseFloat(prompt("Digite o primeiro número"))
// let numero2 = parseFloat(prompt("Digite o segundo número"))
// let operacao = prompt("Digite a operação desejada (+, -, *, /):")

// if(operacao === "+") {
//     let resultado = numero1 + numero2
//     alert(O resultado da soma é: ${resultado})
// }
// else if(operacao === "-") {
//     let resultado = numero1 - numero2
//     alert(O resultado da subtração é: ${resultado})
// }
// else if(operacao === "*") {
//     let resultado = numero1 * numero2
//     alert(O resultado da multiplicação é: ${resultado})
// }
// else if(operacao === "/") {
//     if(numero2 !== 0) {
//         let resultado = numero1 / numero2
//         alert(O resultado da divisão é: ${resultado})
//     } else {
//         alert("Erro: Divisão por zero não é permitida.")
//     }
// }
// else{
//     alert("Operação inválida. Por favor, escolha entre +, -, *, /.")
// }

// //Explicação:
// //- ERRO: prompt() retorna texto, então "5" + "3" = "53" (concatenação)
// //- CORREÇÃO: parseFloat() converte texto para número
// //- 5 + 3 = 8 (soma correta)
// //- !== 0 → verifica se NÃO é zero (evita divisão por zero)




// //================================================================================
// //================================================================================





// //📚 AULA 04
// //📌 A) Jogo de palpite com função

// function verificarPalpite(palpite) {
//     const numeroAleatorio = Math.floor(Math.random() * 10) + 1
    
//     if (isNaN(palpite)) {
//         return "Digite um número válido!"
//     }

//     if (palpite === numeroAleatorio) {
//         return "Acertou! O número era " + numeroAleatorio
//     }

//     return "Errou! O número era " + numeroAleatorio + " e você chutou " + palpite
// }

// const tentativa = Number(prompt("Chute um número de 1 a 10:"))
// alert(verificarPalpite(tentativa))

// //Explicação:
// //- function verificarPalpite(palpite) → declara função que recebe um palpite
// //- Math.random() → gera número entre 0 e 0.999...
// //- Math.floor() → arredonda para baixo
// //- * 10 + 1 → ajusta para faixa de 1 a 10
// //- isNaN(palpite) → valida se é número
// //- palpite === numeroAleatorio → compara com o número secreto
// //- return → devolve o resultado (a função sempre retorna algo)



// //================================================================================
// //================================================================================


// //📚 AULA 04
// //📌 B) Função tradicional vs Arrow function

// // Função tradicional
// function soma(a, b) {
//     return a + b
// }

// // Mesma função como arrow function
// const soma = (a, b) => {
//     return a + b
// }

// // Versão curta (uma linha com return implícito)
// const soma = (a, b) => a + b

// //Explicação:
// //- Função tradicional: function nome(parametros) { corpo }
// //- Arrow function: (parametros) => { corpo }
// //- Versão curta: sem {} e sem return, o resultado é implícito
// //- As três fazem a MESMA coisa: somam dois números



// //================================================================================
// //================================================================================



// //📚 AULA 04
// //📌 C) Gerador de número aleatório com arrow function

// const gerarNumeroAleatorio = () => Math.floor(Math.random() * 100)

// console.log(gerarNumeroAleatorio()) // número aleatório entre 0 e 99

// //Explicação:
// //- () => → função sem parâmetros
// //- Math.random() * 100 → número entre 0 e 99.999...
// //- Math.floor() → arredonda para baixo (inteiro entre 0 e 99)



// //================================================================================
// //================================================================================




// //📚 AULA 04
// //📌 D) Arrow function com um parâmetro (parênteses opcional)

// // Com parênteses (sempre funciona)
// const dobro = (n) => n * 2;

// // === ENTRADA ===
// let numero = Number(prompt("Digite um número:"));

// // === SAÍDA ===
// alert(`O dobro de ${numero} é ${dobro(numero)}`);

// //Explicação:
// //- const dobro = (n) => n * 2 → arrow function que retorna o dobro
// //- prompt() → coleta o número digitado pelo usuário
// //- Number() → converte texto para número
// //- dobro(numero) → executa a função passando o número digitado
// //- alert() → exibe o resultado na tela



// //================================================================================
// //================================================================================



// //📚 AULA 04
// //📌 E) Funções especializadas (separação de responsabilidades)

// // Coleta
// const coletarNome = () => {
//     return prompt("Qual seu nome?")
// }

// const coletarIdade = () => {
//     return Number(prompt("Qual sua idade?"))
// }

// // Lógica — monta a mensagem
// const montarMensagem = (nome, idade) => {
//     return "Olá, " + nome + "! Você tem " + idade + " anos."
// }

// // Exibição — só exibe
// const exibirMensagem = (mensagem) => {
//     alert(mensagem)
// }

// // Orquestradora
// const iniciar = () => {
//     const nome = coletarNome()
//     const idade = coletarIdade()
//     const mensagem = montarMensagem(nome, idade)
//     exibirMensagem(mensagem)
// }

// iniciar()

// //Explicação:
// //- Cada função faz UMA coisa específica (coletar, processar, exibir)
// //- iniciar() → orquestra (chama as funções na ordem certa)
// //- Separar responsabilidades facilita manutenção e entendimento
// //- Vantagem: se precisar mudar algo, muda só uma função



// //================================================================================
// //================================================================================


// //📚 AULA 04
// //📌 F) Função simples de soma

// function soma(num1, num2) {
//     return num1 + num2;
// }

// // === ENTRADA ===
// let numero1 = Number(prompt("Digite o primeiro número:"));
// let numero2 = Number(prompt("Digite o segundo número:"));

// // === PROCESSAMENTO ===
// let resultado = soma(numero1, numero2);

// // === SAÍDA ===
// alert(`A soma de ${numero1} + ${numero2} é ${resultado}`);

// //Explicação:
// //- function soma(num1, num2) → declara função com dois parâmetros
// //- return num1 + num2 → devolve a soma
// //- prompt() → coleta os números digitados pelo usuário
// //- Number() → converte texto para número
// //- soma(numero1, numero2) → chama a função passando os valores
// //- alert() → exibe o resultado na tela


// //================================================================================
// //================================================================================



// //📚 AULA 04
// //📌 G) Função com parâmetro padrão (default)

// function saudacao(nome, periodo = "dia") {
//     return "Bom " + periodo + ", " + nome + "!"
// }

// console.log(saudacao("Ana"))          // "Bom dia, Ana!"
// console.log(saudacao("Ana", "noite")) // "Bom noite, Ana!"

// //Explicação:
// //- periodo = "dia" → valor padrão se o segundo argumento não for passado
// //- saudacao("Ana") → usa "dia" como padrão
// //- saudacao("Ana", "noite") → "noite" substitui o padrão



// //================================================================================
// //================================================================================


// //📚 AULA 04
// //📌 H) Manipulação de strings (substituir letras)

// // Função tradicional
// function substituirLetra(texto) {

//     const textoMinusculo = texto.toLowerCase();

//     if (textoMinusculo.includes("a")) {

//         const textoSubstituido = textoMinusculo.replaceAll("a", "o");

//         return textoSubstituido;
//     }

//     return texto;
// }

// // === ENTRADA ===
// let textoUsuario = prompt("Digite uma palavra ou frase:");

// // === PROCESSAMENTO ===
// let resultado = substituirLetra(textoUsuario);

// // === SAÍDA ===
// alert(`Resultado: ${resultado}`);

// // Exemplos no console
// console.log(substituirLetra("Banana"));   // bonono
// console.log(substituirLetra("ABACATE"));  // obocote
// console.log(substituirLetra("Pedro"));    // Pedro


// //📌 Versão Arrow Function

// const substituirLetraArrow = (texto) => {

//     const textoMinusculo = texto.toLowerCase();

//     if (textoMinusculo.includes("a")) {

//         return textoMinusculo.replaceAll("a", "o");
//     }

//     return texto;
// }

// // Exemplo da arrow function
// console.log(substituirLetraArrow("Banana"));
// console.log(substituirLetraArrow("ABACATE"));
// console.log(substituirLetraArrow("Pedro"));

// //Explicação:
// //- toLowerCase() → converte tudo para minúsculo
// //- includes("a") → verifica se existe a letra "a"
// //- replaceAll("a", "o") → substitui todas as letras "a" por "o"
// //- return → devolve o texto alterado
// //- Arrow function → versão moderna e reduzida da função tradicional
// //- Não podemos declarar duas funções/const com o mesmo nome



// //================================================================================
// //================================================================================


// //📚 AULA 04
// //📌 I) Limpeza e formatação de strings

// // Função tradicional
// function limparEFormatar(texto) {

//     const textoLimpo = texto.trim();

//     const textoMaiusculo = textoLimpo.toUpperCase();

//     return textoMaiusculo;
// }

// // === ENTRADA ===
// let textoUsuario = prompt("Digite uma palavra ou frase:");

// // === PROCESSAMENTO ===
// let resultado = limparEFormatar(textoUsuario);

// // === SAÍDA ===
// alert(`Texto formatado: ${resultado}`);

// // Exemplos no console
// console.log(limparEFormatar("  olá mundo  ")); // OLÁ MUNDO
// console.log(limparEFormatar(" fiap "));        // FIAP


// //📌 Versão Arrow Function

// const limparEFormatarArrow = (texto) => {
//     return texto.trim().toUpperCase();
// }

// // Exemplos da arrow function
// console.log(limparEFormatarArrow("  olá mundo  "));
// console.log(limparEFormatarArrow(" fiap "));

// //Explicação:
// //- trim() → remove espaços no início e fim da string
// //- toUpperCase() → converte tudo para maiúsculo
// //- .trim().toUpperCase() → executa métodos em sequência
// //- return → devolve o texto formatado
// //- Arrow function → versão moderna da função tradicional
// //- Não podemos declarar duas funções/const com o mesmo nome



// // Código completo simples
// function limparEFormatar(texto) {

//     const textoLimpo = texto.trim();

//     const textoMaiusculo = textoLimpo.toUpperCase();

//     return textoMaiusculo;
// }

// let textoUsuario = prompt("Digite um texto:");

// let resultado = limparEFormatar(textoUsuario);

// alert(resultado);


// //================================================================================
// //================================================================================



// //📚 AULA 04
// //📌 J) Armazenando resultado de função em variável

// function saudacao(nome) {
//     return "Olá, " + nome + "!"
// }

// const mensagem = saudacao("murilo")
// console.log(mensagem) // "Olá, Maria!"

// // Chamando direto no console.log
// console.log(saudacao("Carlos")) // "Olá, Carlos!"

// //Explicação:
// //- const mensagem = saudacao("Maria") → guarda o RETURN da função na variável
// //- Depois pode usar a variável várias vezes
// //- Ou chamar a função diretamente dentro do console.log()



// //================================================================================
// //================================================================================



// //📚 AULA 05
// //📌 A) Contagem regressiva com while

// function contagemRegressiva(numero) {
//     while (numero >= 1) {
//         console.log(numero)
//         numero--
//     }
// }

// const numero = Number(prompt("Digite um número:"))
// contagemRegressiva(numero)

// //Explicação:
// //- while (numero >= 1) → repete ENQUANTO número for maior ou igual a 1
// //- console.log(numero) → mostra o número atual
// //- numero-- → diminui 1 a cada repetição (senão vira loop infinito)
// //- Quando numero chegar a 0, a condição fica falsa e o loop para



// //================================================================================
// //================================================================================



// //📚 AULA 05
// //📌 B) Contagem regressiva com múltiplas validações

// // Coleta o número do usuário
// const numero = Number(prompt("Digite um número inteiro positivo:"))

// // Valida se é um número
// if (isNaN(numero)) {
//     alert("Isso não é um número!")

// // Valida se é positivo
// } else if (numero <= 0) {
//     alert("O número deve ser positivo!")

// // Valida se é inteiro
// } else if (numero !== Math.floor(numero)) {
//     alert("O número deve ser inteiro!")

// // Se passou em todas as validações, executa a contagem
// } else {
//     let i = numero
//     while (i >= 1) {
//         console.log(i)
//         i--
//     }
//     alert("Contagem finalizada!")
// }

// //Explicação:
// //- isNaN(numero) → verifica se NÃO é número
// //- numero <= 0 → verifica se é positivo
// //- numero !== Math.floor(numero) → verifica se é inteiro (se é igual a ele mesmo arredondado)
// //- Só executa a contagem se passar em TODAS as validações



// //================================================================================
// //================================================================================



// //📚 AULA 05
// //📌 C) Jogo de adivinhação com do/while

// const numeroSecreto = Math.floor(Math.random() * 10) + 1
// let tentativas = 0
// let palpite

// do {
//     palpite = Number(prompt("Chute um número de 1 a 10:"))
//     tentativas++

//     if (isNaN(palpite) || palpite < 1 || palpite > 10) {
//         alert("Digite um número válido entre 1 e 10!")
//     } else if (palpite < numeroSecreto) {
//         alert("Muito baixo! Tente um número maior.")
//     } else if (palpite > numeroSecreto) {
//         alert("Muito alto! Tente um número menor.")
//     }

// } while (palpite !== numeroSecreto)

// // LINHA CORRIGIDA 👇
// alert(`Parabéns! Você acertou em ${tentativas} tentativas! O número era ${numeroSecreto}`)

// //Explicação:
// //- do { } while (condição) → executa o código PRIMEIRO, DEPOIS testa
// //- Garante que o usuário chute pelo menos uma vez
// //- tentativas++ → conta quantas tentativas foram feitas
// //- palpite !== numeroSecreto → repete ENQUANTO o palpite for DIFERENTE do número secreto
// //- Quando acerta, a condição fica falsa e o loop termina



// //================================================================================
// //================================================================================



// //📚 AULA 05
// //📌 D) Encontrar divisores de um número com for

// const numero = Number(prompt("Digite um número:"))

// if (isNaN(numero) || numero <= 0) {
//     alert("Digite um número válido maior que zero!")
// } else {
//     let divisores = ""

//     for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             divisores = divisores + `${i}\n`  // ✅ CORRIGIDO
//         }
//     }

//     alert(`Divisores de ${numero}:\n\n${divisores}`)  // ✅ CORRIGIDO
// }
// //Explicação:
// // - for (let i = 1; i <= numero; i++) → i vai de 1 até o número
// // - numero % i === 0 → resto da divisão é zero? Se sim, é divisor
// // - divisores = divisores + ${i}\n → vai acumulando os divisores com quebra de linha
// // - No final, mostra todos os divisores encontrados



// //================================================================================
// //================================================================================



// // 📚 AULA 05
// // 📌 E) Tabuada com for

// const numero = Number(prompt("Digite um número para ver a tabuada:"))

// if (isNaN(numero)) {
//     alert("Digite um número válido!")
// } else {
//     let tabuada = `Tabuada do ${numero}\n\n`

//     for (let i = 1; i <= 10; i++) {
//         tabuada = tabuada + `${numero} x ${i} = ${numero * i}\n`
//     }

//     alert(tabuada)
// }

// // Explicação:
// // - for (let i = 1; i <= 10; i++) → i vai de 1 até 10
// // - tabuada = tabuada + ... → vai construindo a string linha por linha
// // - numero * i → calcula o resultado da multiplicação
// // - No final, exibe a tabuada completa




// //================================================================================
// //================================================================================


// //📚 AULA 05
// //📌 F) Cadastro com validação de múltiplos campos usando do/while
// let nome

// do {
//     nome = prompt("Digite seu nome:")

//     if (!nome || nome.length <= 3) {
//         alert("O nome deve ter mais de 3 caracteres!")
//     }
// } while (!nome || nome.length <= 3)

// let idade

// do {
//     idade = Number(prompt("Digite sua idade:"))

//     if (isNaN(idade) || idade < 0 || idade > 150) {
//         alert("A idade deve ser um número entre 0 e 150!")
//     }
// } while (isNaN(idade) || idade < 0 || idade > 150)

// let salario

// do {
//     salario = Number(prompt("Digite seu salário:"))

//     if (isNaN(salario) || salario <= 0) {
//         alert("O salário deve ser um número maior que zero!")
//     }
// } while (isNaN(salario) || salario <= 0)

// let genero

// do {
//     genero = prompt("Digite seu gênero (f ou m):").toLowerCase()

//     if (genero !== "f" && genero !== "m") {
//         alert("Digite apenas 'f' ou 'm'!")
//     }
// } while (genero !== "f" && genero !== "m")

// let estadoCivil

// do {
//     estadoCivil = prompt("Digite seu estado civil (s, c, v ou d):").toLowerCase()

//     if (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d") {
//         alert("Digite apenas 's', 'c', 'v' ou 'd'!")
//     }
// } while (estadoCivil !== "s" && estadoCivil !== "c" && estadoCivil !== "v" && estadoCivil !== "d")

// // CORREÇÃO AQUI 👇
// alert(`Cadastro realizado!\n\n
// Nome: ${nome}\n
// Idade: ${idade}\n
// Salário: R$ ${salario.toFixed(2)}\n
// Gênero: ${genero === "f" ? "Feminino" : "Masculino"}\n
// Estado Civil: ${estadoCivil === "s" ? "Solteiro" : estadoCivil === "c" ? "Casado" : estadoCivil === "v" ? "Viúvo" : "Divorciado"}`)



// // //Explicação:
// // //- Cada campo tem seu próprio do/while para validar até estar correto
// // //- !nome → verifica se o campo está vazio (null ou string vazia)
// // //- nome.length <= 3 → verifica tamanho mínimo
// // //- genero !== "f" && genero !== "m" → só aceita f ou m
// // //- Só passa para o próximo campo quando o atual estiver válido
// // //- toLowerCase() → converte para minúsculo para facilitar comparação
// // //- ${genero === "f" ? "Feminino" : "Masculino"} → operador ternário (if de uma linha)
// // //- Ao final, exibe todos os dados cadastrados



// //================================================================================
// //==============================================================================


// // par
// const numero = Number(prompt("Digite um número:"))

// if (isNaN(numero) || numero <= 0) {
//     alert("Digite um número válido maior que zero!")
// } else {
//     let pares = `Números pares de 1 até ${numero}:\n\n`
    
//     for (let i = 2; i <= numero; i += 2) {
//         pares = pares + `${i}\n`
//     }
    
//     alert(pares)
// }





// // impar
// const numero = Number(prompt("Digite um número:"))

// if (isNaN(numero) || numero <= 0) {
//     alert("Digite um número válido maior que zero!")
// } else {
//     let impares = `Números ímpares de 1 até ${numero}:\n\n`
    
//     for (let i = 1; i <= numero; i += 2) {
//         impares = impares + `${i}\n`
//     }
    
//     alert(impares)
// }