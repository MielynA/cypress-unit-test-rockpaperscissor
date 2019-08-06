/// <reference types='Cypress'/> 
import { populateText } from '../../support/commands'


describe('Accessing Rock Paper Scissor Site', () => {
    it('Visit the Rock Paper Scissor localhost', () => {
        cy.visit('http://localhost:3000/#/')
    })
})

describe('click start button', ()=> {
    it('Clicks the start button', ()=> {
        cy.get(':nth-child(2) > :nth-child(2) > .btn').click()
    })
})

describe('Access the Profile', ()=> {
    it('Clicks the profile image button', ()=> {
        cy.get('.btn > img').click()
    })
})

describe('Populate the username', ()=> {
    it('Type your username', ()=> {
        cy.get('input').type('Mielyn Acosta')
        
    })
})

describe('Make sure your username name typed', ()=> {
    it('Validation if username is populated', ()=> {
        cy.get('input').should('have.value', 'Mielyn Acosta')
    })
})

describe('Click submit form', ()=> {
    it('Validates the submit button', ()=> {
        cy.get('button').contains('Submit form').click()
    })
})
describe('Click clear button', ()=> {
    it('Validates the clear button', ()=> {
        cy.get('button').contains('Clear').click()
    })
})
describe('Click close button', ()=> {
    it('Validates the close button', ()=> {
        cy.get('button').contains('Close').click()
    })
})

describe('Take screenshot', ()=>{
    it('Takes a screenshot of an image', ()=> {
        cy.screenshot('rockpaperscissors/')
    })
})