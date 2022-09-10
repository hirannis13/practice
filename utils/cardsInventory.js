import Card from '../cardsClass.js'


export default class Inventory {
    constructor() {
        this.cards = [] ;
    }

    addCard (cardName, cardType) {
        const newCard = new Card (cardName, cardType)
        this.cards.push(newCard) ; 
    }

    getCard (cardName) {
        for (const card of this.cards) {
            if (cardName === card.cardName) {
                return card ; 
            }
        }
        //The value null represents the intentional absence of an object value
        return null;
    }



    allCards() {
        return this.cards;
    }

    deleteCard(sn) {
        const index=this.cards.map(card => card.cardName).indexOf(sn);
        this.card.splice(index, 1);
    }

}