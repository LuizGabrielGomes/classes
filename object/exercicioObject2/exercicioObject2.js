
// Exercicio
// - Criar um objeto com as seguintes propriedades e valores:
// 	- name: Gabriel
// 	- surname: Gomes
// 	- age: 18
// 	- birthdate: 16/08/1988
// 	- type: free
// - Acessar a propriedade name
// - Acessar a propriedade birthdate
// - Concatenar a propriedade name e surname adicionando o novo valor na variavel fullname
// - Modificar a propriedade type para "premium"




const object = {
    name: "luiz",
    surname: "gomes",
    Age: 22,
    birthdate: "12/07/2001",
    type: "free",
    parent: [
        "Erica",
        "Paulo"
    ],
    talk: function talk() {
        return "hi!"
    }
}


const name = object.name
const surname = object.surname

console.log(object.name);
console.log(object.surname);

console.log(name + " " + surname); 

console.log(object.parent[0])
console.log(object.talk());

const text2 = {
    name: "gabriel",
    length: 31,
}

const text = "gabriel"
const length = text.length

console.log(length);

console.log(text.toUpperCase());


// Criar um objeto com as seguintes propriedades:
// 	- nome
// 	- idade (21 anos)
// 	- pais (array com o nome do pai e da mãe)
// 	- propriedade "pensar" com uma função que retorne "pensei"
// Executar as seguintes operações
// - Acessar a propriedade idade e mostrar o resultado
// - Acessar a propriedade pais e mostrar o nome do pai
// - Acessar a propriedade "pensar" ativando a função interna

const object1 = {
    idade: 21,
    nome: "victaoOBrabo",
    pais: ["luiz", "andrea"],


    pensar: function pensar() {
    return "pensei"

}

}
console.log(object1)
console.log(object1.pensar());
console.log(object1.pais[0])
console.log(object1.idade)
console.log(object1.pensar)




// Criar um objeto "animal" com as seguintes propriedades:
// - nome 
// - sobrenome
// - idade
// - miar = uma funcao que escreve a palavra "miau"

// Apos isso, fazer:
// - Acessar o nome do animal e mostrar no console.log
// - Acessar o idade do e mostrar no console.log
// - Criar uma funcao chamada "descricao@ que mostra o nome, sobrenome e idade do animal.




const objetoAnimal = {

    nome: "gato",
    sobrenome: "yamashiro", 
    idade: 7,

    miar: function miar() {
        return "miau"
    },
}




function descricao() {
    return objetoAnimal.nome + " " + objetoAnimal.sobrenome + " " +  objetoAnimal.idade

} 

const descricao2 =  objetoAnimal.nome + " " + objetoAnimal.sobrenome + " " +  objetoAnimal.idade



console.log(objetoAnimal.nome)
console.log(objetoAnimal.idade) 
console.log(objetoAnimal.sobrenome)
console.log(objetoAnimal.miar())

console.log(descricao())
console.log(descricao2)
console.log(objetoAnimal.nome + " " + objetoAnimal.sobrenome + " " +  objetoAnimal.idade)












