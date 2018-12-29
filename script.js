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

// All function declarations and event handlers

/**
 * @desc sets up deck of cards
 * @returns array of card(s)
 */
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

/**
 * @desc gets the next card in the deck
 * @return card - removes the first element from the array and returns it
 */
function getNextCard() {
    return deck.shift();
}

/**
 * @desc gets card object as a string, this will include "card value of card suit"
 * @param {*} card 
 * @return String - "card value of card suit" 
 */
function getCardAsString(card) {
    return card.value + " of " + card.suit;
}

/**
 * @desc sets up the initial display on page load
 */
function intialPageSetup() {
    hitMeButton.style.display = 'none';
    stayButton.style.display = 'none';
}

/**
 * @desc displays status
 */
function showStatus() {
    if (!gameStarted) {
        textArea.innerText = 'Welcome to Blackjack!';
        return;
    }

    // deck.forEach(card => {
    //     textArea.innerText += '\n' + getCardAsString(card);
    // });
}

/**
 * @desc shuffles deck of cards
 * @param {*} deck 
 */
function shuffleDeck(deck) {
    deck.forEach( card => {
        const swapIdx = Math.trunc(Math.random() * deck.length);
        [deck[swapIdx], card] = [card, deck[swapIdx]];
    });
}

newGameButton.addEventListener('click', function () {
    gameStarted = true;
    gameOver = false;
    playerWon = false;

    deck = createDeckOfCards();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];
    
    newGameButton.style.display = 'none';
    hitMeButton.style.display = 'inline';
    stayButton.style.display = 'inline';

    showStatus();
});