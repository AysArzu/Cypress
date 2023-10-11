/// <reference types="cypress" />

describe('Write&ReadFile 2',()=>{
    it('Write&Read JSON File',()=>{
   
        cy.writeFile('./cypress/e2e/day07/05_UserData.json', { name:'Eliza', email:'ayse@gmail.com'})
   cy.readFile('./cypress/e2e/day07/05_UserData.json').then((user)=>{
expect(user.name).to.equal('Eliza')
expect(user.email).to.equal('ayse@gmail.com')

   })
    })
   
   
   
   
   })