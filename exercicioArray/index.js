
const cambio = (euro, real) => {
    return euro * real
}

const result = cambio(2, 5.48)
console.log("cambio = ", result);

////////////////////----//////////////////////

const imcfunction = (peso, altura1, altura2) => {
   
    return peso / (altura1 * altura2)
}

const imc = imcfunction(60, 1.75, 1.75)
console.log ("result =", imc)

////////////////////----//////////////////////
// frases.map((frase, index) => console.log(index + " - " + frase)) 

const money = [1, 2, 3, 4, 5]
console.log(money)

money.map((item) => console.log(item * 2)) 


 const money2 = [5.48, 5.13, 5.62, 6.38]

 money2.map((money2) => console.log(money2 * 3.5))



 
// - Crie um array com 3 categorias: free, premium e plus e execute os seguintes procedimentos, na ordem a seguir:
// 	- Acesse o elemento de índice/posição 0.
// 	- Acesse o elemento de índice/posição 2.

const categorias = ["free", "premium", "plus"];

const primeiro = categorias[0]
const segundo = categorias[2]

console.log(primeiro)
console.log(segundo)