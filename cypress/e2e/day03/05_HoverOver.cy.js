/// <reference types="cypress" />

describe('Hover over',()=>{
    it('Test Case',()=>{
   cy.visit('https://www.amazon.com')
   cy.get('#icp-nav-flyout').trigger('mouseover')
   
   cy.wait(3000)
cy.contains('Change country/region.').click()
cy.get('#icp-dropdown').select('Turkey (Türkiye)',{force:true})
    })
   
  
})   