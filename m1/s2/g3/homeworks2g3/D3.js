

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
function maggioreDi(a,b) {
   if (a > b) {
    return a;
   }else {
    return b;
   }

  }

  maggioreDi(3,6)
  console.log(maggioreDi(3,6))
  




/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


function notEqual(x) {
   if (x !== 5) {
    return 'not equal'
  }else{
    return 'equal'
  }
}
let x = 3
notEqual(3)
console.log(notEqual(3))



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function divisibile5(a) {
  if ( a % 5 == 0)  {
   return 'divisibile per 5';
 }else{
   return 'non divisibile per 5'
 }
}

divisibile5(10)
console.log(divisibile5(10))





/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function valore8(a,b){
  if (a === 8) {
    return 'a = 8';
    } else if (b === 8) {
  } else if (a + b === 8){
    return 'a + b = 8';
  } else (a - b === 8) 
    return 'a - b = 8';
  
}

valore8(7,1)
console.log(valore8(7,1))




/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

function minore50(a,b){
  let totalShoppingCart = a + b; 
  if ( totalShoppingCart <= 50){
    console.log( 'totale: ' + totalShoppingCart +' + spedizione ' + 10)
  } else {
    console.log( 'totale: ' + totalShoppingCart);
  }


}
minore50(25,24);




/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
function blackFriday(a,b) {
  let totalShoppingCart = a - (a * 20 / 100) + b - (b * 20 / 100); 
  if ( totalShoppingCart <= 50){
    console.log( 'totale: ' + totalShoppingCart +' + spedizione ' + 10)
  } else {
    console.log( 'totale: ' + totalShoppingCart);
  }

}
 blackFriday(20, 10);
 blackFriday(20,80);




/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
var uno= 1;
var due= 2;
var tre= 3;
let terno = [uno, due, tre]
console.log( terno.sort(function(a,b){return b-a}));


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function cercaNumero(a){
  if (typeof a === "number") {
    console.log('is a number');
  } else {
    console.log('is not a number');
  }
}

let a = 10;
cercaNumero(a);

function cercaNumero1(b){
  if (typeof b === "number") {
    console.log('is a number');
  } else {
    console.log('is not a number');
  }
}

let b = 'mela';
cercaNumero1(b);




/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function pari(n){
    if (n % 2 == 0) {
      return 'pari'
    } else {
      return'dispari'
    
  }
}

pari(5);
console.log(pari(5));



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
 
 
  let val = 7
{
  if (val >= 10) {
    console.log("Uguale a 10 o maggiore");
  }else if (val < 5) {
       console.log("Meno di 5");
    } else (val < 10) 
    console.log("Meno di 10");
  }




/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'], 

}
me.city = 'Toronto';
console.table(me)
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;
console.table(me)



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills[2];
console.table(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

 
let dec = []
dec.push(1,2,3,4,5,6,7,8,9,10);
console.table(dec);



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

delete dec[9]
console.table(dec);

dec.push(100);
console.table(dec);
