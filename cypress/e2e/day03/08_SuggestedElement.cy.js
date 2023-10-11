/// <reference types="cypress" />

describe('Suggested Elements',()=>{
    it('TEst Case 1',()=>{

   cy.visit('https://www.google.com')
   cy.get('#APjFqb').type('Yahoo')
 //1.yol
 //  
  // cy.get('#ERWdKc > .wM6W7d > span').contains('mail').click()
cy.get('li span b').contains('mail login').click()

    })
   
    it.skip('Test Case 2',()=>{
        cy.visit('https://automationexercise.com/')
   
       
    })
   
   
   
   })