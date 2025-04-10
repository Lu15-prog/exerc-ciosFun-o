// 1. O que aparece no console quando o seguinte código é executado?

// function dizerOla() {
//     console.log("Olá, mundo!");
//   }
  
//   dizerOla();
// RESPOSTA: o que aparece no console é a frase que está dentro do comando: "Olá, mundo!".  



// 2. Qual a diferença entre declarar uma função e chamá-la? Dê um exemplo de cada.

// RESPOSTA: para declarar uma função escrevemos sua estrutura inteira, definindo 
// se ela precisa de parâmetros ou não, e o que ela faz. Exemplo:
// function mensagem() {
//     console.log("Olá, mundo!");
// }

// já para chamar a função, apenas colocamos o nome 
// e inserimos os argumentos, se for preciso. Exemplo:
// mensagem(); ou mensagem(nome);


// 3. O que essa função faz? Ela tem retorno?

// function mostrarNome(nome) {
//   console.log("Seu nome é: " + nome);
// }

// RESPOSTA: essa função não tem retorno, ela apenas executa o código que está dentro dela
// ou seja, mostrará a mensagem "Seu nome é: " e exibir o nome, porém nesse caso,
// o nome ficará indefinido, caso o argumento não seja passado no momento da chamada da função.



// 4. Reescreva a função abaixo para que ela retorne a soma em vez de apenas exibir no console.
// function somar(a, b) {
//   console.log(a + b);
// }

// // RESPOSTA:
// function somar(a, b) {
//     return (a + b);
//   }

// console.log(somar(1, 2));


// 5. Qual o valor da variável resultado após executar esse código?
// function dobro(numero) {
//     return numero * 2;
//   }
  
//   let resultado = dobro(5);

// // RESPOSTA: o valor será 10.


// 6. Crie uma função chamada mostrarMensagem que não recebe argumentos e apenas exibe "Bem-vindo!" no console.
// RESPOSTA:
// function mostrarMensagem() {
//     console.log("Bem-vindo!");
// }

// mostrarMensagem();


// 7. Crie uma função chamada multiplicar que receba dois números como argumentos e retorne o resultado da multiplicação.
// RESPOSTA:
// function multiplicar(num1, num2) {
//     return num1 * num2;
// }

// console.log(multiplicar(3, 2));


// 8. O que acontece se chamarmos uma função antes de declará-la? Teste e explique o seguinte código:

// dizerOi();

// function dizerOi() {
//   console.log("Oi!");
// }
// RESPOSTA: o código funcionou normalmente, pois quando quando a função é chamada, executa o comando que está nela.



// 9. A função abaixo está com problema. Ela deveria retornar o valor 10, mas não retorna nada. Corrija-a:
// function calcularSoma(x, y) {
//     x + y;
//   }

// RESPOSTA:
// function calcularSoma(x, y) {
//   return x + y;
// }
// console.log(calcularSoma(6,4));



// 10. Complete o código abaixo para que a função cumprimentar receba um nome e retorne a frase "Olá, [nome]!".

// function cumprimentar(______) {
//   return "Olá, " + ______ + "!";
// }

// // RESPOSTA:

// function cumprimentar(nome) {
//     return "Olá, " + nome + "!";
//   }

// console.log(cumprimentar("Luana"));