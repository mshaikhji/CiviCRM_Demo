# CiviCRM_Demo

E2E Test written in Cypress with JavaScript

## Page objects

- Page Objects and Locators in cypress/support/pageObjects : Contains all logic for actions to be performed on each page.

### Scenarios:

- `addRelationship.spec.js`: e2e flow to create a new individual contact and add a new relationship for that contact.

## Requirements

- [NodeJS](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)

## Setup

```
- clone this repo to a local directory
- git clone https://github.com/mshaikhji/CiviCRM_Demo.git
- cd into the cloned repo
- cd zaapi
- install the node_modules
- npm install
```

## Run Tests

- Run in Browser: `npx cypress open`
- Run Headless: `npx cypress run`
