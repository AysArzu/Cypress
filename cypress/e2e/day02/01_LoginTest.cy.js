/// <reference types="cypress" />

describe('Koala Resort Hotel',()=>{
    it('Login testi',()=>{
   cy.visit('https://qa-environment.koalaresorthotels.com/')
   
   //1.yol
  // cy.get('#navLogon > .nav-link').click()

  //2.yol
  cy.contains('Log in').click()
   //DOM da login textini bul ve tikla.log in kelimesini aradi
cy.url().should('include','/Account/Logon')
//username: manager
cy.get('#UserName').type('Manager')

//password:Manager1!
//1.yol
//cy.get('#Password').type('Manager1!')
//cy.get('#btnSubmit').click()

//2.yol
cy.get('#Password').type('Manager1!{enter}')


    })
   
    })
