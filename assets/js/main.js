// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// const btn = document.querySelector('button')
// const fieldSelector = document.querySelector('.container.field')


// const cellsNumber = 100;
// btn.addEventListener('click', function () {
//     btn.classList.add('d_none')

//     cellsGenerator(cellsNumber, fieldSelector)
//     // const cellElementSelection = document.querySelectorAll('cell')   
// })

// let arrayCell = [];
// let cellElement = '';
// let i = 0;
// function cellsGenerator(cellsNumber, parentElement) {
//     for (let i = 0; i < cellsNumber; i++) {
//         cellElement = `<div class="cell"> ${i + 1} </div>`
//         parentElement.insertAdjacentHTML('beforeend', cellElement)  
//     }
// }

const field = document.querySelector('.field');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    field.innerHTML = '';
    const cellNumber = 100;
    generateCells(field, cellNumber);
});


function generateCells(parentElement, cellsNumber) {
    for (let i = 0; i < cellsNumber; i++) {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.innerText = i + 1;
        parentElement.append(cellElement);
    }

    const cellSelector = document.querySelectorAll('.cell');
    for (let i = 0; i < cellSelector.length; i++) {
        const singleCell = cellSelector[i]
        singleCell.addEventListener('click', function () {
            singleCell.classList.add('active');
            console.log(singleCell.innerHTML);
        })
    }
}