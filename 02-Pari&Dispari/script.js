/*

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

*/

//L'utente sceglie pari o dispari

const userChoiceParioDispari = prompt('Scegli Pari o Dispari').trim();
console.log(userChoiceParioDispari);

//Salviamo la scelta dell'utente e rendiamola un valore booleano

const userIsPari = userChoiceParioDispari.toLowerCase() === 'pari';

//L'utente inserisce un numero da 1 a 5

const userChoiceNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(userChoiceNumber);

//Generiamo un numero random da 1 a 5 per il computer con una funzione

const numberPc = generateRandomNumber(1, 5);
console.log(numberPc);

function generateRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
}

// Sommiamo il numero inserito dall'utente ed il numero random

const sumNumber = userChoiceNumber + numberPc;

//Stabilire se la somma è pari o dispari

const numPariVerified = isNumberEven(sumNumber);

function isNumberEven(number) {
  const isEven = number % 2 === 0;
  return isEven;
}

//Dichiarare vincitore

function winnerVerified(userChoice, numVerified) {
  return userChoice === numVerified;
}

//Vincitore console.log
const isWinner = winnerVerified(userIsPari, numPariVerified);
console.log(isWinner ? 'Hai vinto!' : 'Ha vinto il computer!');
