/// <reference types="Cypress" />

class testLocators
{
    searchField()
    {
        return cy.get('input[name="q"]')
    }

    calculator()
    {
        return cy.get('.card-section')
    }

    expression()
    {
        
        return cy.get('.vUGUtc')
    }

    result()
    {
        return cy.get('#cwos')
    }
}

export default testLocators