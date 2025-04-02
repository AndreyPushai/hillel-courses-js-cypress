export default class LoginPopUp {

    protected LOCATORS = {
        popUp: "div[class*='modal-dialog']",
        emailInput: "input[id='signinEmail']",
        passwordInput: "input[id='signinPassword']",
        registrationButton: {element: "button", text: "Registration"},
        loginButton: {element: "button", text: "Login"},

    };

    get popUp() {
        return cy.get(this.LOCATORS.popUp);
    };

    get emailInput() {
        return cy.get(this.LOCATORS.emailInput);
    };

    get passwordInput() {
        return cy.get(this.LOCATORS.passwordInput);
    };

    get registrationButton() {
        return cy.contains(
            this.LOCATORS.registrationButton.element,
            this.LOCATORS.registrationButton.text
        );
    };

    get loginButton() {
        return cy.contains(
            this.LOCATORS.loginButton.element,
            this.LOCATORS.loginButton.text
        );
    };

    fillAndSubmitForm(email: string, password: string) {
        this.emailInput.type(email);
        this.passwordInput.type(password, { sensitive: true });
        this.loginButton.click();
    };
};
