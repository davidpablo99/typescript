function sendSpaceship(spaceship:{piloto:string, copiloto?: string}){
    //...
}

sendSpaceship( {piloto:'David', copiloto:'pablo'})

//note que em copilot? esse sinal ? referece q é opcional

let input: unknown // significa desconhecido valor de entrada

input = 2
input = 'david'
input = true

let a : any // use em ultimo caso essa opção pq ela aceita qualquer valor, nisso vc perde o sentido de typescript