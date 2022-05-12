// Array base: 
const personagens = [
    {nome: "Irmão do Jorel", idade: 8, raca: "humano"}, 
    {nome: "Jorel", idade: 16, raca: "humano"}, 
    {nome: "Nico", idade: 12, raca: "humano"}, 
    {nome: "Lara", idade: 8, raca: "humano", falar: function () { console.log("Você chama alguém de mulherzinha quando a pessoa é incrível!")}}, 
    {nome: "Vovo Juju", idade: undefined, raca: "Vovo", falar: function () {console.log("Abacate faz bem pro cabelo...")}}, 
    {nome: "Gesonel", idade: 2, raca: "pato"}, 
    {nome: "Fabrício", idade: 2, raca: "pato"}, 
    {nome: "Danúbio", idade: 2, raca: "pato"}
];

// Forma que eu fiz
function personagensHumanos(personagens) {
    if(personagens.raca === "humano")   return personagens.nome;
}

function nomesPersonagensHumanos(nomesPersonagens) {
    return nomesPersonagens.nome;
}

const nomes = personagens.filter(personagensHumanos);
const newNomes = nomes.map(nomesPersonagensHumanos);

console.log(newNomes);

// Resposta final
const nomesDois = personagens.filter(personagem => personagem.raca === "humano").map(personagem => personagem.nome);

console.log(nomesDois);