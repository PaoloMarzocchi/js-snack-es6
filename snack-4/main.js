/* Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età. */

const peopleList = [
    {
        nome: 'Gianluca',
        cognome: 'Sciapo',
        eta: 17,
    },
    {
        nome: 'Filippo',
        cognome: 'Castro',
        eta: 15,
    },
    {
        nome: 'Eren',
        cognome: 'Jaeger',
        eta: 20,
    },
    {
        nome: 'Gojo',
        cognome: 'Satoru',
        eta: 50,
    },
    {
        nome: 'Carlo',
        cognome: 'Zeno',
        eta: 30,
    },
    {
        nome: 'Levi',
        cognome: 'Ackerman',
        eta: 45,
    },
]

const newPeopleList = peopleList.map(person => {
    if (person.eta > 18) {
        person = `Ciao ${person.nome} ${person.cognome} hai l'età per guidare!`
    }else{
        person = `Ciao ${person.nome} ${person.cognome} purtroppo non hai ancora l'età per guidare!`
    }
    return person;
})

console.log(newPeopleList);