/// <reference types="cypress" />

describe('ViewPorts',()=>{
    it.skip('',()=>{
   cy.visit('https://www.amazon.com')
   cy.viewport('iphone-8')
   cy.screenshot()
   
    })
   
    it('macbook-16',()=>{
   
        cy.visit('https://www.google.com')
        cy.viewport('iphone-8')
        cy.screenshot()
       
    })
    it('Custom Screen',()=>{
        cy.visit('https://www.google.com')
        cy.viewport(500,800)
        cy.screenshot()
       


    })
   
   
   
   })