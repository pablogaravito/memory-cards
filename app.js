var ANIMALS_PACK = {
    path: 'res/img/animals/',
    cards: [
        'bird',
        'bird2',
        'bull',
        'camel',
        'cat',
        'cat2',
        'cat3',
        'cat4',
        'cobra',
        'cow',
        'crab',
        'deer',
        'deer2',
        'deer3',
        'dog',
        'dolphin',
        'duck',
        'elephant',
        'fish',
        'fish2',
        'fox',
        'frog',
        'giraffe',
        'goat',
        'goose',
        'horse',
        'horse2',
        'kangaroo',
        'koala',
        'lion',
        'lion2',
        'monkey',
        'mouse',
        'owl',
        'panda',
        'panda2',
        'pig',
        'rhino',
        'seal',
        'tiger',
        'turtle',
        'white-tiger',
        'wolf',
        'zebra',
        'zebra2'
    ]
}
var FOOD_PACK = {
    path: 'res/img/food/',
    cards: [
        'apple',
        'baguette',
        'banana',
        'blueberries',
        'bread',
        'cake',
        'cake2',
        'cake3',
        'cake4',
        'cheese',
        'cheesecake',
        'cheesecake2',
        'cherry',
        'chips',
        'cookie',
        'cupcake',
        'dessert',
        'dessert2',
        'donut',
        'egg',
        'fried-chicken',
        'fries',
        'grapes',
        'hamburger',
        'hot-dog',
        'icecream',
        'icecream2',
        'japan-food',
        'ketchup',
        'kiwi',
        'kiwi2',
        'lemon',
        'meat',
        'muffin',
        'muffin2',
        'pear',
        'pie',
        'pizza',
        'popcorn',
        'ramen',
        'raspberry',
        'sandwich',
        'sardines',
        'spaghetti',
        'strawberry',
        'strawberry2',
        'taco',
        'toast',
        'triple',
        'watermelon'
    ]
}
var HALLOWEEN_PACK = {
    path: 'res/img/halloween/',
    cards: [
        'axe',
        'bat',
        'bats',
        'broom',
        'candy',
        'candy2',
        'cat',
        'cauldron',
        'cauldron2',
        'cauldron3',
        'cauldron4',
        'coffin',
        'dracula',
        'dracula2',
        'evil-clown',
        'eye',
        'eyes',
        'frankenstein',
        'frankenstein2',
        'ghost',
        'ghost2',
        'haunted-house',
        'kruger',
        'magicball',
        'moon',
        'owl',
        'potion',
        'pumpkin',
        'pumpkin2',
        'reaper',
        'scream',
        'skull',
        'spider',
        'tombstone',
        'tombstone2',
        'voodoo',
        'witch',
        'witch-hat',
        'witch-hat2',
        'zombie',
        'zombie2',
        'zombie-hand',
        'zombie-hand2'
    ]
}
var POKEMON_PACK = {
    path: 'res/img/pokemon/',
    cards: [
        'abra',
        'bellsprout',
        'bulbasaur',
        'caterpie',
        'charmander',
        'charmander2',
        'dratini',
        'eevee',
        'jigglypuff',
        'mankey',
        'meowth',
        'mew',
        'pidgey',
        'pikachu',
        'pikachu2',
        'psyduck',
        'rattata',
        'rocket',
        'snorlax',
        'squirtle',
        'venonat',
        'weedle',
        'zubat'
    ]
}
var SPORT_PACK = {
    path: 'res/img/sport/',
    cards: [
        'archery', 
        'badminton',
        'baseball',
        'basketball',
        'basketball2',
        'bowling',
        'box',
        'box2',
        'champion',
        'dart',
        'dumbbell',
        'football',
        'football2',
        'football3',
        'football4',
        'golf',
        'golf2',
        'gymnastics',
        'iceskate',
        'pool',
        'soccer',
        'soccer2',
        'soccer3',
        'sumo',
        'table-tennis',
        'table-tennis2',
        'tennis',
        'tennis2',
        'trophy',
        'voleyball'
    ]
}
var STUDY_PACK = {
    path: 'res/img/study/',
    cards: [
        'abacus',
        'abacus2',
        'abc',
        'adn',
        'atom',
        'board',
        'books',
        'boy',
        'calculator',
        'certificate',
        'certificate2',
        'chemistry',
        'compass',
        'drawing',
        'girl',
        'globe',
        'globe2',
        'graduation',
        'graduation2',
        'handbook',
        'highlighter',
        'ideas',
        'lamp',
        'math',
        'microscope',
        'note',
        'note2',
        'paint',
        'stars',
        'todo',
        'tube',
        'tubes',
        'university',
        'writing'
    ]
}
var XMAS_PACK = {
    path: 'res/img/xmas/',
    cards: [
        'baubles',
        'bell', 
        'bells', 
        'boy',
        'calendar',
        'candle',
        'candles',
        'candy',
        'champagne',
        'dessert',
        'elf',
        'gift',
        'gift2',
        'gingerbread',
        'gingerbread2',
        'girl',
        'gloves',
        'hat',
        'heart',
        'home',
        'letter',
        'omela',
        'ornament',
        'ornament2',
        'ornament3',
        'ornament4',
        'ornament5',
        'ornament6',
        'ornament7',
        'pie',
        'polar-bear',
        'reindeer',
        'reindeer2',
        'santa-smile',
        'santa-sunglasses',
        'sled',
        'snowglobe',
        'snowglobe2',
        'snowglobe3',
        'snowman',
        'snowman2',
        'snowman3',
        'sock',
        'star',
        'star2',
        'stocking',
        'tree',
        'wreath',
        'wreath2'
    ]
}

