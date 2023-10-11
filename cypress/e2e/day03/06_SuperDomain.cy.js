/// <reference types="cypress" />

describe('SuperDomain',()=>{
    it('Test Case 1',()=>{
   cy.visit('https://www.amazon.com')
   cy.wait(3000)
   cy.visit('https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=nav_cs_customerservice')
   // Aynı domain içerisindeki 2. sayfalara gidebilirsiniz
    })
   
    it.only('Test Case 1A',()=>{
cy.visit('https://www.cypress.io')
cy.wait(3000)
cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
    
    })

    it('Test Case 2',()=>{
        cy.visit('https://www.google.com')
        cy.wait(3000)
         cy.visit('https://www.amazon.com')
   
       // hata verebilir aynı testte farklı adreslere götürmeyebiliyor. Bende hata vermedi 
    })
   
   
   
   })