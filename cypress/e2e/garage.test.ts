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
    mileage: string | number
};

type repsonseCarType = {
  id: number;
  brand: string;
  carBrandId: number;
  carCreatedAt: string;
  carModelId: number;
  initialMileage: number;
  logo: string;
  mileage: number;
  model: string;
  updatedMileageAt: string;
};

function addCar(car: Car): void {
    garagePage.addCarButton.click();
    addCarPopUp.popUpTitle.should("have.text", "Add a car");
    addCarPopUp.selectCar(car.brand, car.model, car.mileage);
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
            mileage: 340123};

        cy.intercept('POST', '/api/cars').as("createCarResponse");

        addCar(car);

        cy.wait('@createCarResponse').then(response => {
            cy.wrap(response.response.statusCode).should("eq", 201);
            cy.wrap(response.response.body.data.id).as('createdCarId');
        });

        cy.get('@createdCarId').then(() => {
            cy.getCarsAPI().then((carsList) => {
                cy.get('@createdCarId').then(createdCarId => {
                    const foundCar: repsonseCarType | undefined = carsList
                    .find((carObject: repsonseCarType) => {
                        return carObject.id == createdCarId
                    });

                    // eslint-disable-next-line
                    expect(foundCar).not.to.be.undefined;

                    expect(foundCar.brand).to.equal(car.brand);
                    expect(foundCar.model).to.equal(car.model);
                    expect(foundCar.mileage).to.equal(car.mileage);
                });
            });
        });

        carItem.item.should("exist").and("be.visible");
        carItem.carName
        .should("contain.text", car.brand)
        .and("contain.text", car.model);
        carItem.updateMileageInput.should('have.value', car.mileage);

        removeCar();
    });
});
