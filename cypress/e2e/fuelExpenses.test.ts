import { 
    CarItem,
    AddExpensePopUp,
    FuelExpensesRow,
    RemoveEntryPopUp, 
} from "../support/poms";

const carItem: CarItem = new CarItem();
const addExpensePopUp: AddExpensePopUp = new AddExpensePopUp();
const removeEntryPopUp: RemoveEntryPopUp = new RemoveEntryPopUp();

describe("Testing fuel expenses flow", () => {
    beforeEach(() => {
        cy.authorizeToPortal();
        cy.login(
            Cypress.env().user2.email,
            Cypress.env().user2.password
        );
        cy.url().should("contain", "/panel/garage");
    });

    it("Test user can successfully add fuel expenses", () => {
        const expenses = {
            milage: 0,
            liters: 6,
            totalCost: 12.52
        };

        carItem.updateMilageInput.invoke("val").then((val) => {
            expenses.milage = Number(val);
            expenses.milage += 100;

            carItem.addFuelExpenseButton.click();
            addExpensePopUp.fillAndSubmit(
                expenses.milage,
                expenses.liters,
                expenses.totalCost
            );

            addExpensePopUp.popUp.should("not.exist");

            cy.url().should("contain", "/panel/expenses")

            const fuelExpensesRow: FuelExpensesRow = new FuelExpensesRow(0);
            fuelExpensesRow.milage
            .should("contain.text", `${expenses.milage}`);
            fuelExpensesRow.liters
            .should("contain.text", `${expenses.liters}L`);
            fuelExpensesRow.totalCost
            .should("contain.text", `${expenses.totalCost} USD`);
            
            fuelExpensesRow.deleteButton.click({force: true});
            removeEntryPopUp.removeButton.click();

            removeEntryPopUp.popUp.should("not.exist");
        });
    });
});
