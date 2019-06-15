//     let pesq = prompt("Digita um filme ae");

// let filmes = [
//     {titulo: "Avengers", diretor: "Russo", genero: "Aventura",},
//     {titulo: "Batman", diretor: "Christopher Nolan", genero: "Aventura"},
//     {titulo: "A origem", diretor: "Christopher Nolan", genero: "Ficção cientifica"},
//     {titulo: "Alien-Warfare", diretor: "Fulano", genero: "Suspense"},
//     {titulo: "Como treinar o seu Dragão", diretor: "Ciclano", genero: "Animação"},
//     {titulo: "Amigos para sempre", diretor: "Não sei", genero: "Friends"},
// ];

// for(let i in filmes){
//     if(pesq == filmes[i].titulo){
//     console.log(filmes[i].titulo);
// }
// }
// }

const botao = document.querySelector("button");
const entrada = document.querySelector("input");

const list = [
        {titulo: "Avengers", diretor: "Russo", genero: "Aventura",},
        {titulo: "Batman", diretor: "Christopher Nolan", genero: "Aventura"},
        {titulo: "A origem", diretor: "Christopher Nolan", genero: "Ficção cientifica"},
        {titulo: "Alien-Warfare", diretor: "Fulano", genero: "Suspense"},
        {titulo: "Como treinar o seu Dragão", diretor: "Ciclano", genero: "Animação"},
        {titulo: "Amigos para sempre", diretor: "Não sei", genero: "Friends"},
]

function pesquisar(){
    for(let i in filmes){
        if(pesq == filmes[i].titulo){
        (filmes[i].titulo); 
}

botao.onclick = pesquisar();