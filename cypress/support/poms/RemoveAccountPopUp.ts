import BasePopUp from "./BasePopUp";

export default class RemoveAccountPopUp extends BasePopUp {

    protected LOCATORS = {
        ...this.LOCATORS,
        removeButton: {element: "button", text: "Remove"},
    };

    get removeButton() {
        return this.popUp.contains(
            this.LOCATORS.removeButton.element,
            this.LOCATORS.removeButton.text
        );
    };
};
