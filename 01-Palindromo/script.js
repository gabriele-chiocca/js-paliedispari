/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const userChoice = prompt('Inserisci una parola').trim();

console.log(userChoice);

reverseWord(userChoice);

function reverseWord(text) {
  let wordReversed = '';

  for (let i = 0; i < userChoice.length; i++) {
    const currentLetter = userChoice[i];
    wordReversed = currentLetter + wordReversed;
  }
  console.log(wordReversed);

  return wordReversed;
}


function verifiedPalindroma(userChoice, wordReversed) {

    const

}