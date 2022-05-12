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
function ePato(personagens) {
    if(personagens.raca === "pato") return true;
    return false;
}

const patos = personagens.filter(ePato);

console.log(patos);

// Resposta final
const patosDois = personagens.filter(personagem => personagem.raca === "pato");

console.log(patosDois);