// tipo literal
let literal: "Hello, world!"
let pi: 3.14

// isso vai da erro se vc fizer algum valor q n seja literalmente os valores atribuidos

let option: "Yes" | "No"

option = "Yes"
// observe que ao digitar "option = " ele ja autocompleta com os tipos.

//criando o proprio tipo
type Planet = "Mercúrio" | "Vênus" | "Terra" | "Marte" | "Júpiter" | "Saturno" | "Urano" | "Netuno" | "Plutão"

// Um Alias é um nome personalizado para um tipo e pode ser atribuido a outras variáveis
let homePlanet: Planet
homePlanet = "Terra"

// Também é possível utilizar um Alias para declarar arrays personalizados
let milkyWay: Planet[]

// Repare que usando um Alias temos acesso ao autocompletar
// dentro do escopo da função e temos um código muito mais 
// limpo que se usássemos a definição inteira do tipo Planet
function checkPlanet(planet: Planet) {
  if (planet === "Terra") {
    console.log("Estamos na Terra")
  }
}
// No TypeScript também podemos definir um Alias para uma função
// Podemos fazer isso através da sintaxe de arrow functions
// mencionando os parâmetros e o tipo de retorno
type GreetingCallback = (name: string) => void

// A partir disso podemos anotar esse tipo
function greet(callback: GreetingCallback) {
  const name = prompt("Qual é o seu nome?")

  callback(name)
}

// E ao definir nosso callback temos acesso às informações
// sobre o seu tipo e retorno para nos auxiliar
greet((name) => {
  alert(`Olá, ${name}! Essa é uma saudação executada como callback!`)
})