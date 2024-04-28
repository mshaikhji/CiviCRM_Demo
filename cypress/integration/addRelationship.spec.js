Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

import LoginPage from "../support/pageObjects/LoginPage";


const loginPage = new LoginPage();

describe("DemoQA test cases", () => {
  beforeEach(() => {
    cy.visit("https://qa-test:1z2a6iTzNmKPvHga@online-qa-test.ccdemo.site/");
    indexedDB.deleteDatabase("localforage");
  });

  it("Add new Relationship", () => {
    const date = new Date().getTime()
    const name = `Autoabc${date.toString()}`
    loginPage.
    inputUsername('civicrm_user')
    .inputPassword('civicrm_user')
    .clickLoginButton()
    .clickContactsTab()
    .clickNewIndividualOption()
    .inputFirstName(name)
    .inputLastName('AutoLastName')
    .clickSaveButton()
    .clickRelationshipTab()
    .clickAddRelationShipButton()
    .clickRelationshipTypeField()
    .selectGivenRelationshipType('Benefits Specialist')
    .typeSearchKeywordInContactField('test')
    .selectGivenContactFromList('1, Test')
    .clickSaveRelationshipButton()
    .verifyRelationshipIsAddedUnderCurrentRelationships('Benefits Specialist', '1, Test')

})
})
