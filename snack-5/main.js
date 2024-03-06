/* *SNACK 5*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

*BONUS*
Stampare in pagina oltre che in console!
*/

const racingBikes = [
    {
        nome: "Specialized Tarmac",
        peso: 7.5 // in kg
    },
    {
        nome: "Trek Emonda",
        peso: 7.2
    },
    {
        nome: "Cannondale SuperSix",
        peso: 7.3
    },
    {
        nome: "Giant TCR Advanced",
        peso: 7.1
    },
    {
        nome: "Pinarello Dogma",
        peso: 7.4
    },
    {
        nome: "Bianchi Oltre",
        peso: 7.6
    }
];

let bikeMinWeight = racingBikes[0];

racingBikes.forEach(bike => {
    let {peso} = bike;
    if (bikeMinWeight.peso > peso) {
        bikeMinWeight = bike;
    }
    
})
const {nome,peso} = bikeMinWeight;
console.log(`La bici più leggera è la ${nome} con un peso di ${peso} kg`);