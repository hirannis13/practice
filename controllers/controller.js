export default class Controller {
    initialize(model,view) {
        this.model = model;
        this.view = view;
    }

    buildTemplate(card) {
        return `
        <div class="cards">
            <h2>${card.getcardName()}</h2>
            <h3>${card.getcardType()}</h3>
            <h3></h3><button type='button' id='${card.getcardName()}'>Delete</button></h3>
        </div>`;
    }


    showAllCards() {
        let template = '';
        for (const card of this.model.cardList.allCards()) {
                template += this.buildTemplate(card);
        }
        this.view.message(template);
    }

    newCard(card) {
        const doesCardAlreadyExist = this.model.cardList.getCard(card.cardName);

        if (doesCardAlreadyExist === null) {
            this.model.cardList.addcard(card.cardName, card.cardType);
            this.view.snackbar('The list was saved');
        } else {
            this.view.snackbar('The list already exist');
        }
    }

    deleteGuitar(sn) {
        this.model.cardList.deleteCard(sn);
        this.view.snackbar('The list was deleted!');
    }
}