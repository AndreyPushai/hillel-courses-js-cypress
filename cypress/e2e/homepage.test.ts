const HEADER_LOCATORS = {
    header: "header[class*='header']",
    logoLink: "a[class='header_logo']",
    logoImage: "a[class='header_logo'] svg",
    navigation: "nav[class*='header_nav']",
    homeLink: "nav a[class*='header-link']",
    aboutButton: "button[appscrollto='aboutSection']",
    contactsButton: "button[appscrollto='contactsSection']",
    guestLogInButton: "button[class='header-link -guest']",
    signInButton: "button[class*='header_signin']"
};

const FOOTER_LOCATORS = {
    footer: "footer[class*='footer']",
    logoLink: "a[class='footer_logo']",
    logoImage: "a[class='footer_logo'] svg",
};

const CONTACTS_SECTION_LOCATORS = {
    section: "div[id='contactsSection']",
    facebookIcon: "span[class*='icon-facebook']",
    facebookLink: "//span[contains(@class,'icon-facebook')]/parent::a",
    telegramIcon: "span[class*='icon-telegram']",
    telegramLink: "//span[contains(@class,'icon-telegram')]/parent::a",
    youtubeIcon: "span[class*='icon-youtube']",
    youtubeLink: "//span[contains(@class,'icon-youtube')]/parent::a",
    instagramIcon: "span[class*='icon-instagram']",
    instagramLink: "//span[contains(@class,'icon-instagram')]/parent::a",
    linkedinIcon: "span[class*='icon-linkedin']",
    linkedinLink: "//span[contains(@class,'icon-linkedin')]/parent::a",
    contactsLink: "a[class='contacts_link display-4']",
    emailLink: "a[class='contacts_link h4']"
};

describe("Header tests for unauthorized user", () => {
    beforeEach(() => {
        cy.login();
    });

    it("Test header exists", () => {
        cy.get(HEADER_LOCATORS.header).should("be.visible");
    });

    it("Test logo image is visible", () => {
        cy.get(HEADER_LOCATORS.logoLink).should("exist");
        cy.get(HEADER_LOCATORS.logoImage).should("be.visible");
    });

    it("Test navigation exists inside header", () => {
        cy.get(HEADER_LOCATORS.header)
        .find(HEADER_LOCATORS.navigation)
        .should("exist");

    });
    it("Test Home button present in header", () => {
        cy.get(HEADER_LOCATORS.homeLink).should("exist");
        cy.get(HEADER_LOCATORS.homeLink).should("be.visible");
        cy.get(HEADER_LOCATORS.homeLink).should("have.text", "Home");
    });

    it("Test About button present in header", () => {
        cy.get(HEADER_LOCATORS.navigation)
        .find(HEADER_LOCATORS.aboutButton)
        .should("exist");
        cy.get(HEADER_LOCATORS.aboutButton).should("be.visible");
        cy.get(HEADER_LOCATORS.aboutButton).should("have.text", "About");
    });

    it("Test About button scrolls page to About section", () => {
        cy.window().then(win => {
            expect(win.scrollY).to.equal(0)
        });
        cy.get(HEADER_LOCATORS.aboutButton).click();
        cy.wait(3_000);
        cy.window().then(win => {
            expect(win.scrollY).to.equal(517.5);
        });
    });

    it("Test Contacts button present in header", () => {
        cy.get(HEADER_LOCATORS.navigation)
        .find(HEADER_LOCATORS.contactsButton)
        .should("exist");
        cy.get(HEADER_LOCATORS.contactsButton).should("be.visible");
        cy.get(HEADER_LOCATORS.contactsButton)
        .should("have.text", "Contacts");
    });

    it("Test Contacts button scrolls page to Contacts section", () => {
        cy.window().then(win => {
            expect(win.scrollY).to.equal(0)
        });
        cy.get(HEADER_LOCATORS.contactsButton).click();
        cy.wait(3_000);
        cy.window().then(win => {
            expect(win.scrollY).to.equal(738);
        });
    });

    it("Test Guest log in button present in header", () => {
        cy.get(HEADER_LOCATORS.header)
        .find(HEADER_LOCATORS.guestLogInButton)
        .should("exist");
        cy.get(HEADER_LOCATORS.guestLogInButton).should("be.visible");
        cy.get(HEADER_LOCATORS.guestLogInButton)
        .should("have.text", "Guest log in");
    });

    it("Test Contacts button present in header", () => {
        cy.get(HEADER_LOCATORS.header)
        .find(HEADER_LOCATORS.signInButton)
        .should("exist");
        cy.get(HEADER_LOCATORS.signInButton).should("be.visible");
        cy.get(HEADER_LOCATORS.signInButton)
        .should("have.text", "Sign In");
    });
});

describe("Contacts section", () => {
    beforeEach(() => {
        cy.login();
    });

    it("Test Contacts section exists", () => {
        cy.get(CONTACTS_SECTION_LOCATORS.section).should("exist");
    });

    it("Test Facebook social network link", () => {
        cy.get(CONTACTS_SECTION_LOCATORS.facebookIcon)
        .should("exist")
        .and("be.visible");
    
        cy.xpath(CONTACTS_SECTION_LOCATORS.facebookLink)
        .should('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('https://www.facebook.com/Hillel.IT.School');
        });
    });

    it("Test Telegram social network link", () => {
        cy.get(CONTACTS_SECTION_LOCATORS.telegramIcon)
        .should("exist")
        .and("be.visible");
    
        cy.xpath(CONTACTS_SECTION_LOCATORS.telegramLink)
        .should('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('https://t.me/ithillel_kyiv');
        });
    });

    it("Test youtube social network link", () => {
        cy.get(CONTACTS_SECTION_LOCATORS.youtubeIcon)
        .should("exist")
        .and("be.visible");
    
        cy.xpath(CONTACTS_SECTION_LOCATORS.youtubeLink)
        .should('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
        });
    });

    it("Test instagram social network link", () => {
        cy.get(CONTACTS_SECTION_LOCATORS.instagramIcon)
        .should("exist")
        .and("be.visible");
    
        cy.xpath(CONTACTS_SECTION_LOCATORS.instagramLink)
        .should('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('https://www.instagram.com/hillel_itschool/');
        });
    });

    it("Test linkedin social network link", () => {
        cy.get(CONTACTS_SECTION_LOCATORS.linkedinIcon)
        .should("exist")
        .and("be.visible");
    
        cy.xpath(CONTACTS_SECTION_LOCATORS.linkedinLink)
        .should('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('https://www.linkedin.com/school/ithillel/');
        });
    });

    it("Test contacts website link", () => {
        cy.get(CONTACTS_SECTION_LOCATORS.contactsLink)
        .should("exist")
        .and("be.visible")
        .and("have.text", "ithillel.ua")
        .and('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('https://ithillel.ua');
        });
    });

    it("Test email link", () => {
        cy.get(CONTACTS_SECTION_LOCATORS.emailLink)
        .should("exist")
        .and("be.visible")
        .and("have.text", "support@ithillel.ua")
        .and('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('mailto:developer@ithillel.ua');
        });
    });
});

describe("Footer tests for unauthorized user", () => {
    beforeEach(() => {
        cy.login();
    });

    it("Test footer exists", () => {
        cy.get(FOOTER_LOCATORS.footer).should("be.visible");
    });

    it("Test logo image is visible", () => {
        cy.get(FOOTER_LOCATORS.logoLink).should("exist");
        cy.get(FOOTER_LOCATORS.logoImage).should("be.visible");
    });
});

