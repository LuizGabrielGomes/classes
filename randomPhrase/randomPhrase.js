// Gerador de frase aleatoria

// Ao apertar o botao deve substituir o paragrafor por uma frase

const frases = [
    "A verdadeira vitória é a vitória sobre si mesmo.",
    "O caminho do guerreiro é a morte. Isso significa escolher a morte sempre que há uma escolha entre a morte e a desonra. Significa nada mais do que isso. Significa seguir o caminho do samurai.",
    "Se você não pode entender meu silêncio, como pode entender minhas palavras?",
    "O guerreiro de sucesso é aquele que consegue se adaptar às mudanças.",
    "O guerreiro não tem medo de ser honesto.",
    "O guerreiro deve sempre estar preparado para a morte - seja em batalha ou em paz.",
    "O caminho do valente não segue os passos da estupidez - Código Samurai",
    "Não sei nada sobre como superar os outros. Só conheço a maneira de superar a mim mesmo - Código Samurai",
    "O samurai nasce para morrer. A morte não é uma maldição a evitar, senão o fim natural de toda vida - Código Samurai",
    "Derrote seu inimigo, mas o deixe ir pensando que venceu. A verdadeira vitória é livre do próprio ego."
];

console.log(frases);

const button = document.querySelector('.gerarDica');

button.addEventListener('click', function() {
    console.log("entrou");
    
    function gerarNumeroAleatorio() {
        return Math.floor(Math.random() * 9) + 1;
    }
    
    console.log(Math.floor(Math.random()* 10));

    const num = gerarNumeroAleatorio()

    document.getElementById("paragrafo").innerHTML = frases[num];
});

// Fazer funcao para pegar uma frase aleatoriamente




