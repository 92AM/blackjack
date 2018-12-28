// Blackjack by Arka Mitra

console.log("Welcome to Backjack!");

const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];

const values = ["Ace", "King", "Queen", "Jack",
    "Ten", "Nine", "Eight", "Seven",
    "Six", "Five", "Four", "Three", "Two"];

let deckOfCards = createDeckOfCards();
let playerCards = [getNextCard(), getNextCard()];

// For dev purpose, print the full deck of cards
// deckOfCards.forEach(card => {
//     console.log(card)
// });

console.log("You were dealt.");
console.log("First card  : " + playerCards[0]);
console.log("Second card : " + playerCards[1]);

// All function definitions

function createDeckOfCards() {
    let deckOfCards = [];
    suits.forEach(suit => {
        values.forEach(value => {
            deckOfCards.push(value + " of " + suit);
        })
    });
    return deckOfCards;
}

function getNextCard() {
    return deckOfCards.shift();
}