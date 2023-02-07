/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.*/

/*
I principali datatype sono:
- dato STRINGA
- dato NUMERICO
-dato BOOLEANO
Il primo si riferisce a dati aventi valori testuali, i quali devono essere per forza inseriti all' interno di apici o doppi apici.
Il secondo si riferisce a dati aventi valori numerici e non ha bisogno degli apici. Usarli, infatti, coporterebbe la sua 'conversione' in stringa a causa della debole tipizzazione del linguaggio JS.
Il terzo si riferisce a dati aventi come unici due valori ammessi 'true' e 'false'. Ammette quindi delle condizioni che se rispettate daranno come risposta true; al contrario daranno risposta false.

*/


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = 'Vittoria';



/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let a = 12;
let b = 20;

console.log(a + b)



/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

{
  let name = 'Vittoria';
   name = 'Basile';
   console.log(name);
}

/* ESERCIZIO 6
 Crea una variabile "x" e assegna ad essa il numero 12.
*

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

x = 12;
console.log(4 - x);


  
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = 'john';
let name2 = 'John';
let uguaglianza = name1 === name2 ? true : false;
console.log(uguaglianza);



let result = name2.toLowerCase();
console.log(result);

uguaglianza = name1 === result ? true : false;
console.log(uguaglianza);
