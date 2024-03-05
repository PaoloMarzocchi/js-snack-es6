/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]
 */

const stringArray = ['ciao','COME','Stai', 'faBio'];


const newStringArray = stringArray.map(oneString => {
    
    return oneString.charAt(0).toUpperCase() + oneString.slice(1).toLowerCase();
        
})

console.log(newStringArray);