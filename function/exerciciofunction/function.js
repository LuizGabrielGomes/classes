function ativar(){
    console.log("ola mundo");
}

ativar()

// Crie uma função que recebe a base e a altura de um triângulo e retorna a área.
// A base é 18 e a altura é 6. Portanto, metade de 18 é 9, e 9 vezes 6 é igual a 54 unidades quadradas.

function areaTriangulo1(){
   return 18 / 2 * 6;
}

function areaTriangulo2(){
    return 15 / 2 * 6;
}

function areaTriangulo3(){
    return 180 / 2 * 33;
}

const resultado1 = areaTriangulo1()
console.log(resultado1)

const resultado2 = areaTriangulo2()
console.log(resultado2)

const resultado3 = areaTriangulo3()
console.log(resultado3)

//versao melhorada
//essa versao melhorada e mais eficiente do que o codigo de cima, pois o codigo de cima estamos escrevendo 3 funcoes diferentes e na de baixo estamos reaproveitando a mesma funcao.#
//outra diferenca e que na funcao de baixo estamos passando os valores para a funcao utilizando argumentos/parametros o que torna a funcao "reutilizavel"



function areaTriangulo(base, altura){
    return (base * altura) / 2 ;
}
 
 
 const result2 = areaTriangulo(19, 2)
 console.log(result2)

 const result3 = areaTriangulo(15, 6)
 console.log(result3)

 const result4 = areaTriangulo(180, 33)
 console.log(result4)



// Crie uma função que recebe um valor em uma moeda e a taxa de câmbio, e retorna o valor convertido para outra moeda.

function cambio(moeda, cambio){
    return moeda * cambio

} 
const cambioReal = cambio(1, 5)
console.log( "TESTES"  )







//Licao de casa
// Escreva com suas palavras o que e uma funcao no JS
// Crie uma função que recebe a base e a altura de um triângulo e retorna a área.
// Crie uma função que recebe um valor em uma moeda e a taxa de câmbio, e retorna o valor convertido para outra moeda.
// Criar uma funcao que mostre "Ola, mundo!" no console.logeda


// funcao e um conjunto de instruções que executa uma tarefa ou calcula um valor


