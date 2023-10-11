/// <reference types="cypress" />

context('My second test',()=>{
    //decribe yerine context kullanabiliriz

    beforeEach('Her Testten once calisacak',()=>{

        cy.visit('/')

    })
    it('URL testi',()=>{
   
   cy.url().should('include','google')
   cy.url().should('eq','https://www.google.com/')
   
    })
   
    it('Title testi',()=>{
   cy.title().should('include','Google')
   cy.title().should('equal','Google')
       
    })
   //skip testi yapmadan gecmemizi saglar
    it.skip('Search test',()=>{
        cy.get('.gLFyf').type('Cypress.io{enter}')
   //get():locate aliyoruz
   //type(): yazi gonderiyoruz
   //{enter}:Enter tusuna basiyoruz
   
    })
   
    it('Search testi',()=>{
        cy.get('.gLFyf',{timeout:3000}).type('Cypress.io{enter}')
   
       
    })
    // it.only() sadece bu testi calistir demek
    it.only('Click testi',()=>{
        cy.get('.gb_d').click()


    
    })
   
   })