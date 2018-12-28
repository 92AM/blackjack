// Blackjack by Arka Mitra

// Card variable
const suits = ["Hearts", "Clubs", "Diamonds", "Spades"],
      values = ["Ace", "King", "Queen", "Jack",
      "Ten", "Nine", "Eight", "Seven",
      "Six", "Five", "Four", "Three", 
      "Two"];

// DOM variables (needed for UI control)
let textArea = document.getElementById('text-area');
let newGameButton = document.getElementById('new-game-button');
let hitMeButton = document.getElementById('hit-me-button');
let stayButton = document.getElementById('stay-button');

intialPageSetup();

let deckOfCards = createDeckOfCards();
let playerCards = [getNextCard(), getNextCard()];

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

newGameButton.addEventListener('click', function() {
    textArea.innerText = 'New Game Started !';
    newGameButton.style.display = 'none';
    hitMeButton.style.display = 'inline';
    stayButton.style.display = 'inline';
});