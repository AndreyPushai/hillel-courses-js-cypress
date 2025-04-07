import { 
    Homepage, LoginPopUp, RegistrationPopUp
} from "../support/poms";

const homepage: Homepage = new Homepage();
const loginPopUp: LoginPopUp = new LoginPopUp();
const registrationPopUp: RegistrationPopUp = new RegistrationPopUp();
const ts = Date.now(); // timestamp

describe("Positive Registration flow", () => {
    beforeEach(() => {
        cy.authorizeToPortal();
    });

    it("Test user successfully registered", () => {
        homepage.signInButton.click();
        loginPopUp.popUp.should("exist").and("be.visible");
        loginPopUp.registrationButton.click();

        registrationPopUp.popUpTitle.should("have.text", "Registration");
        registrationPopUp.fillAndSubmitForm(
            "name", "lastName", `test+${ts}@email.com`, "Password1");
        cy.url().should("include", "/panel/garage");

        cy.removeAccount();
    });
});

describe("Negative Registration flow", () => {
    beforeEach(() => {
        cy.authorizeToPortal();
        homepage.signInButton.click();
        loginPopUp.popUp.should("exist").and("be.visible");
        loginPopUp.registrationButton.click();
    });

    it("Test name validation", () => {
        registrationPopUp.nameInput.focus();
        registrationPopUp.nameInput.blur();
        registrationPopUp.nameInputError.should("exist");
        registrationPopUp.nameInputError.should("have.text", "Name required");

        registrationPopUp.nameInput.type("12");
        registrationPopUp.nameInputError.should("have.text", "Name is invalid");
        registrationPopUp.nameInput.clear();
        registrationPopUp.nameInput.type("a");
        registrationPopUp.nameInputError.should("have.text", "Name has to be from 2 to 20 characters long");
    });

    it("Test last name validation", () => {
        registrationPopUp.lastNameInput.focus();
        registrationPopUp.lastNameInput.blur();
        registrationPopUp.lastNameInputError.should("exist");
        registrationPopUp.lastNameInputError.should("have.text", "Last name required");

        registrationPopUp.lastNameInput.type("12");
        registrationPopUp.lastNameInputError.should("have.text", "Last name is invalid");
        registrationPopUp.lastNameInput.clear();
        registrationPopUp.lastNameInput.type("a");
        registrationPopUp.lastNameInputError.should("have.text", "Last name has to be from 2 to 20 characters long");
    });

    it("Test email validation", () => {
        registrationPopUp.emailInput.focus();
        registrationPopUp.emailInput.blur();
        registrationPopUp.emailInputError.should("exist");
        registrationPopUp.emailInputError.should("have.text", "Email required");

        registrationPopUp.emailInput.type("12");
        registrationPopUp.emailInputError.should("have.text", "Email is incorrect");
    });

    it("Test password validation", () => {
        registrationPopUp.passwordInput.focus();
        registrationPopUp.passwordInput.blur();
        registrationPopUp.passwordInputError.should("exist");
        registrationPopUp.passwordInputError.should("have.text", "Password required");

        registrationPopUp.passwordInput.type("12", { sensitive: true });
        registrationPopUp.passwordInputError.should("have.text", "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter");
    });

    it("Test re-enter password validation", () => {
        registrationPopUp.repeatPasswordInput.focus();
        registrationPopUp.repeatPasswordInput.blur();
        registrationPopUp.repeatPasswordInputError.should("exist");
        registrationPopUp.repeatPasswordInputError.should("have.text", "Re-enter password required");

        registrationPopUp.passwordInput.type("Password1", { sensitive: true });
        registrationPopUp.repeatPasswordInput.type("Password2", { sensitive: true });
        registrationPopUp.repeatPasswordInputError.should("have.text", "Passwords do not match");
    });

    it("Test submit button disabled in case of error", () => {
        registrationPopUp.nameInput.focus();
        registrationPopUp.lastNameInput.type("LastName");
        registrationPopUp.emailInput.type("test@email.com");
        registrationPopUp.passwordInput.type("Password1", { sensitive: true });
        registrationPopUp.repeatPasswordInput.type("Password1", { sensitive: true });
        registrationPopUp.registerButton.should("be.disabled");
    });

});
