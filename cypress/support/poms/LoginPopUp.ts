import BasePopUp from "./BasePopUp";

export default class LoginPopUp extends BasePopUp{

    protected LOCATORS = {
        ...this.LOCATORS,
        emailInput: "input[id='signinEmail']",
        passwordInput: "input[id='signinPassword']",
        registrationButton: {element: "button", text: "Registration"},
        loginButton: {element: "button", text: "Login"},

    };

    get emailInput() {
        return this.popUp.find(this.LOCATORS.emailInput);
    };

    get passwordInput() {
        return this.popUp.find(this.LOCATORS.passwordInput);
    };

    get registrationButton() {
        return this.popUp.contains(
            this.LOCATORS.registrationButton.element,
            this.LOCATORS.registrationButton.text
        );
    };

    get loginButton() {
        return this.popUp.contains(
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
