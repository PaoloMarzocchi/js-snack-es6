/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine. */

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
        lunghezza: 14
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
    },
];
let sumLunghe = 0;
let sumCorte = 0;

const zucchineLunghe = zucchine.filter(zucchina => {
    if (zucchina.lunghezza > 15) {
        sumLunghe += zucchina.peso;
        return zucchina
    }
    
})
console.log(zucchineLunghe, `Il peso totale delle zucchine più lunghe di 15cm è ${sumLunghe}`);

const zucchineCorte = zucchine.filter(zucchina => {
    if (zucchina.lunghezza <= 15) {
        sumCorte += zucchina.peso;
        return zucchina.peso
    }
    
})
console.log(zucchineCorte, `Il peso totale delle zucchine uguali o più corte di 15cm è ${sumCorte}`);