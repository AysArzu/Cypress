
/// <reference types="cypress" />

describe('CustomCommands',()=>{
    it('Amazon Search',()=>{
cy.amazonSearch('iphone')
cy.get('.a-color-state').should('include.text','iphone')




    })
   
    it.skip('',()=>{
   
   
       
    })
   
   
   
   })