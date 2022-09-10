export default class Card {
    constructor (cardName, cardType) {
        this.cardName = cardName;
        this.cardType = cardType;
    }

    getcardName() {
        return this.cardName ;
    }

    getcardType() {
        return this.cardType; 
    }
}
