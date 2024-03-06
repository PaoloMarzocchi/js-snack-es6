/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine. */

const zucchine = [
    {
        varietà: "Nera di Milano",
        peso: 150, // in grammi
        lunghezza: 20 // in centimetri
    },
    {
        varietà: "Tonda di Nizza",
        peso: 120,
        lunghezza: 15
    },
    {
        varietà: "Romanesca",
        peso: 180,
        lunghezza: 22
    },
    {
        varietà: "Lunghe Fiorentine",
        peso: 200,
        lunghezza: 25
    },
    {
        varietà: "Alberello",
        peso: 100,
        lunghezza: 12
    },
    {
        varietà: "Siciliana",
        peso: 160,
        lunghezza: 18
    },
    {
        varietà: "Striata di Napoli",
        peso: 140,
        lunghezza: 17
    },
    {
        varietà: "Bianca triestina",
        peso: 130,
        lunghezza: 16
    },
    {
        varietà: "Rampicante",
        peso: 170,
        lunghezza: 19
    },
    {
        varietà: "Trombetta di Albenga",
        peso: 190,
        lunghezza: 21
    }
];

let totPesoZucchine = 0;
zucchine.forEach(zucchina => {
    totPesoZucchine += zucchina.peso;
});

console.log(`Tutte le zucchine pesano ${totPesoZucchine} g`);

