// Blackjack by Arka Mitra

console.log("Welcome to Backjack!");

const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];

const values = ["Ace", "King", "Queen", "Jack",
    "Ten", "Nine", "Eight", "Seven",
    "Six", "Five", "Four", "Three", "Two"];

function createDeckOfCards() {
    let deckOfCards = [];
    suits.forEach(suit => {
        values.forEach(value => {
            deckOfCards.push(value + " of " + suit);
        })
    });
    return deckOfCards;
}

const deckOfCards = createDeckOfCards();

// For dev purpose, print the full deck of cards
deckOfCards.forEach(card => {
    console.log(card)
});