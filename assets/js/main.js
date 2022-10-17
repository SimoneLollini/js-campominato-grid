// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
const btn = document.querySelector('button')
const field = document.querySelector('.container.field')
let cells = 100;
btn.addEventListener('click', function () {
    // console.log('Hai cliccato!');
    btn.classList.add('d_none')
    cellsGenerator(cells, field)
})

function cellsGenerator(cellsNumber, parentElement) {
    for (let i = 0; i < cellsNumber; i++) {

        parentElement.insertAdjacentHTML('beforeend', `<div class="cell"> ${i + 1} </div>`)

    }
}
/* 
for (let i = 0; i < cells; i++) {
    console.log(i);
    field.insertAdjacentHTML('beforeend', `<div class="cell"> ${i + 1} </div>`)
}
*/