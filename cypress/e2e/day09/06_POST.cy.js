//	https://dummy.restapiexample.com/api/v1/create

/// <reference types="cypress" />

describe('Post',()=>{
    it('Test',()=>{
   const bodyRequest=	{"name":"Cypress","salary":"200","age":"23"}
   
   cy.request({
    url:'https://dummy.restapiexample.com/api/v1/create',
    method:'POST',
    body:bodyRequest })
    .then(response=>{

    expect(response.status).to.equal(200)
    expect(response.body.status).to.equal('success')
    expect(response.body.message).to.equal('Successfully! Record has been added.')

   })
   
    })
   
   
   
   
   })