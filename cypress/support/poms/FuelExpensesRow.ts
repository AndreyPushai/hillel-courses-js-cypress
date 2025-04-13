export default class FuelExpensesRow {
    protected num: number;

    constructor(num: number) {
        this.num = num;
    }

    protected LOCATORS = {
        deleteButton: "button[class='btn btn-delete']",
        editButton: "button[class='btn btn-edit']"
    };

    get row() {
        return cy.get("tr").eq(this.num);
    };

    get date() {
        return this.row.get("td").eq(0);
    };

    get mileage() {
        return this.row.get("td").eq(1);
    };

    get liters() {
        return this.row.get("td").eq(2);
    };

    get totalCost() {
        return this.row.get("td").eq(3);
    };

    get deleteButton() {
        return this.row.get("td").eq(4)
        .find(this.LOCATORS.deleteButton);
    };

    get editButton() {
        return this.row.get("td").eq(4)
        .find(this.LOCATORS.editButton);
    };
};

