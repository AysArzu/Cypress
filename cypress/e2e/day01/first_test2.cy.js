/// <reference types="cypress" />

describe('My First Test',function(){
    it('URL Testi',function(){
   cy.visit('https://www.google.com/')

   cy.url().should('include','google')
  
    })
   
    it('Title testi',function(){
        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
        cy.title().should('include','Goog')
      
       
        cy.title().should('eq','Google')
    })
   
   
   
   })