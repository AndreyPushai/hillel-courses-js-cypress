export default class FuelExpensesPage {
    protected LOCATORS = {
        carsDropdownButton: "button[id='carSelectDropdown']",
    };

    get carsDropdownButton() {
        return cy.get(this.LOCATORS.carsDropdownButton);
    };

    carDropdownItem(name: string) {
        return cy.contains('li', name);
    };
};
