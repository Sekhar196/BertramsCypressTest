/// <reference types="Cypress" />

import testLocators from "../support/pageObject.js/locators"

describe('First Test', function () {

    const locators = new testLocators()

    beforeEach(() => {
        cy.visit('https://www.google.com/')

        locators.searchField()
                .type('2+2{enter}')
    })

    it('Verify Google Calculator', function ()
    {
        locators.calculator()
                .should('have.class', 'card-section')
    })

    it('Verify Calculator with 2+2', function () 
    {
        locators.expression()
                .should('contain', '  2 + 2 ')
    })

    it('Verify Calculator Result is 4', function () 
    {
        locators.result()
                .should('have.text', '4')
    })
})