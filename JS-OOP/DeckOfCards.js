
//deck od cards class
class Deck{
    constructor(){
        this.cards = [
            '2 hearts','3 hearts','4 hearts','5 hearts','6 hearts','7 hearts','8 hearts','9 hearts' ,'10 hearts','jack hearts','queen hearts','king hearts','ace hearts',
            '2 clubs','3 clubs','4 clubs','5 clubs','6 clubs','7 clubs','8 clubs','9 clubs' ,'10 clubs','jack clubs','queen clubs','king clubs','ace clubs',
            '2 diamonds','3 diamonds','4 diamonds','5 diamonds','6 diamonds','7 diamonds','8 diamonds','9 diamonds' ,'10 diamonds','jack diamonds','queen diamonds','king diamonds','ace diamonds',
            '2 spades','3 spades','4 spades','5 spades','6 spades','7 spades','8 spades','9 spades' ,'10 spades','jack spades','queen spades','king spades','ace spades',
        ];
        }

    //method to reset the original order of cards
    reset(){
        // create a new instance of a deck and set this instances cards to new deck (freshly sorted!)
        let newDeck = new Deck();
        this.cards = newDeck.cards
        return this;
    }

    //method for shuffing cards
    shuffleDeck(){
        // go thru every card in deck and swap with random index in cards array
        for (let i = 0; i <  this.cards.length; i++){
            let randcardIndex = Math.floor(Math.random() * 52); //0-51
            let temp = this.cards[i];
            this.cards[i] = this.cards[randcardIndex];
            this.cards[randcardIndex] = temp;
        }  
        return this;
    }
    
    //method to pick one random card from the deck
    dealRandCard(){
        let cardIndex = Math.floor(Math.random() * this.cards.length); //random index 0 - 51 (or less if cards have been dealt)
        //to get that card we splice at that index
        let card = this.cards.splice(cardIndex, 1);
        return card
    }
    // method to deal one card from top of deck or last position in cards array
    dealCard(){
        let card = this.cards.pop();
        // console.log(card);
        return card;
    }

    dealHand(num){
        let hand = []
        for(let i = 0; i < num; i++){
            hand.push(this.dealCard());
        }
        return hand;
     }
}

myCards = new Deck();

// console.log(myCards); //unshuffeled deck
myCards.shuffleDeck();
console.log('shuffled:', myCards.cards); //shuffeled
let thisHand = myCards.dealHand(5);
console.log('this hand:', thisHand);
// console.log(myCards.cards.length);
// console.log(myCards.cards);
// myCards.reset()
// console.log('reset deck', myCards.cards);

bobsCards = new Deck();
console.log('Bobs cards:', bobsCards);
let randCard = bobsCards.dealRandCard();
console.log(randCard);
console.log('Bobs cards:', bobsCards);
