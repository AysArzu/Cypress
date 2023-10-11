/// <reference types="cypress" />

describe('Before After',()=>{

before( ()=>{

    cy.log('Her test dosyasından önce çalışacak')
})

after( ()=>{
    cy.log('Her test dosyasından sonra bir kere calışacak')
})

beforeEach( ()=>{
    cy.log('Her testten önce bir kere çalışacak')
})
afterEach(()=>{
    cy.log('Her testten sonra bir kere çalışacak')
})

    it('Test Case 1',()=>{
        // konsola birsey yazdırmak için kullanılır
   cy.log('Test Case 1')
   
   
    })
   
    it('Test Case 2',()=>{
   
        cy.log('Test Case 2')
       
    })
   
   
   
   })