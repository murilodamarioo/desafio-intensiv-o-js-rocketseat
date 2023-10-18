// Ex - 01
alert("Hello World");

// Ex - 02
let num1 = parseInt(prompt("Digite o primeiro número"));
let num2 = parseInt(prompt("Digite o segundo número"));

const sum = num1 + num2;

alert(`Soma = ${sum}`);

// Ex - 03
let data1 = 4;

if (typeof data1 === "number") {
    alert("Não é um número");
} else if (typeof data1 !== "number") {
    alert("É um número");
}

// Ex - 04
let data2 = "f";

if (typeof data2 === "string") {
    alert("É uma string");
} else if (typeof data2 !== "string") {
    alert("Não é uma string");
}

// Ex - 05
let data3 = true;

if (typeof data3 === "boolean") {
    alert("É um booleano");
} else if (typeof data3 !== "boolean") {
    alert("Não é um booleano");
}

// Ex - 06
num1 = parseInt(prompt("Digite o primeiro número"));
num2 = parseInt(prompt("Digite o segundo número"));

const subtraction = num1 - num2;

alert(`Subtração = ${subtraction}`);

// Ex - 07
num1 = parseInt(prompt("Digite o primeiro número"));
num2 = parseInt(prompt("Digite o segundo número"));

const multiplication = num1 * num2;

alert(`Multiplicação = ${multiplication}`);

// Ex - 08
num1 = parseFloat(prompt("Digite o primeiro número"));
num2 = parseFloat(prompt("Digite o segundo número"));

const division = num1 / num2;

alert(`Divisão = ${division.toFixed(2)}`);


// Ex - 09
let num = prompt("Digite um número");

if (num % 2 == 0) {
    alert("É um número par");
} else {
    alert("É número ímpar");
}

// Ex - 10
num = prompt("Digite um número");

if (num % 2 != 0) {
    alert("É número ímpar");
} else {
    alert("É um número par");
}