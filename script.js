const prompt = require("prompt-sync")();

let peso = prompt("Me diga o seu peso: ");
let altura = prompt("Qual a sua altura?: ");
let alturaCalc = altura/100;

function calculoIMC() {
    imc = peso / (alturaCalc * alturaCalc);
    console.log(imc);
}

calculoIMC()

if (imc<18.5) {
    console.log("Você está com Baixo Peso.");
} else if (imc>=18.5 && imc <= 24.99) {
    console.log("Seu peso está normal!");
} else if (imc>=25 && imc <= 29.99) {
    console.log("Você está com sobrepeso");
} else {
    console.log("Você está com obesidade!");
}

// Esse é um cálculo de IMC com JS puro!