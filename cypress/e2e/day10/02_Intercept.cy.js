/// <reference types="cypress" />
//https://example.cypress.io/commands/waiting
//sayfada inspect yaptik sonra networke gittim. get comment'e tikladim ve 1 yane box acildi. 
//boxa basinca header response hepsi cikiyor. intersept ile dinleme yapacagiz
describe('Intercept',() => {
 
    it('',() => {
cy.visit('https://example.cypress.io/commands/waiting')

//cy.intercept('GET',https://jsonplaceholder.cypress.io/comments/1')
cy.intercept('GET','**/comments/*').as('getComment')
//Networku dinle
//as ->Daha sonra @isareti ile kullanmak uzere degisken atiyor
//@getComment ile 
//** bunlar onunde va basinda ne varsa al diye */

cy.get('.network-btn').click()

cy.wait('@getComment').its('response').then((response)=>{
    console.log(response)
    assert.equal(response.statusCode,200),'Status code control'
      })

    })
})
