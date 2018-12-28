// Blackjack by Arka Mitra

// Card variable
const suits = ["Hearts", "Clubs", "Diamonds", "Spades"],
    values = ["Ace", "King", "Queen", "Jack",
        "Ten", "Nine", "Eight", "Seven",
        "Six", "Five", "Four", "Three",
        "Two"];

// Game variables
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

// DOM variables (needed for UI control)
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitMeButton = document.getElementById('hit-me-button');
let stayButton = document.getElementById('stay-button');

intialPageSetup();

console.log("You were dealt.");
console.log("First card  : " + getCardAsString(playerCards[0]));
console.log("Second card : " + getCardAsString(playerCards[1]));

// All function declarations and event handlers

function createDeckOfCards() {
    let deckOfCards = [];
    suits.forEach(cardSuit => {
        values.forEach(cardValue => {
            let card = {
                suit: cardSuit,
                value: cardValue
            };
            deckOfCards.push(card);
        })
    });
    return deckOfCards;
}

function getNextCard() {
    return deckOfCards.shift();
}

function getCardAsString(card) {
    return card.value + " of " + card.suit;
}

function intialPageSetup() {
    hitMeButton.style.display = 'none';
    stayButton.style.display = 'none';
}

function showStatus() {
    if (!gameStarted) {
        textArea.innerText = 'Welcome to Blackjack!';
        return;
    }
}

newGameButton.addEventListener('click', function () {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeckOfCards();
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];
    
    newGameButton.style.display = 'none';
    hitMeButton.style.display = 'inline';
    stayButton.style.display = 'inline';
});