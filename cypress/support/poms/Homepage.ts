export default class Homepage {

    protected LOCATORS = {
        header: "header[class*='header']",
        headerLogoLink: "a[class='header_logo']",
        headerLogoImage: "a[class='header_logo'] svg",
        navigation: "nav[class*='header_nav']",
        homeLink: "nav a[class*='header-link']",
        aboutButton: "button[appscrollto='aboutSection']",
        contactsButton: "button[appscrollto='contactsSection']",
        guestLogInButton: "button[class='header-link -guest']",
        signInButton: "button[class*='header_signin']",

        // CONTACTS_SECTION_LOCATORS
        contactsSection: "div[id='contactsSection']",
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
        emailLink: "a[class='contacts_link h4']",

        // Footer
        footer: "footer[class*='footer']",
        footerLogoLink: "a[class='footer_logo']",
        footerLogoImage: "a[class='footer_logo'] svg",
    };

    get header() {
         return cy.get(this.LOCATORS.header);
    };

    get headerLogoLink() {
         return cy.get(this.LOCATORS.headerLogoLink);
    };

    get headerLogoImage() {
         return cy.get(this.LOCATORS.headerLogoImage);
    };

    get navigation() {
         return this.header.find(this.LOCATORS.navigation);
    };

    get homeLink() {
         return cy.get(this.LOCATORS.homeLink);
    };

    get aboutButton() {
         return this.navigation.find(this.LOCATORS.aboutButton);
    };

    get contactsButton() {
         return this.navigation.find(this.LOCATORS.contactsButton);
    };

    get guestLogInButton() {
         return this.header.find(this.LOCATORS.guestLogInButton);
    };

    get signInButton() {
         return this.header.find(this.LOCATORS.signInButton);
    };

    get contactsSection() {
         return cy.get(this.LOCATORS.contactsSection);
    };

    get facebookIcon() {
         return cy.get(this.LOCATORS.facebookIcon);
    };

    get facebookLink() {
         return cy.xpath(this.LOCATORS.facebookLink);
    };

    get telegramIcon() {
         return cy.get(this.LOCATORS.telegramIcon);
    };

    get telegramLink() {
         return cy.xpath(this.LOCATORS.telegramLink);
    };

    get youtubeIcon() {
         return cy.get(this.LOCATORS.youtubeIcon);
    };

    get youtubeLink() {
         return cy.xpath(this.LOCATORS.youtubeLink);
    };

    get instagramIcon() {
         return cy.get(this.LOCATORS.instagramIcon);
    };

    get instagramLink() {
         return cy.xpath(this.LOCATORS.instagramLink);
    };

    get linkedinIcon() {
         return cy.get(this.LOCATORS.linkedinIcon);
    };

    get linkedinLink() {
         return cy.xpath(this.LOCATORS.linkedinLink);
    };

    get contactsLink() {
         return cy.get(this.LOCATORS.contactsLink);
    };

    get emailLink() {
         return cy.get(this.LOCATORS.emailLink);
    };

    get footer() {
         return cy.get(this.LOCATORS.footer);
    };

    get footerLogoLink() {
         return cy.get(this.LOCATORS.footerLogoLink);
    };

    get footerLogoImage() {
         return cy.get(this.LOCATORS.footerLogoImage);
    };


};
