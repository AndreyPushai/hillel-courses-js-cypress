import BasePopUp from "./BasePopUp";

export default class AddExpensePopUp extends BasePopUp {

    protected LOCATORS = {
        ...this.LOCATORS,
        vehicleSelect: "select[id='addExpenseCar']",
        reportDateInput: "input[id='addExpenseDate']",
        milageInput: "input[id='addExpenseMileage']",
        litersInput: "input[id='addExpenseLiters']",
        totalCostInput: "input[id='addExpenseTotalCost']",
        addButton: {element: "button", text: "Add"}
    };

	get vehicleSelect() {
		return this.popUp.find(this.LOCATORS.vehicleSelect);
	};

	get reportDateInput() {
		return this.popUp.find(this.LOCATORS.reportDateInput);
	};

	get milageInput() {
		return this.popUp.find(this.LOCATORS.milageInput);
	};

	get litersInput() {
		return this.popUp.find(this.LOCATORS.litersInput);
	};

	get totalCostInput() {
		return this.popUp.find(this.LOCATORS.totalCostInput);
	};

    get addButton() {
        return this.popUp.contains(
            this.LOCATORS.addButton.element,
            this.LOCATORS.addButton.text
        );
    };

    fillAndSubmit(
        milage: number | string,
        litersNumber: number | string,
        totalCost: number | string
    ): void {

        this.milageInput.clear().type(milage);
        this.litersInput.type(litersNumber);
        this.totalCostInput.type(totalCost);
        this.addButton.click();
    };
};
