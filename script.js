// Blackjack by Arka Mitra

console.log("Welcome to Backjack!");

let suits = ["Hearts", "Clubs", "Diamonds", "Spades"];

let values = ["Ace", "King", "Queen", "Jack",
    "Ten", "Nine", "Eight", "Seven",
    "Six", "Five", "Four", "Three", "Two"];

let deckOfCards = [];

suits.forEach(suit => {
    values.forEach(value => {
        deckOfCards.push(value + " of " + suit);
    })
});

// For dev purpose, print the values

deckOfCards.forEach(card => {
    console.log(card)
});