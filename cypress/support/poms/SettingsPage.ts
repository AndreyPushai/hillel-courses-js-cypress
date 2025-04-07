export default class SettingsPage {
    protected LOCATORS = {
        removeMyAccountButton: {element: "button", text:"Remove my account"},
    };

    get removeMyAccountButton() {
        return cy.contains(
            this.LOCATORS.removeMyAccountButton.element,
            this.LOCATORS.removeMyAccountButton.text
        )
    };
};