var difficulty = -1;
var theme = '';

class AudioController {
    constructor() {
        // this.bgMusic = new Audio('res/audio/creepy.mp3');
        this.flipSound = new Audio('https://github.com/pablogaravito/memory-cards/raw/master/res/audio/flip.wav');
        this.matchSound = new Audio('https://github.com/pablogaravito/memory-cards/raw/master/res/audio/match.wav');
        this.victorySound = new Audio('https://github.com/pablogaravito/memory-cards/raw/master/res/audio/victory.wav');
        this.gameOverSound = new Audio('https://github.com/pablogaravito/memory-cards/raw/master/res/audio/gameOver.wav');
        // this.bgMusic.volume = 0.3;
        // this.bgMusic.loop = true;
    }
    // startMusic() {
    //     this.bgMusic.play();
    // }
    // stopMusic() {
    //     this.bgMusic.pause();
    //     this.bgMusic.currentTime = 0;
    // }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        // this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        // this.stopMusic();
        this.gameOverSound.play();
    }
}

class Game {
    constructor(totalTime) {     
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.querySelector('#time-remaining');
        this.flips = document.querySelector('#flips');
        this.audioController = new AudioController();
    }
    startGame() {
        let cardNumber;
        switch(difficulty) {
            case 0:
                cardNumber = 12;
                break;
            case 1:
                cardNumber = 18;
                break;
            case 2:
                cardNumber = 24;
                break;
            case 3:
                cardNumber = 32;
                break;
            default:
                cardNumber = 18;
                break;
        }
        let currentTheme;
        switch(theme.toLocaleLowerCase()) {
            case 'animales':
                currentTheme = ANIMALS_PACK;
                break;
            case 'comida':
                currentTheme = FOOD_PACK;
                break;
            case 'deporte':
                currentTheme = SPORT_PACK;
                break;
            case 'estudio':
                currentTheme = STUDY_PACK;
                break;
            case 'halloween':
                currentTheme = HALLOWEEN_PACK;
                break;
            case 'navidad':
                currentTheme = XMAS_PACK;
                break; 
            case 'pokemon':
                currentTheme = POKEMON_PACK;
                break;
            default:
                currentTheme = XMAS_PACK;
        }

        this.cardToCheck = null;
        this.cardsArray = this.selectCards(cardNumber, currentTheme.cards);
        document.body.classList.add('in-game');

        populateBoard(currentTheme, this.cardsArray);
        const cards = Array.from(document.getElementsByClassName('card'));
        cards.forEach(card => {
            card.addEventListener('click', () => {
                this.flipCard(card);
            });
        });
        this.hideCards();
        this.currentFlips = 0;
        this.flips.innerText = this.currentFlips;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        setTimeout(() => {
            // this.audioController.startMusic();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
    }
    selectCards(totalCards, cardSet) {   
        const cardsNeeded = totalCards/2;
        const shuffledCards = this.shuffleCards(cardSet);
        const cardList = shuffledCards.slice(shuffledCards.length - cardsNeeded);
        return this.shuffleCards(cardList.concat(cardList));
    }
    shuffleCards(cardsArray) {
        const newCardsArray = cardsArray.slice();

        //modern Fisher Yates algorithm
        let temp;
        for (let i = newCardsArray.length - 1; i > 0; i--) {
            let randIndex = Math.floor(Math.random() * (i+1));
            temp = newCardsArray[i];
            newCardsArray[i] = newCardsArray[randIndex];
            newCardsArray[randIndex] = temp;
        }
        return newCardsArray;
    }
    hideCards() {
        const cards = Array.from(document.getElementsByClassName('card'));      
        cards.forEach(card => {
            card.classList.remove('visible');
            card.classList.remove('matched');
        });
    };
    startCountDown() {
        return setInterval(() => {
            this.timeRemaining--;
            this.timer.innerText = this.timeRemaining;
            if (this.timeRemaining === 0)
                this.gameOver();
        }, 1000);
    }
    gameOver() {
        clearInterval(this.countDown);
        this.audioController.gameOver();
        document.querySelector('#result').innerText = 'PERDISTE :C!';
        document.querySelector('#game-ended-text').classList.remove('hidden');
        this.hideCards();
    }
    victory() {
        clearInterval(this.countDown);
        this.audioController.victory();
        document.querySelector('#result').innerText = 'VICTORIA!';
        document.querySelector('#game-ended-text').classList.remove('hidden');

    }
    flipCard(card) {
        if(this.canFlipCard(card)) {
            this.audioController.flip();
            this.currentFlips++;
            this.flips.innerText = this.currentFlips;
            card.classList.add('visible');

            if (this.cardToCheck) 
                this.checkForCardMatch(card);
            else
                this.cardToCheck = card;
        }
    }
    getCardType(card) {
        return card.getElementsByClassName('card-value')[0].src;
    }
    checkForCardMatch(card) {
        if (this.getCardType(card) === this.getCardType(this.cardToCheck))
            this.cardMatch(card, this.cardToCheck);
        else
            this.cardMisMatch(card, this.cardToCheck);

        this.cardToCheck = null;
    }
    cardMatch(card1, card2) {
        this.matchedCards.push(card1);
        this.matchedCards.push(card2);
        card1.classList.add('matched');
        card2.classList.add('matched');
        this.audioController.match();
        if (this.matchedCards.length === this.cardsArray.length)
            this.victory();
    }
    cardMisMatch(card1, card2) {
        this.busy = true;
        setTimeout(() => {
            card1.classList.remove('visible');
            card2.classList.remove('visible');
            this.busy = false;
        }, 1000);      
    }
    canFlipCard(card) {
        return !this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck;
    }
}

function populateBoard(pack, cardSet) {
    const board = document.querySelector('.card-container');
    const numCards = cardSet.length;
    switch(numCards) {
        case 12:
            board.style.maxWidth = '50%';
            board.style.gridTemplateColumns = 'repeat(4, 1fr)'; 
            board.style.gridTemplateRows = 'repeat(3, 1fr)';
            break;
        case 18:
            board.style.maxWidth = '70%';
            board.style.gridTemplateColumns = 'repeat(6, 1fr)'; 
            board.style.gridTemplateRows = 'repeat(3, 1fr)';
            break;
        case 24:
            board.style.maxWidth = '60%';
            board.style.gridTemplateColumns = 'repeat(6, 1fr)'; 
            board.style.gridTemplateRows = 'repeat(4, 1fr)';
            break;
        case 32:
            board.style.maxWidth = '80%';
            board.style.gridTemplateColumns = 'repeat(8, 1fr)';  
            board.style.gridTemplateRows = 'repeat(4, 1fr)';
            break;
        default:
            board.style.maxWidth = '70%';
            board.style.gridTemplateColumns = 'repeat(6, 1fr)'; 
            board.style.gridTemplateRows = 'repeat(3, 1fr)';
            break;
    }

    board.innerHTML = '';
    for (let i = 1; i <= numCards; i++) {
        
        const card = document.createElement('div');
        card.classList.add('card');
        const decorationFileName = '0_decoration';
        const cardBackFileName = '0_card-back';

        //corner decorations shared for both card Back and Front
        const decorationSrc = `${pack.path}${decorationFileName}.png`;
        const cardBackSrc = `${pack.path}${cardBackFileName}.png`;
        const topLeftImg = document.createElement('img');
        topLeftImg.classList.add('card-decoration');
        topLeftImg.classList.add('top-left');
        topLeftImg.src = decorationSrc;
        const bottomLeftImg = document.createElement('img');
        bottomLeftImg.classList.add('card-decoration');
        bottomLeftImg.classList.add('bottom-left');
        bottomLeftImg.src = decorationSrc;
        const topRightImg = document.createElement('img');
        topRightImg.classList.add('card-decoration');
        topRightImg.classList.add('top-right');
        topRightImg.src = decorationSrc;
        const bottomRightImg = document.createElement('img');
        bottomRightImg.classList.add('card-decoration');
        bottomRightImg.classList.add('bottom-right');
        bottomRightImg.src = decorationSrc;

        //cardBack
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.classList.add('card-face');      

        const imgBack = document.createElement('img');
        imgBack.classList.add('img-back');
        imgBack.src = cardBackSrc;
        cardBack.appendChild(topLeftImg);
        cardBack.appendChild(bottomLeftImg);
        cardBack.appendChild(topRightImg);
        cardBack.appendChild(bottomRightImg);
        cardBack.appendChild(imgBack);


        const topLeftImg2 = document.createElement('img');
        topLeftImg2.classList.add('card-decoration');
        topLeftImg2.classList.add('top-left');
        topLeftImg2.src = decorationSrc;
        const bottomLeftImg2 = document.createElement('img');
        bottomLeftImg2.classList.add('card-decoration');
        bottomLeftImg2.classList.add('bottom-left');
        bottomLeftImg2.src = decorationSrc;
        const topRightImg2 = document.createElement('img');
        topRightImg2.classList.add('card-decoration');
        topRightImg2.classList.add('top-right');
        topRightImg2.src = decorationSrc;
        const bottomRightImg2 = document.createElement('img');
        bottomRightImg2.classList.add('card-decoration');
        bottomRightImg2.classList.add('bottom-right');
        bottomRightImg2.src = decorationSrc;
        //cardFront
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        cardFront.classList.add('card-face');       

        const imgFront = document.createElement('img');
        imgFront.classList.add('card-value');
        const imgSrc = `${pack.path}${cardSet[i-1]}.png`;

        imgFront.src = imgSrc;
        cardFront.appendChild(topLeftImg2);
        cardFront.appendChild(bottomLeftImg2);
        cardFront.appendChild(topRightImg2);
        cardFront.appendChild(bottomRightImg2);
        cardFront.appendChild(imgFront);

        card.appendChild(cardBack);
        card.appendChild(cardFront);

        board.appendChild(card);
    }
}
function fillDifficultySelect() {
    const selectDifficulty = document.querySelector('#selectDifficulty');
    const difficulties = ['Fácil', 'Medio', 'Difícil', 'Insano'];
    for (let index = 0; index < difficulties.length; index++) {
        selectDifficulty.options[selectDifficulty.options.length] = new Option(difficulties[index], index);       
    }
}
function fillThemesSelect() {
    const selectTheme = document.querySelector('#selectTheme');
    const themes = ['Animales', 'Comida', 'Deporte', 'Estudio', 'Halloween', 'Navidad', 'Pokemon'];
    for (let index = 0; index < themes.length; index++) {
        selectTheme.options[selectTheme.options.length] = new Option(themes[index], index);       
    }
}

function defineGame() {
    const selectDifficulty = document.querySelector('#selectDifficulty');
    const selectTheme = document.querySelector('#selectTheme');
    difficulty = parseInt(selectDifficulty.value);
    theme = selectTheme.selectedOptions[0].text;
}

function ready() {
    fillDifficultySelect();
    fillThemesSelect();
    const startGameBtn = document.querySelector('#startGame');
    startGameBtn.addEventListener('click', () => {
        defineGame();
        const settingsDiv = document.querySelector('.settings');
        settingsDiv.classList.add('hidden');
        const startOverlay = document.querySelector('#start-game-text');
        startOverlay.classList.remove('hidden');
    })
    const game = new Game(60);   
    const gameContainer = document.querySelector('.game-container');

    const startGameOverLay = document.querySelector('#start-game-text');
    const restartOverlay = document.querySelector('#restart-overlay');
    const settingsOverlay = document.querySelector('#settings-overlay');
    startGameOverLay.addEventListener('click', () => {
        startGameOverLay.classList.add('hidden');
        gameContainer.classList.remove('hidden');
        game.startGame();
    });
    restartOverlay.addEventListener('click', () => {
        document.querySelector('#game-ended-text').classList.add('hidden');
        game.startGame();
    });
    settingsOverlay.addEventListener('click', () => {
        document.querySelector('#game-ended-text').classList.add('hidden');
        document.body.classList.remove('in-game');
        gameContainer.classList.add('hidden');
        document.querySelector('.settings').classList.remove('hidden');
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}