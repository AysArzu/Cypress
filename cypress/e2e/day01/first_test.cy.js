/// <reference types="cypress" />
///descripe ile testimizi tanimliyoruz mocha kutuphanesinden geliyor bu tanimlama
describe('My First Test',()=>{
    it('URL Testi',()=>{
   cy.visit('https://www.google.com/')
   // visit(URL): url e gidiyoruz
   cy.url().should('include','google')
   //should assert icin kullandik
    })
   
    it('Title testi',()=>{
        cy.visit('https://www.google.com/')
        cy.title().should('include','Google')
        cy.title().should('include','Goog')
        //title():sayfanin title ini alir
       
        cy.title().should('eq','Google')
    })
   
   
   
   })