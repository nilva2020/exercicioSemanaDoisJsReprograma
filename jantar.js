/* Crie um algoritmo que leia o valor de um jantar, calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.*/


/*** calculo matematico
valorJantar = 180
gorjeta = valorJantar * (10/100) // retorna 0.10
valorAPagar = valorJantar + gorjeta // retorna 198
console.log(valorAPagar) */

let valorJantar = 390.00
const gorjeta = valorJantar * (10/100)
const valorAPagar = valorJantar + gorjeta
console.log(`O cliente deverá pagar R$: ${valorAPagar.toFixed(2)}`)
