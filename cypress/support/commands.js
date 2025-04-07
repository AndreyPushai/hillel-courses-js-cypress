import {
    LoginPopUp,
    Homepage,
    RemoveAccountPopUp,
    SettingsPage,
    Sidebar,
} from "./poms";

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('authorizeToPortal', (email=Cypress.env("username"), password=Cypress.env("password")) => {
    cy.visit("", {
        auth: {
            username: email,
            password: password
        }
    })
});


Cypress.Commands.add('login', (email, password) => {

    cy.authorizeToPortal();
    const homepage = new Homepage();
    homepage.signInButton.click();

    const loginPopUp = new LoginPopUp();
    loginPopUp.fillAndSubmitForm(email, password);

});

Cypress.Commands.add('removeAccount', () => {

    const sidebar = new Sidebar();
    sidebar.settingsLink.click();
    cy.url().should("contain", "/panel/settings");

    const settingsPage = new SettingsPage();
    settingsPage.removeMyAccountButton.click();

    const removeAccountPopUp = new RemoveAccountPopUp();
    removeAccountPopUp
    .popUpTitle.should("have.text", "Remove account");
    removeAccountPopUp.removeButton.click();

    cy.url().should("contain", Cypress.config("baseUrl"));
});

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-xpath";
import "./commands";

