/// <reference types="cypress" />

describe('ReadFile&Assert',()=>{
    it('Assert', ()=>{
  
        cy.readFile('./cypress/fixtures/users.json').then((userdata)=>{
expect(userdata[2].name).to.equal('Clementine Bauch')
expect(userdata[2].username).to.equal('Samantha')
expect(userdata[2].address.street).to.equal('Douglas Extension')
expect(userdata[2].company.name).to.equal('Romaguera-Jacobson')

   })
   
   
    })
   
  
   
   
   
   })