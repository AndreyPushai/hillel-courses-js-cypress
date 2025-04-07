export default class GaragePage {
    protected LOCATORS = {
        addCarButton: {element: "button", text: "Add car"},
    };

    get addCarButton() {
        return cy.contains(
            this.LOCATORS.addCarButton.element,
            this.LOCATORS.addCarButton.text
        );
    };
};
