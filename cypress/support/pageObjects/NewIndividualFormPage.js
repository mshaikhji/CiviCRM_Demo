import ContactDetailPage from "./ContactDetailPage";

class NewIndividualFormPage {
    firstNameField = '#first_name';
    lastNameField = '#last_name';
    saveButton = '#_qf_Contact_upload_view-bottom';

    inputFirstName(firstname) {
        cy.get(this.firstNameField).should('be.enabled').focus().clear().type(firstname);
    return this;
    }

    inputLastName(lastName) {
        cy.get(this.lastNameField).should('be.enabled').focus().clear().type(lastName);
    return this;
    }

    clickSaveButton() {
        cy.get(this.saveButton).should('be.enabled').click();
    return new ContactDetailPage;
    }

}

export default NewIndividualFormPage;