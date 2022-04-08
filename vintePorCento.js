/*Solicite o preço de uma mercadoria e o percentual de desconto 20%. Exiba no console o valor do desconto e o preço a pagar.*/

// *** calculo matematico
// valorMercadoria = 1.450,00
// percentual desconto = 20/100 retornou 0.20
//console.log(20/100)
// valorDesconto = 0.20 * 1450  retornou 290
//console.log(0.20 * 1450)
// precoAPagar = 1450 - 290 retornou 1160
//console.log(1450 - 290)

let valorMercadoria = 1450
let valorDesconto = (20/100) * valorMercadoria
let precoAPagar = valorMercadoria - valorDesconto
console.log(`Valor a pagar é  R$ ${precoAPagar}`)