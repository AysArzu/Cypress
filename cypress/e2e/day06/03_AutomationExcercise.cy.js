/// <reference types="cypress" />

describe('Automation Excercise',()=>{
    it('Automation Excercise Login Testi',()=>{
        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
   
 cy.get('[data-qa="login-email"]').type('istanbul@evim.com')

        cy.get('[data-qa="login-password"]').type(12345)
        cy.get('[data-qa="login-button"]').click()


        cy.get(':nth-child(10) > a').should('contain.text','istanbul')
    })
   
    it.skip('',()=>{
       
   
       
    })
   
   
   
   })