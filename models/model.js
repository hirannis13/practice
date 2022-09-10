import Inventory from "../utils/cardsInventory.js"

export default class Model {
    constructor() {
        this.cardList = new Inventory;
        this.cardList.addCard('What to do', 'To-do list');
        this.cardList.addCard('What to watch', 'Watch list');
        this.cardList.addCard('What to give', 'Gift list');
        this.cardList.addCard('What to buy', 'Shopping list');
    }
}