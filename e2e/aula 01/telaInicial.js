import { elem } from '../../support/pageObjects/tela-inicial.pageObjects';

export class telaInicial {

    inputText() {
        cy.get(elem.inputToDo).type("Braga");
    }
}
