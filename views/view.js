import Card from '../utils/cardsClass.js';
export default class View {
    constructor(controller) {
        const self = this;
        const cardDialogForm = document.getElementById('cardDialogForm');
        const addCardButton = document.getElementById('addCardButton');
        const cardDialog = document.getElementById('cardDialog');
        const cancelButton = document.getElementById('cancelButton');
        const searchResult = document.getElementById('searchResult');
        const hiddenSnField = document.getElementById('hiddenSnField');
        const confirmDialog = document.getElementById('confirmDialog');
        const confrimDialogForm = document.getElementById('confirmDialogForm');
        const cancelConfirmBtn = document.getElementById('cancelConfirmBtn');


        self.controller = controller;

        showAllCards.onload = function () {
            self.controller.showAllCards();
        }


        addCardButton.onclick = function () {
            cardDialogForm.reset ();
            cardDialog.showModal ();
        }

        cancelButton.onclick = function() {
            cardDialog.close ();
        }

        cardDialogForm.onsubmit = function() {
            self.controller.newCard ({
                name : document.getElementById('cardname').value,
                type : document.getElementById('cardtype').value,
            })
        }

        searchResult.onclick = function (e) {
            if (e.target.nodeName === 'BUTTON')
            hiddenSnField.value = e.target.id;
            confirmDialog.showModal();
        }

        cancelConfirmBtn.onclick = function () {
            confirmDialog.close();
        }

        confrimDialogForm.onsubmit = function () {
            self.controller.deleteCard(hiddenSnField.value);
            self.controller.showAllCards();
        }

    }


    snackbar(snackmessage) {
        const snackbar = document.getElementById('snackbar');
        snackbar.innerHTML = snackmessage;
        snackbar.className = 'show'
        setTimeout (function () {
            snackbar.className = snackbar.className.replace('show','');
        }, 3000);
    }
}

