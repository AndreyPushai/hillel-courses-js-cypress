import { Homepage } from "../support/poms";

const homepage: Homepage = new Homepage();

describe("Header tests for unauthorized user", () => {
    beforeEach(() => {
        cy.authorizeToPortal();
    });

    it("Test header exists", () => {
        homepage.header.should("exist");
        homepage.header.should("be.visible");
    });

    it("Test logo image is visible", () => {
        homepage.headerLogoLink.should("exist");
        homepage.headerLogoImage.should("be.visible");
    });

    it("Test navigation exists inside header", () => {
        homepage.navigation.should("exist");

    });
    it("Test Home button present in header", () => {
        homepage.homeLink.should("exist");
        homepage.homeLink.should("be.visible");
        homepage.homeLink.should("have.text", "Home");
    });

    it("Test About button present in header", () => {
        homepage.aboutButton.should("exist");
        homepage.aboutButton.should("be.visible");
        homepage.aboutButton.should("have.text", "About");
    });

    it("Test About button scrolls page to About section", () => {
        cy.window().then(win => {
            expect(win.scrollY).to.equal(0)
        });
        homepage.aboutButton.click();
        cy.wait(3_000);
        cy.window().then(win => {
            expect(win.scrollY).to.equal(517.5);
        });
    });

    it("Test Contacts button present in header", () => {
        homepage.contactsButton.should("exist");
        homepage.contactsButton.should("be.visible");
        homepage.contactsButton.should("have.text", "Contacts");
    });

    it("Test Contacts button scrolls page to Contacts section", () => {
        cy.window().then(win => {
            expect(win.scrollY).to.equal(0)
        });
        homepage.contactsButton.click();
        cy.wait(3_000);
        cy.window().then(win => {
            expect(win.scrollY).to.equal(738);
        });
    });

    it("Test Guest log in button present in header", () => {
        homepage.guestLogInButton.should("exist");
        homepage.guestLogInButton.should("be.visible");
        homepage.guestLogInButton.should("have.text", "Guest log in");
    });


    it("Test Guest log in button redirects to guest Garage page", () => {
        homepage.guestLogInButton.click();
        cy.url().should("include", "/panel/garage");
    });

    it("Test Sign In button present in header", () => {
        homepage.signInButton.should("exist");
        homepage.signInButton.should("be.visible");
        homepage.signInButton.should("have.text", "Sign In");
    });
});

describe("Contacts section", () => {
    beforeEach(() => {
        cy.authorizeToPortal();
    });

    it("Test Contacts section exists", () => {
        homepage.contactsSection.should("exist");
    });

    it("Test Facebook social network link", () => {
        homepage.facebookIcon
        .should("exist")
        .and("be.visible");
    
        homepage.facebookLink
        .should('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('https://www.facebook.com/Hillel.IT.School');
        });
    });

    it("Test Telegram social network link", () => {
        homepage.telegramIcon
        .should("exist")
        .and("be.visible");
    
        homepage.telegramLink
        .should('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('https://t.me/ithillel_kyiv');
        });
    });

    it("Test youtube social network link", () => {
        homepage.youtubeIcon
        .should("exist")
        .and("be.visible");
    
        homepage.youtubeLink
        .should('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('https://www.youtube.com/user/HillelITSchool?sub_confirmation=1');
        });
    });

    it("Test instagram social network link", () => {
        homepage.instagramIcon
        .should("exist")
        .and("be.visible");

        homepage.instagramLink
        .should('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('https://www.instagram.com/hillel_itschool/');
        });
    });

    it("Test linkedin social network link", () => {
        homepage.linkedinIcon
        .should("exist")
        .and("be.visible");

        homepage.linkedinLink
        .should('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('https://www.linkedin.com/school/ithillel/');
        });
    });

    it("Test contacts website link", () => {
        homepage.contactsLink
        .should("exist")
        .and("be.visible")
        .and("have.text", "ithillel.ua")
        .and('have.attr', 'href')
        .then((href) => {
            expect(href).to.include('https://ithillel.ua');
        });
    });

    it("Test email link", () => {
        homepage.emailLink
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
        cy.authorizeToPortal();
    });

    it("Test footer exists", () => {
        homepage.footer.should("be.visible");
    });

    it("Test logo image is visible", () => {
        homepage.footerLogoLink.should("exist");
        homepage.footerLogoImage.should("be.visible");
    });
});

