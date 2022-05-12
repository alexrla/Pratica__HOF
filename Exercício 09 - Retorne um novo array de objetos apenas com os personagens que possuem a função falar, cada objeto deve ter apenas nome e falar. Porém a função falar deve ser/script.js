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
function filtrarPersonagens(personagens)   {
    if(personagens.falar)   return true;
    return false;
}

function criarNovoObjeto(personagens)   {
    return  {
        nome: personagens.nome,
        falar: function () {console.log(`Oi meu nome é  ${personagens.nome}`)}
    };
}

function chamarFuncaoFalar(personagensFalantes)   {
    personagensFalantes.falar();
}

const personagensFalantes = personagens.filter(filtrarPersonagens).map(criarNovoObjeto);

const falar = personagensFalantes.map(chamarFuncaoFalar);

// Resposta final
personagens
     .filter(personagem => personagem.falar)
     .map(personagem => ({
       nome: personagem.nome,
       falar: function () {
         console.log(`Oi meu nome é  ${personagem.nome}`)
       }
     }))
     .map(personagem => personagem.falar());