// Um array vai ser usado para salvar as naves de forma mais simplificada
const spaceships = [];
/**
 * Funções Principais
 */
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert(`A nave ${spaceship.name} foi registrada.`);
}
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find((ship) => { spaceship.name === name; });
    return spaceship;
}
function addCrewMember(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`O membro ${member} não pode ser adicionado a nave ${spaceship.name}. Limite atingido!`);
    }
    else {
        spaceship.crew.push(member);
        alert(`${member} foi adicionado à tripulação da ${spaceship.name}`);
    }
}
function sendSpaceshipInMission(spaceship) {
    if (spaceship.inMission) {
        alert(`${spaceship.name} não pode ser enviada. Nave já em missão`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`${spaceship.name} não pode ser enviada. Tripulação Insuficiente`);
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} enviada para a missão`);
    }
}
function firstMenuOpstion() {
    const name = prompt('Qual é o nome da nave a ser registrada?');
    const pilot = prompt(`Qual é o nome do piloto na ${name}?`);
    const crewLimit = Number(prompt(`Quantos tripulantes a ${name} suporta?`));
    const confirmation = confirm(`Confirma o registro da nave ${name}?\nPiloto:${pilot}\nLimite da Tripulação ${crewLimit}`);
    if (confirmation) {
        addSpaceship(name, pilot, crewLimit);
    }
}
function secondMenuOption() {
    const member = prompt('Qual é o nome do tripulante?');
    const spaceshipName = prompt(`Para qual nave ${member} deverá ser designado?`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`Confirma a inclusão de ${member} na tripulação da ${spaceship.name}?`);
        if (confirmation) {
            addCrewMember(member, spaceship);
        }
    }
}
function thirdMenuOption() {
    const spaceshipName = prompt(`Qual o nome da nave a ser enviada?`);
    const spaceship = findSpaceship(spaceshipName);
    if (spaceship) {
        const confirmation = confirm(`confirma o envio da ${spaceshipName} em missão?`);
        if (confirmation) {
            sendSpaceshipInMission(spaceship);
        }
    }
}
function fourthMenuOption() {
    //listar todas as naves
    let list = 'Naves Registradas:\n';
    spaceships.forEach((spaceship) => {
        list += `
        Nave: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Tripulação: ${spaceship.crew}
        Tamanho máximo da tripulação: ${spaceship.crewLimit}
        Em Missão?: ${spaceship.inMission}
        `;
        spaceship.crew.forEach(member => {
            list += `   -${member}\n`;
        });
    });
    alert(list);
}
let userOption = 0;
while (userOption !== 5) {
    const menu = `Painel principal
    1 - Registrar uma nova nave
    2 - Adicionar membro da tripulação
    3 - Enviar nave em missão
    4 - Listar naves registradas
    5 - Encerrar
    `;
    userOption = Number(prompt(menu));
    switch (userOption) {
        case 1:
            firstMenuOpstion();
            break;
        case 2:
            secondMenuOption();
            break;
        case 3:
            thirdMenuOption();
            break;
        case 4:
            fourthMenuOption();
            break;
        case 5:
            alert(`Encerrando o sistema...`);
            break;
        default:
            alert(`Opção inválida! Retornando ao menu principal`);
            break;
    }
}
export {};
