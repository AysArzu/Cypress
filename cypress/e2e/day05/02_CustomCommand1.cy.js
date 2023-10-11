/// <reference types="cypress" />

describe('Custom Command1',()=>{
    it.skip('Positive Login',()=>{
   cy.visit('https://automationexercise.com/')
   cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
   cy.get('[data-qa="login-email"]').type('istanbul@evim.com')
   cy.get('[data-qa="login-password"]').type('12345')
   cy.get('[data-qa="login-button"]').click()
   cy.get(':nth-child(10) > a').should('have.text',' Logged in as istanbul')


    })
   
    it.skip('Positive Login with Custom',()=>{

    cy.ae_login('istanbul@evim.com','12345')
    //ae_login ->comands.js dosyasında oluşturdugumuz fonksiyon
    cy.get(':nth-child(10) > a').should('have.text',' Logged in as istanbul')
    })
   
    it('Negative Test',()=>{
        cy.ae_login('istanbul@evim.com','123456')
   
        cy.get('.login-form > form > p').should('be.visible')
        cy.get('.login-form > form > p').should('have.text','Your email or password is incorrect!')
        cy.screenshot()
       // Your email or password is incorrect!
    })
   
   })