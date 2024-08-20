/*
Consegna:
Dato un array contenente una lista di cinque immagini, creare un carosello ispirandovi alle foto in allegato.
Potete anche usare immagini diverse e variare leggermente lo stile, l'importante è la logica!

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider;
avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for.
Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme.
Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.

BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima e l'utente clicca la freccia per andare indietro,
la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso avanti,
deve attivarsi la prima immgine.

BONUS 2:
Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a quella attiva,
scegliete liberamente se scurire le altre immagini oppure se evidenziarla semplicemente con un bordo. Tra queste miniature,
quella corrispondente all'immagine attiva deve evidenziarsi, scegliete voi l'effetto estetico, potete colorarla diversamente rispetto
alle altre o aggiungere un semplice bordo.

Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre,
cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche settimana la sessione HTML e CSS, se non ci ricordiamo qualcosa
andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus
dell'esercizio.
Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
*/


// Preprarzione dati noti
sources = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp']

// Recupero elementi dal DOM
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const carouselGallery = document.querySelector('.gallery');

let imgs = '' // mi preparo la stringa da montare nel DOM

for (let i = 0; i < sources.length; i++) {
    imgs += `<img alt="landscape-${i + 1}" src="${sources[i]}">`  // creo la stringa ciclando gli indici dell'array
}
gallery.innerHTML = imgs;    // modifico il DOM

const images = document.querySelectorAll('#carousel img');

// Mostro la prima(nell'array) immagine in pagina
let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');


// Eventi dinamici 
// Prev btn
btnPrev.addEventListener('click', function() {
    // tolgo classe attiva
    images[currentActiveIndex].classList.remove('active');

    currentActiveIndex--;

    images[currentActiveIndex].classList.add('active');
})
// Next btn
btnNext.addEventListener('click', function() {
    // tolgo classe attiva
    images[currentActiveIndex].classList.remove('active');

    currentActiveIndex++;

    images[currentActiveIndex].classList.add('active');
})




