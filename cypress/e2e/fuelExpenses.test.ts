import { 
    CarItem,
    AddExpensePopUp,
    FuelExpensesRow,
    RemoveEntryPopUp,
    FuelExpensesPage
} from "../support/poms";

const carItem: CarItem = new CarItem();
const addExpensePopUp: AddExpensePopUp = new AddExpensePopUp();
const removeEntryPopUp: RemoveEntryPopUp = new RemoveEntryPopUp();
const fuelExpensesPage: FuelExpensesPage = new FuelExpensesPage();

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
            mileage: 0,
            liters: 6,
            totalCost: 12.52
        };

        carItem.updateMileageInput.invoke("val").then((val) => {
            expenses.mileage = Number(val);
            expenses.mileage += 100;

            carItem.addFuelExpenseButton.click();
            addExpensePopUp.fillAndSubmit(
                expenses.mileage,
                expenses.liters,
                expenses.totalCost
            );

            addExpensePopUp.popUp.should("not.exist");

            cy.url().should("contain", "/panel/expenses")

            const fuelExpensesRow: FuelExpensesRow = new FuelExpensesRow(0);
            fuelExpensesRow.mileage
            .should("contain.text", `${expenses.mileage}`);
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


function generateDate(): string {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
    const dd = String(today.getDate()).padStart(2, '0');

    return `${yyyy}-${mm}-${dd}`;
};


describe("Check functionality with API tests", () => {
    beforeEach(() => {
        cy.authorizeToPortal();
        return cy.signinWithAPI(
            Cypress.env().user2.email,
            Cypress.env().user2.password
        );
    });

    afterEach(() => {
        // Delete created car
        cy.get('@createdCarId').then(createdCarId => {
            cy.deleteCarWithAPI(createdCarId);
        });
    });


    it("Test car and fuel expenses added via API", () => {

        const car = {
            id: "",
            brand: {
                id: 3,
                name: "Ford"
            },
            model: {
                id: 13,
                name: "Fusion"
            },
            date: generateDate(),
            liters: 11,
            totalCost: 22.01,
            mileage: 140111,
            updatedMileage: 140222
        };

        // Create car
        cy.request({
            method: "POST",
            url: "api/cars",
            body: {
                "carBrandId": car.brand.id,
                "carModelId": car.model.id,
                "mileage": car.mileage
            },
        }).then(response => {
            expect(response.status).to.equal(201);
            cy.wrap(response.body.data.id).as('createdCarId');
        });

        cy.get('@createdCarId').then(createdCarId => {
            cy.createExpensesAPI(
                createdCarId,
                car.date,
                car.updatedMileage,
                car.liters,
                car.totalCost
            )
            .then(respData => {
                expect(respData.carId).to.equal(createdCarId);
                expect(respData.liters).to.equal(car.liters);
                expect(respData.mileage).to.equal(car.updatedMileage);
                expect(respData.reportedAt).to.equal(car.date);
                expect(respData.totalCost).to.equal(car.totalCost);
            });
        });
       
        // Check UI
        cy.contains("a", "Home").click();
        cy.contains("a", "Fuel expenses").click();

        fuelExpensesPage.carsDropdownButton
        .should("have.text", "Ford Fusion");

        const fuelExpensesRow: FuelExpensesRow = new FuelExpensesRow(0);
        fuelExpensesRow.mileage
        .should("contain.text", `${car.updatedMileage}`);
        fuelExpensesRow.liters
        .should("contain.text", `${car.liters}L`);
        fuelExpensesRow.totalCost
        .should("contain.text", `${car.totalCost} USD`);

    });

});
