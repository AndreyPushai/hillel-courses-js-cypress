import BasePopUp from "./BasePopUp";

export default class RegistrationPopUp extends BasePopUp {

    public LOCATORS = {
        ...this.LOCATORS,
        nameInput: "input[id='signupName']",
        nameInputError: "div[class='form-group']:has(input[id='signupName']) div[class='invalid-feedback'] p",
        lastNameInput: "input[id='signupLastName']",
        lastNameInputError: "div[class='form-group']:has(input[id='signupLastName']) div[class='invalid-feedback'] p",
        emailInput: "input[id='signupEmail']",
        emailInputError: "div[class='form-group']:has(input[id='signupEmail']) div[class='invalid-feedback'] p",
        passwordInput: "input[id='signupPassword']",
        passwordInputError: "div[class='form-group']:has(input[id='signupPassword']) div[class='invalid-feedback'] p",
        repeatPasswordInput: "input[id='signupRepeatPassword']",
        repeatPasswordInputError: "div[class='form-group']:has(input[id='signupRepeatPassword']) div[class='invalid-feedback'] p",
        registerButton: {element: "button", text: "Register"}

    };

    get nameInput() {
         return this.popUp.get(this.LOCATORS.nameInput);
    };

    get nameInputError() {
        return this.popUp.get(this.LOCATORS.nameInputError);
    };

    get lastNameInput() {
         return this.popUp.get(this.LOCATORS.lastNameInput);
    };

    get lastNameInputError() {
        return this.popUp.get(this.LOCATORS.lastNameInputError);
    };

    get emailInput() {
         return this.popUp.get(this.LOCATORS.emailInput);
    };

    get emailInputError() {
        return this.popUp.get(this.LOCATORS.emailInputError);
    };

    get passwordInput() {
         return this.popUp.get(this.LOCATORS.passwordInput);
    };

    get passwordInputError() {
        return this.popUp.get(this.LOCATORS.passwordInputError);
    };

    get repeatPasswordInput() {
         return this.popUp.get(this.LOCATORS.repeatPasswordInput);
    };

    get repeatPasswordInputError() {
        return this.popUp.get(this.LOCATORS.repeatPasswordInputError);
    };

    get registerButton() {
        return this.popUp.contains(
            this.LOCATORS.registerButton.element,
            this.LOCATORS.registerButton.text
        );
    };

    fillAndSubmitForm(name: string,
                      lastName: string,
                      email: string,
                      password: string): void {

        this.nameInput.type(name);
        this.lastNameInput.type(lastName);
        this.emailInput.type(email);
        this.passwordInput.type(password, { sensitive: true });
        this.repeatPasswordInput.type(password, { sensitive: true });
        this.registerButton.click();
    };
};
