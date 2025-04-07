import {
    GaragePage,
    AddCarPopUp,
    CarItem
} from "../support/poms";
import CarModels from "../support/poms/AddCarPopUp";

const garagePage: GaragePage = new GaragePage();
const addCarPopUp: AddCarPopUp = new AddCarPopUp();
const carItem: CarItem = new CarItem();

interface Car<Brand extends keyof CarModels> {
    brand: Brand,
    model: CarModels[Brand],
    milage: string | number
};

function addCar(car: Car): void {
    garagePage.addCarButton.click();
    addCarPopUp.popUpTitle.should("have.text", "Add a car");
    addCarPopUp.selectCar(car.brand, car.model, car.milage);
    addCarPopUp.addButton.click();
};

function removeCar(): void {
    carItem.editButton.click();
    cy.contains("button", "Remove car").click();
    cy.contains("button", "Remove").click();
};

describe("Testing garage flow", () => {
    beforeEach(() => {
        cy.authorizeToPortal();
        cy.login(
            Cypress.env().user1.email,
            Cypress.env().user1.password
        );
        cy.url().should("contain", "/panel/garage");
    });

    it("Test user successfully creates auto", () => {
        const car = {
            brand: "Porsche",
            model: "Cayenne",
            milage: 340123};

        addCar(car);

        carItem.item.should("exist").and("be.visible");
        carItem.carName
        .should("contain.text", car.brand)
        .and("contain.text", car.model);
        carItem.updateMilageInput.should('have.value', car.milage);

        removeCar();
    });

});

