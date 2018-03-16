//to build out further:  Add Game class the has deck, players; add BlackJack class that extends Game class ...


//deck od cards class
class Deck{
    constructor(){
        this.cards = [];
        this.reset();
        
    }
        // this.cards = [
        //     '2 hearts','3 hearts','4 hearts','5 hearts','6 hearts','7 hearts','8 hearts','9 hearts' ,'10 hearts','jack hearts','queen hearts','king hearts','ace hearts',
        //     '2 clubs','3 clubs','4 clubs','5 clubs','6 clubs','7 clubs','8 clubs','9 clubs' ,'10 clubs','jack clubs','queen clubs','king clubs','ace clubs',
        //     '2 diamonds','3 diamonds','4 diamonds','5 diamonds','6 diamonds','7 diamonds','8 diamonds','9 diamonds' ,'10 diamonds','jack diamonds','queen diamonds','king diamonds','ace diamonds',
        //     '2 spades','3 spades','4 spades','5 spades','6 spades','7 spades','8 spades','9 spades' ,'10 spades','jack spades','queen spades','king spades','ace spades',
        // ];
        // }

    //method to reset the original order of cards
    reset(){
        // create a new instance of a deck and set this instances cards to new deck (freshly sorted!)
        this.cards.length = 0;
        let suits = ['hearts', 'clubs', 'diamonds', 'spades'];
        let values = ['ace',2,3,4,5,6,7,8,9,10, 'jack', 'queen', 'king'];

        for (const suit of suits){
            for(const val of values){
                const card = new Card(suit, val);
                this.cards.push(card);
            }
        }
        return this;
    }

    //method for shuffing cards, false means shuffle remaining cards in deck, true means reset the deck then shuffle. 
    shuffleDeck(reset = false){

        //if the deck has ben used and there are less than 52 cards we need to reset the deck before we shuffle
        if (reset){
            //calls the reset method
            console.log('should we start a new game?!')
            this.cards = this.reset();
        }
        //console.log(this.cards.length, 'cards in deck');
        // go thru every card in deck and swap with random index in cards array
        for (let i = 0; i <  this.cards.length; i++){
            let randcardIndex = Math.floor(Math.random() * 52); //0-51
            let temp = this.cards[i];
            this.cards[i] = this.cards[randcardIndex];
            this.cards[randcardIndex] = temp;
        }  
        console.log('shuffling...')
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

    //number of cards to player
    dealHand (player, num){
        if (!(player instanceof Player)){
            throw new Error('dealer must select a player to deal the cards to...')
        }
        let hand = player.hand
        for(let i = 0; i < num; i++){
            hand.push(this.dealCard());
        }
        console.log(`the dealer dealt ${player.name} a hand of cards, ${this.cards.length} cards left in the deck`)
        return this;
     }
}

class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
        this.display = `${this.value} of ${this.suit}`
        this.image = this.suit.charAt(0) + this.determineVal(this.value) + '.png';
    }
    determineVal(value){
        if (typeof value === 'string'){
            if (value === 'ace'){
                return 1
            }
        }
        else if (value === 10){
            return 10;
        }
        return value.toString().charAt(0);
    }
}


class Player{
    constructor(name, hand){
        this.name = name;
        this.hand = [];
    }    
    
    takeCard(deck){
        if (!(deck instanceof Deck)){
           throw new Error('you need a deck of cards if you want to play a game!');
        }
        let card = deck.dealCard()
        this.hand.push(card);
        console.log(`${this.name} took a card, ${deck.cards.length} cards left in the deck`);
        return this
    }
    
    //index is position of card in players hand 
    discard(index){
        //safgaurd against user error to make sure index is in range
        if (index < 0 || index > this.hand.length-1){
            return console.log('you must select a card from your hand to discard');
        }
        let card = this.hand.splice(index, 1);
        console.log(`${this.name} disccarded a ${card}`)
        return this;
    }
}

myCards = new Deck();
greg = new Player('greg');
console.log(myCards);
myCards.shuffleDeck().shuffleDeck();
greg.takeCard(myCards);
console.log(greg.hand);
greg.discard(0, myCards);
console.log(greg);
myCards.dealHand(greg, 5);
console.log(greg.hand[0].display);
greg.discard(3)
console.log(greg);
greg.takeCard(myCards);
console.log(greg);
myCards.shuffleDeck(true); //pass in true because in shuffleDeck method false is default, true creates a new deck, flase shuffels remaining cards.

// testing for user error forgetting to supply instance of deck
// greg.takeCard();
//testing dealcards to non existant player
// let joe = "a bystadnder"
// myCards.dealHand(joe, 5);


//output from running lines 99-118:

// shuffling...
// shuffling...
// greg took a card, 51 cards left in the deck
// Player { name: 'greg', hand: [ 'queen clubs' ] }
// greg disccarded a queen clubs
// Player { name: 'greg', hand: [] }
// the dealer dealt greg a hand of cards, 46 cards left in the deck
// Player {
//   name: 'greg',
//   hand: 
//    [ '4 diamonds',
//      '10 diamonds',
//      '3 hearts',
//      'queen diamonds',
//      '8 diamonds' ] }
// greg disccarded a queen diamonds
// Player {
//   name: 'greg',
//   hand: [ '4 diamonds', '10 diamonds', '3 hearts', '8 diamonds' ] }
// greg took a card, 45 cards left in the deck
// Player {
//   name: 'greg',
//   hand: 
//    [ '4 diamonds',
//      '10 diamonds',
//      '3 hearts',
//      '8 diamonds',
//      '3 diamonds' ] }
// should we start a new game?!
// shuffling...

// you need a deck of cards if you want to play a game!
// dealer must select a player to deal the cards to...