/// <reference types="cypress" />

describe('Automation Excercise',()=>{
    before(function(){

        cy.fixture('automation').then(function(data){

            this.data=data
        })
    })
    it('Automation Excercise Login Testi',function(){
       // cy.visit('https://automationexercise.com/')
       cy.visit(this.data.url)
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
   
 cy.get('[data-qa="login-email"]').type(this.data.email)

        cy.get('[data-qa="login-password"]').type(this.data.password)
        cy.get('[data-qa="login-button"]').click()


        cy.get(':nth-child(10) > a').should('contain.text','istanbul')
    })

})