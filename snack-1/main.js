/* 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
 */

const cars = [
    {
        nome: 'fiat',
        modello: 'panda',
        alimentazione: 'benzina',
    },
    {
        nome: 'audi',
        modello: 'a4',
        alimentazione: 'diesel',
    },
    {
        nome: 'bmw',
        modello: 'z3',
        alimentazione: 'benzina',
    },
    {
        nome: 'dacia',
        modello: 'sandero',
        alimentazione: 'gpl',
    },
    {
        nome: 'dacia',
        modello: 'logan',
        alimentazione: 'diesel',
    },
    {
        nome: 'seat',
        modello: 'ibiza',
        alimentazione: 'metano',
    },
    {
        nome: 'renault',
        modello: 'clio',
        alimentazione: 'benzina',
    },
    {
        nome: 'volvo',
        modello: 'polar',
        alimentazione: 'diesel',
    },
    {
        nome: 'toyota',
        modello: 'hi5',
        alimentazione: 'elettrica',
    },
    {
        nome: 'fiat',
        modello: 'punto',
        alimentazione: 'gpl',
    },
]

/* 
--> PROVA CON .FILTER

const gasolineCars = cars.filter(car => {
    if (car.alimentazione == 'benzina') {
        return true
    }

})
console.log(gasolineCars);

const dieselCars = cars.filter(car => {
    if (car.alimentazione == 'diesel') {
        return true
    }

})
console.log(dieselCars);

const otherCars = cars.filter(car => {
    if ((car.alimentazione != 'diesel') && (car.alimentazione != 'benzina')) {
        return true
    }

})
console.log(otherCars); */


// PROVA CON FOREACH

const gasolineCars = [];
const dieselCars = [];
const otherCars = [];
cars.forEach(car => {
    if (car.alimentazione == 'benzina') {
        gasolineCars.push(car);
    } else if (car.alimentazione == 'diesel') {
        dieselCars.push(car);
    } else {
        otherCars.push(car);
    }
})

console.log(gasolineCars, dieselCars, otherCars);