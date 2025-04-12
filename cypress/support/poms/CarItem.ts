export default class CarItem {
    protected LOCATORS = {
        item: "app-car",
        carName: "p[class*='car_name']",
        editButton: "button[class*='car_edit']",
        addFuelExpenseButton: "button[class*='car_add-expense']",
        updateMileageInput: "input[class*='update-mileage']",
        updateMileageButton: "button[class*='update-mileage']",
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
	get updateMileageInput() {
		return this.item.find(this.LOCATORS.updateMileageInput);
	};
	get updateMileageButton() {
		return this.item.find(this.LOCATORS.updateMileageButton);
	};
};
