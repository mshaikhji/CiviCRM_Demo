import NewIndividualFormPage from "./NewIndividualFormPage";

class HomePage {
    contactsTab = '[data-name="Contacts"] > a';
    newIndividual = '[data-name="New Individual"]';

    clickContactsTab() {
        cy.wait(2000)
        cy.get(this.contactsTab).should('be.visible').focus().should('be.focused').click();
        return this
    }

    clickNewIndividualOption() {
        cy.get(this.newIndividual).should('be.visible').click();
        return new NewIndividualFormPage;
    }
}

export default HomePage;