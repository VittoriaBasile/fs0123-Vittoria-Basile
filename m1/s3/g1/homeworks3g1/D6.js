/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1, l2) {
    return l1 * l2;
}

console.log(area(3,4));

(l1, l2) => l1 * l2;
console.log(area(3,4));


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(a, b) {
    if (a != b){
        
        return a + b;
        
    } else { 
        return (a+b) * 3;
    }

}
 console.log(crazySum(2, 2));
console.log(crazySum(3,2));


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1) {
  if (n1 > 19) {
    
  let differenzaCrazy =  Math.abs(n1 - 19) * 3;
  console.log(differenzaCrazy);

  
  } else {
    let differenza = Math.abs(n1 - 19);
    console.log(differenza);
  }

  }

  console.log(crazyDiff(20));
  console.log(crazyDiff(3));



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if (n >= 20 && n <= 100) {
        return true;
    } else {
        return false;
}
}

console.log(boundary(30));
console.log(boundary(102));


/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
    if (str ==="EPICODE") {
        return str;
} else {
    return  "EPICODE" + str;

}
}

console.log(epify('ciao'));
console.log(epify('EPICODE'));


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n2) {
    n2 >= 0
    if (n2 % 3 == 0 || n2 % 7 == 0) {
        return true;
} else {
    return false;
}
}
console.log(check3and7(21));
console.log(check3and7(10));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str1) {
    return str1.split("").reverse().join("");

}
console.log(reverseString("EPICODE"));


/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(str2) {
    return str2.split(" ").map(function(parola) {
        return parola.charAt(0).toUpperCase() + parola.slice(1);
      }).join(" ");
}

console.log(upperFirst("ciao mondo"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str3) {
    return str3.slice(1, -1);
}
console.log(cutString("EPICODE"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n3) {
    let array = [];
        
    for (var i = 0; i < n3; i++){

         array.push (Math.floor(Math.random() * 11)); 
        
    }
    return array;
}

console.log(giveMeRandom(10));
