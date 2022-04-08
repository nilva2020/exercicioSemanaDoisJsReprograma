/*Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.*/


// *** calculo matematico
//kmPercorrido = 4000
//qtDias = 30
//diaria = 60.00
//kmrodado = 0.15

let diaria = 60.00 
let kmrodado = 0.15
let qtDias = 30
let kmPercorrido = 4000
let valorDiarias = (diaria * kmrodado) + (kmPercorrido * kmrodado)
console.log(`O cliente deverá pagar pelo aluguel do carro: R$ ${valorDiarias.toFixed(2)}`)