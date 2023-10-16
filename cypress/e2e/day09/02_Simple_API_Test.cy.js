//https://jsonplaceholder.cypress.io/comments
/// <reference types="cypress" />

describe('Simple API Test',()=>{
   
    const requestUrl = 'https://jsonplaceholder.cypress.io/comments'
  
    it('Header Assert 1',()=>{
   cy.request(requestUrl).its('headers') //burada runner a baktik request satirina tikladik sonra inspekt yaptik,
   // console dedik ve oradaki verilere gore assert yaptik
   .its('content-type')
   .should('include','application/json; charset=utf-8')
   
    })
   
    it('Header Assert 2',()=>{
        cy.request({

            url:requestUrl,
            //url:'https://jsonplaceholder.cypress.io/comments' seklinde de olur
      method:'GET' }).its('headers').its('content-type')
      .should('include','application/json; charset=utf-8')
   
   
       
    })
   
   
   
   })