


class AudioController {
    constructor() {
        // this.bgMusic = new Audio('res/Audio/creepy.mp3');
        this.flipSound = new Audio('res/Audio/flip.wav');
        this.matchSound = new Audio('res/Audio/match.wav');
        this.victorySound = new Audio('res/Audio/victory.wav');
        this.gameOverSound = new Audio('res/Audio/gameover.wav');
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
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.querySelector('#time-remaining');
        this.flips = document.querySelector('#flips');
        this.audioController = new AudioController();
    }
    startGame() {
        this.cardToCheck = null;
        this.hideCards();
        this.currentFlips = 0;
        this.timeRemaining = this.totalTime;
        this.matchedCards = [];
        this.busy = true;
        console.log(this.selectCards(20));
        setTimeout(() => {
            // this.audioController.startMusic();
            // this.shuffleCards();
            this.countDown = this.startCountDown();
            this.busy = false;
        }, 500);
    }
    selectCards(totalCards) {
        const xmasCards = [
            'bell', 
            'bells', 
            'calendar',
            'candles',
            'champagne',
            'dessert',
            'gingerbread',
            'gloves',
            'hat',
            'letter',
            'ornament',
            'ornament2',
            'ornament3',
            'ornament4',
            'polar_bear',
            'reindeer',
            'santa_smile',
            'santa_sunglasses',
            'sled',
            'snowglobe',
            'snowglobe2',
            'snowglobe3',
            'snowman',
            'sock',
            'star',
            'tree',
            'tree2',
            'wreath'
        ];
         let cardsNeeded = totalCards/2;
        const shuffledCards = this.shuffleCards(xmasCards);
        let cardList = shuffledCards.slice(shuffledCards.length - cardsNeeded);
        let cardSet = cardList.concat(cardList);
        return this.shuffleCards(cardSet);
    }
    shuffleCards(cardsArray) {
        let newCardsArray = cardsArray.slice();
        // for (let i = this.cardsArray.length - 1; i > 0; i--) {
        //     let randIndex = Math.floor(Math.random() * (i+1));
        //     this.cardsArray[randIndex].style.order = i;
        //     this.cardsArray[i].style.order = randIndex;
        // }
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
        this.cardsArray.forEach(card => {
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
        document.querySelector('#game-over-text').classList.add('visible');
        this.hideCards();
    }
    victory() {
        clearInterval(this.countDown);
        this.audioController.victory();
        document.querySelector('#victory-text').classList.add('visible');
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

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    const board = document.querySelector('#board');
    populateBoard(board);
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new Game(60, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}

function populateBoard(board) {
    for (let index = 1; index <= 20; index++) {
        
        const card = document.createElement('div');
        card.classList.add('card');
        //cardBack
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.classList.add('card-face');
        const imgBack = document.createElement('img');
        imgBack.src = "res/xmas/0_card_back.png";
        cardBack.appendChild(imgBack);
        //cardFront
        // const cardFront = document.createElement('div');
        // cardFront.classList.add('card-front');
        // cardFront.classList.add('card-face');
        // const imgFront = document.createElement('img');
        // imgFront.classList.add('card-value');
        // imgFront.src = "res/pokemons/dragonite.png";
        // cardFront.appendChild(imgFront);

        card.appendChild(cardBack);
        // card.appendChild(cardFront);
        board.appendChild(card);
    }
}

    ready();
