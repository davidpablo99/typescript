interface Spaceships{
    name:string, 
    pilot:string, 
    crew:string, 
    crewLimit:number, 
    inMission: boolean
}
//Interface Spaceship: Define claramente a estrutura que uma nave espacial deve seguir, com propriedades bem definidas e tipos específicos.


let spaceships: Spaceships[] = [];

//Array Tipado: spaceships agora é um array de objetos do tipo Spaceship (Spaceship[]).

function saveSpaceship(){
    let ship = [name,pilot,crew,crewLimit,inMission]
    spaceships.push(ship)
}

//crew = equipe