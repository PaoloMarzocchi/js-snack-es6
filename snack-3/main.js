/* Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi. */

const animalsList = [
    {
      nome: "Leone",
      famiglia: "Felidi",
      classe: "Mammiferi"
    },
    {
      nome: "Orso",
      famiglia: "Ursidi",
      classe: "Mammiferi"
    },
    {
      nome: "Aquila",
      famiglia: "Accipitridi",
      classe: "Uccelli"
    },
    {
      nome: "Tonno",
      famiglia: "Scombridi",
      classe: "Pesci"
    },
    {
      nome: "Elefante",
      famiglia: "Elefantiidi",
      classe: "Mammiferi"
    },
    {
      nome: "Cane",
      famiglia: "Canidi",
      classe: "Mammiferi"
    },
    {
      nome: "Coccodrillo",
      famiglia: "Coccodrillidi",
      classe: "Rettili"
    },
  ];

  const mammalsList = animalsList.filter(animal => animal.classe === 'Mammiferi')

  console.log(mammalsList);