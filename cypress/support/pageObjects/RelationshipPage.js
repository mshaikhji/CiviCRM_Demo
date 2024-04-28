class RelationshipPage {
    addRelationshipButton = '.action-link > a';
    relationshipTypeField = '#select2-chosen-1';
    relationshipTypeList = '#select2-results-1';
    contactField = '#s2id_autogen2';
    contactsResultList = '#select2-drop';
    saveRelationshipButton = '[data-identifier="_qf_Relationship_upload"]';
    currentRelationshipsTable = '.crm-contact-relationship-current';
    relationshipRow = '[data-entity="relationship"]';

    clickAddRelationShipButton() {
        cy.get(this.addRelationshipButton).should('be.visible').click();
    return this;
    }

    clickRelationshipTypeField() {
        cy.wait(2000)
        cy.get(this.relationshipTypeField).should('be.visible').click();
        return this;
    }

    selectGivenRelationshipType(relationshipType) {
        cy.get(this.relationshipTypeList).find('div').contains(relationshipType).click();
        return this;
    }

    typeSearchKeywordInContactField(keyword) {
        cy.get(this.contactField).should('be.visible').click({force: true});
        cy.get(this.contactField).should('be.visible').focus().type(keyword);
        return this;
    }

    selectGivenContactFromList(contact) {
        cy.get(this.contactsResultList).find('div').contains(contact).click();
        return this;
    }

    clickSaveRelationshipButton() {
        cy.get(this.saveRelationshipButton).should('be.enabled').click();
        return this;
    }

    verifyRelationshipIsAddedUnderCurrentRelationships(relationshipType, contactName) {
        cy.wait(3000)
        cy.get(this.currentRelationshipsTable).find('tr').eq(1).find('td').find('a').should('contain', relationshipType)
        cy.get(this.currentRelationshipsTable).find('tr').eq(1).find('td').find('a').should('contain', contactName)
        return this;
    }

    

}

export default RelationshipPage;