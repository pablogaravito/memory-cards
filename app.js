let turns = 0;
let cardsLeft = -1;
let cardList = [
    'darkness', 
    'double', 
    'fairy',
    'fighting',
    'fire',
    'grass',
    'lightning',
    'metal',
    'psychic',
    'water'
]

const pokemonTypesPath = 'res/pokemon-types/';

let cardSet;
let board = [];
let rows = 4;
let columns = 5; 

let selectedCard1 = null;
let selectedCard2 = null;

const boardEle = document.querySelector('#board');

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList);
    console.log(cardSet);

    //shuffle
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length);
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function startGame() {
    cardsLeft = cardSet.length;
    console.log('cardsLeft at start', cardsLeft);
    //arrange the board
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg);

            let card = document.createElement('img');
            card.id = r.toString() + '-' + c.toString();
            card.src = `${pokemonTypesPath}${cardImg}.jpg`;

            card.addEventListener('click', selectCard);

            //card.src = 'res/pokemon-types/' + cardImg + '.jpg';
            card.classList.add('card');
            boardEle.appendChild(card);
        }
        board.push(row);
    }
    setTimeout(hideCards, 1100);
    
}

function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + '-' + c.toString());
            card.src = `${pokemonTypesPath}back.jpg`;
        }
    }
}

function selectCard() {
    if (this.src.includes('back')) {
        if (!selectedCard1) {
            selectedCard1 = this;
            let coords = selectedCard1.id.split('-');
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);
            
            selectedCard1.src = `${pokemonTypesPath}${board[r][c]}.jpg`


        } else if (this !== selectedCard1 && !selectedCard2) {
            selectedCard2 = this;
            let coords = selectedCard2.id.split('-');
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);
            
            selectedCard2.src = `${pokemonTypesPath}${board[r][c]}.jpg`;
            setTimeout(compareCards, 1000);
        }
    }
}

function compareCards() {
    turns++;
    const turnSpan = document.querySelector('#turns');
    turnSpan.innerText = turns;
    if (selectedCard1.src !== selectedCard2.src){
        selectedCard1.src = `${pokemonTypesPath}back.jpg`;
        selectedCard2.src = `${pokemonTypesPath}back.jpg`;     
    }  else {
        cardsLeft = cardsLeft - 2;
    }
    console.log('cardsLeft: ', cardsLeft);
    if (cardsLeft === 0) {
        console.log(`You win! Took you ${turns} turns`);
    }
    selectedCard1 = null;
    selectedCard2 = null;
}