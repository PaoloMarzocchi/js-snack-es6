/* Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) */
/**
 * 
 * @param {string} word 
 */
function reverseWord(word) {
    return word.split('').reverse().join('');

}

const revWord = reverseWord('ciao');
console.log(revWord);