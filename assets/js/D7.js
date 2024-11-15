/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("ESERCIZIO 1")
function stringConcat(stringUno, stringDue) {
  stringUno = stringUno.slice(0, 2).concat(stringDue.slice(-3)).toUpperCase();
  return stringUno;
}
console.log(stringConcat("Prima", "Stringa"));


/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/
console.log("ESERCIZIO 2");
function arrayRandomico() {
  let arrayRandom = [];
  for (let i = 0; i < 11; i++) {
    arrayRandom.push(Math.floor(Math.random() * 101));
  }
  return arrayRandom;
}
console.log(arrayRandomico());

/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("ESERCIZIO 3");
arrayIniziale = arrayRandomico();
console.log(arrayIniziale); //ARRAY DI PARTENZA
const arrayFiltrato = arrayIniziale.filter(function (elementEs3) {
  if (elementEs3 % 2 === 0) {
    return elementEs3;
  }
}
)
console.log(arrayFiltrato);
/* ESERCIZIO 4 (forEach)
Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("ESERCIZIO 4");
arrayNumerico = [12, 8, 10, 8];
let totalEs4 = 0;
arrayNumerico.forEach(function (elementoEs4) {
  console.log(totalEs4 += elementoEs4);
}
);


/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/
console.log("ESERCIZIO 5");
arrayEs5 = [1, 2, 3, 4, 25];
const totArray = arrayEs5.reduce((totalEs5, elementEs5) => totalEs5 + elementEs5, 0);
console.log(totArray);

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/
console.log("ESERCIZIO 6");
arrayEs6 = [5, 10, 15, 20, 25];
let n = 5;

const arrayIncrementato = arrayEs6.map(elementEs6 => elementEs6 + n);
console.log(arrayIncrementato);


/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/
console.log("ESERCIZIO 7");
const arrayStringhe = ["Uno", "Quattro", "Sette", "Otto", "Dodici"];
const arrayLunghezza = arrayStringhe.map(elementEs7 => elementEs7.length);
console.log(arrayLunghezza);

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/
console.log("ESERCIZIO 8");
function dispari() {
  arrayDisparo = [];
  for (let i = 1; i < 100; i++) {
    if (i % 2 !== 0)
      arrayDisparo.push(i);
  }
  return arrayDisparo;
}
console.log(dispari());

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/
console.log("ESERCIZIO 9");
let annoDiConfronto = 2025;
let titoloFilm;
function oldestMovie(){
movies.forEach(function (elementoEs9) {
  let anno = parseInt(elementoEs9.Year);
  if (anno < annoDiConfronto) {
    annoDiConfronto = anno;
    titoloFilm = {...elementoEs9};   //ERRATO ANDAVA USATO SPREAD OPERATOR titoloFilm = {...elementoEs9}; invece di titoloFilm = elementoEs9;
  }
}
);
return titoloFilm;
}
console.log(oldestMovie())


/* ESERCIZIO 10  ris 14
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 10");
function numeroFilm() {
  let numeroTotaleFilm = 0;
  for (let i = 0; i < movies.length; i++) {         //COMPLETE NONSENSE
    numeroTotaleFilm += 1;

  }
  return numeroTotaleFilm;
}
console.log(numeroFilm())
//CORREZIONE
function countMovies(){
  return movies.length;
}
console.log(countMovies());
/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/
console.log("ESERCIZIO 11");
function filmTitle(){
const arrayTitoli = movies.map(function (elementoEs11) {
  return elementoEs11.Title;

});
return arrayTitoli;
}
console.log(filmTitle());
/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/
console.log("ESERCIZIO 12");
function filmMillenio(){
const filmPerAnno = movies.filter(function (elementoEs12) {


  return parseInt(elementoEs12.Year) >= 2001;
}  
) 
return filmPerAnno;
}
console.log(filmMillenio());

/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/
//const totArray = arrayEs5.reduce((totalEs5, elementEs5) => totalEs5 + elementEs5,0);
console.log("ESERCIZIO 13");
let sommaTotaleAnni = movies.reduce((totalEs13, elementoEs13) => totalEs13 + parseInt(elementoEs13.Year), 0);
console.log(sommaTotaleAnni);




/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/
console.log("ESERCIZIO 14");
let filmSearch = 'tt2395427';
const filmRicercato = movies.find(elementoEs14 => elementoEs14.imdbID === filmSearch);

console.log(filmRicercato);





/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/
console.log("ESERCIZIO 15");
let annoRicerca = "2003";
function firstFilm(){
const ricercaFilmAnno = movies.findIndex(elementoEs15 => {
  return elementoEs15.Year === annoRicerca;
  

});
return ricercaFilmAnno;
}
console.log(firstFilm());
