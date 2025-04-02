export default class RegistrationPopUp {

    protected LOCATORS = {
        popUp: "div[class*='modal-dialog']",
        popUpTitle: "[class='modal-title']",
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

    get popUp() {
        return cy.get(this.LOCATORS.popUp);
    };

    get popUpTitle() {
        return cy.get(this.LOCATORS.popUpTitle);
    };

    get nameInput() {
         return cy.get(this.LOCATORS.nameInput);
    };

    get nameInputError() {
        return cy.get(this.LOCATORS.nameInputError);
    };

    get lastNameInput() {
         return cy.get(this.LOCATORS.lastNameInput);
    };

    get lastNameInputError() {
        return cy.get(this.LOCATORS.lastNameInputError);
    };

    get emailInput() {
         return cy.get(this.LOCATORS.emailInput);
    };

    get emailInputError() {
        return cy.get(this.LOCATORS.emailInputError);
    };

    get passwordInput() {
         return cy.get(this.LOCATORS.passwordInput);
    };

    get passwordInputError() {
        return cy.get(this.LOCATORS.passwordInputError);
    };

    get repeatPasswordInput() {
         return cy.get(this.LOCATORS.repeatPasswordInput);
    };

    get repeatPasswordInputError() {
        return cy.get(this.LOCATORS.repeatPasswordInputError);
    };

    get registerButton() {
        return cy.contains(
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
