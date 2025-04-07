export default class CarItem {
    protected LOCATORS = {
        item: "app-car",
        carName: "p[class*='car_name']",
        editButton: "button[class*='car_edit']",
        addFuelExpenseButton: "button[class*='car_add-expense']",
        updateMilageInput: "input[class*='update-mileage']",
        updateMilageButton: "button[class*='update-mileage']",
    };

	get item() {
		return cy.get(this.LOCATORS.item);
	};
	get carName() {
		return this.item.find(this.LOCATORS.carName);
	};
	get editButton() {
		return this.item.find(this.LOCATORS.editButton);
	};
	get addFuelExpenseButton() {
		return this.item.find(this.LOCATORS.addFuelExpenseButton);
	};
	get updateMilageInput() {
		return this.item.find(this.LOCATORS.updateMilageInput);
	};
	get updateMilageButton() {
		return this.item.find(this.LOCATORS.updateMilageButton);
	};
};
