/// <reference types="cypress" />

import HomePage from "../POM/HomePage.cy"
import LoginPage from "../POM/LoginPage.cy"

describe('Automation Excercise',()=>{
    before(function(){

        cy.fixture('automation').then(function(data){

            this.data=data
        })
    })
    it('Automation Excercise Login Testi',function(){
     const homePage = new HomePage()
     const loginPage =  new LoginPage()
       cy.visit(this.data.url)
       // cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
   homePage.getSigninLink()
 //cy.get('[data-qa="login-email"]').type(this.data.email)
   loginPage.getEmail().type(this.data.email)

      //  cy.get('[data-qa="login-password"]').type(this.data.password)
loginPage.getPassword().type(this.data.password)

      //  cy.get('[data-qa="login-button"]').click()
loginPage.getLoginButton()

      //  cy.get(':nth-child(10) > a').should('contain.text','istanbul')
loginPage.getNameText()

loginPage.getHeader().should('contain.text','Home')
//3 tane ayni baslikla vardi onlarin arasindan bulduk
    })

})