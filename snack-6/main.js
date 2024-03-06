/* *SNACK 6*
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.

Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

*BONUS*
Stampare in pagina oltre che in console! */

const footballTeams = [
    {
        nome: "Milan",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Bologna",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Atalanta",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Genoa",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        punti: 0,
        falliSubiti: 0
    },
    {
        nome: "Fiorentina",
        punti: 0,
        falliSubiti: 0
    }
];

footballTeams.forEach(team => {

    team.punti = randomNumb(0, 100);
    team.falliSubiti = randomNumb(0, 30);
});
console.log(footballTeams);

let noPointFootballTeams = footballTeams.map(team => {
    const {nome,falliSubiti} = team;
    return {
        nome:nome,
        falliSubiti:falliSubiti,
    };
});
console.log(noPointFootballTeams);
// Stampo nella DOM
const listEl = document.querySelector('ul');
noPointFootballTeams.forEach(team => {
    const {nome,falliSubiti} = team;
    const markup = `<li>
    <h5>${nome}</h5>
    Falli subiti: ${falliSubiti}</li>`;
    listEl.insertAdjacentHTML('beforeend',markup);

})


function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}