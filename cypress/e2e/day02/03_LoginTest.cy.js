/// <reference types="cypress" />

describe('Login Menu Test',()=>{
    it.skip('Test Case 1',()=>{
   cy.visit('https://automationexercise.com/')
   cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

   cy.contains('.signup-form > h2','New User Signup!')
   cy.contains('.login-form > h2','Login to your account')






    })
   
    it('Test Case 2',()=>{
        cy.visit('https://automationexercise.com/')
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
   //1. Yol
        cy.get('.signup-form > h2').should('contain','New User Signup!')

        //2.Yol
        cy.get('.signup-form > h2').then(emailtext =>{
            expect(emailtext.text()).to.equal('New User Signup!')
        })
//3. YOL

cy.get('.signup-form > h2').invoke('text').then(emailtext2 =>{
expect(emailtext2).to.equal('New User Signup!')

})


    })
   
   
   
   })