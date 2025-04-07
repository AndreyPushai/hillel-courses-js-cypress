import BasePopUp from "./BasePopUp";


type CarModels = {
    Audi: "TT" | "R8" | "Q7" | "A6" | "A8",
    BMW: "3" | "5" | "X5" | "X6" | "Z3",
    Ford: "Fiesta" | "Focus" | "Fusion" | "Mondeo" | "Sierra",
    Porsche: "911" | "Cayenne" | "Panamera",
    Fiat: "Palio" | "Ducato" | "Panda" | "Punto" | "Scudo",
};

export default class AddCarPopUp extends BasePopUp {

    protected LOCATORS = {
        ...this.LOCATORS,
        brandSelect: "select[id='addCarBrand']",
        modelSelect: "select[id='addCarModel']",
        milageInput: "input[id='addCarMileage']",
        addButton: {element: "button", text: "Add"},
    };

    get brandSelect() {
        return this.popUp.find(this.LOCATORS.brandSelect);
    };

    get modelSelect() {
        return this.popUp.find(this.LOCATORS.modelSelect);
    };

    get milageInput() {
        return this.popUp.find(this.LOCATORS.milageInput);
    };

    get addButton() {
        return this.popUp.contains(
            this.LOCATORS.addButton.element,
            this.LOCATORS.addButton.text
        );
    };

    selectBrand(brand: "Audi" | "BMW" | "Ford" | "Porsche" | "Fiat"): void {
        this.brandSelect.select(brand);
    };

    selectModel(model: string): void {
        this.modelSelect.select(model);
    };

    selectCar<Brand extends keyof CarModels>(
        brand: Brand,
        model: CarModels[Brand],
        milage: string | number
    ): void {
        this.selectBrand(brand);
        this.selectModel(model);
        this.milageInput.type(milage);
    };
};
