import RelationshipPage from "./RelationshipPage";

class ContactDetailPage {
    relatiopnshipsTab = '#ui-id-12'

    clickRelationshipTab() {
        cy.get(this.relatiopnshipsTab).should('be.visible').click();
    return new RelationshipPage;
    }
}

export default ContactDetailPage;