export default class BasePopUp {

    protected LOCATORS = {
        popUp: "div[class*='modal-dialog']",
        popUpTitle: "[class='modal-title']",
    };

    get popUp() {
        return cy.get(this.LOCATORS.popUp);
    };

    get popUpTitle() {
        return cy.get(this.LOCATORS.popUpTitle);
    };
};
