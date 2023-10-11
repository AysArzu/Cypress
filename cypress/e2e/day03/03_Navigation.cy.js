/// <reference types="cypress" />

describe('Navigation',()=>{
 it('Back, Forward, Refresh',()=>{
  
    cy.visit('https://qa-environment.koalaresorthotels.com/')
  
    cy.wait(3000)
  
    cy.contains('Log in').click()

    cy.wait(3000)

    //cy.go('back') 

    cy.go(-1)
// -1 önceki sayfaya git
    cy.wait(3000)

   // cy.go('forward')
   cy.go(1)
    cy.wait(3000)

    cy.reload()

 })

 it.only('Chasing Navigation',()=>{
    
    cy.visit('https://qa-environment.koalaresorthotels.com/')
  
    cy.wait(3000)
  
    cy.contains('Log in').click()

    cy.wait(3000)

    cy.go('back').go('forward').go(-1).go(1)

    cy.reload(true)
    //cy.reload(true) sayfayı hafızadan değil yeniden yükler
 })



})