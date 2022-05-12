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
function retornarNomeIdade(personagens) {
    return {
        nome: personagens.nome,
        idade: personagens.idade
    };
}

const newPersonagens = personagens.map(retornarNomeIdade);

console.log(newPersonagens);

// Resposta final
const newPersonagensDois = personagens.map(personagem => ({
        nome: personagem.nome,
        idade: personagem.idade
}));

console.log(newPersonagensDois);