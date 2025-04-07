export default class Sidebar {
    protected LOCATORS = {
        navigationSidebar: "nav[class*='sidebar']",
        garageLink: "a[routerlink='garage']",
        expensesLink: "a[routerlink='expenses']",
        instructionsLink: "a[routerlink='instructions']",
        profileLink: "a[routerlink='profile']",
        settingsLink: "a[routerlink='settings']",
        logOutLink: {element: "a", text: "Log out"},
    };

	get navigationSidebar() {
		return cy.get(this.LOCATORS.navigationSidebar);
	};

	get garageLink() {
		return this.navigationSidebar.find(this.LOCATORS.garageLink);
	};

	get expensesLink() {
		return this.navigationSidebar.find(this.LOCATORS.expensesLink);
	};

	get instructionsLink() {
		return this.navigationSidebar.find(this.LOCATORS.instructionsLink);
	};

	get profileLink() {
		return this.navigationSidebar.find(this.LOCATORS.profileLink);
	};

	get settingsLink() {
		return this.navigationSidebar.find(this.LOCATORS.settingsLink);
	};

	get logOutLink() {
		return this.navigationSidebar.contains(
            this.LOCATORS.logOutLink.element,
            this.LOCATORS.logOutLink.text
        );
	};
};
