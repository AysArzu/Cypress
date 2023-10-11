/// <reference types="cypress" />

describe('Scroll',()=>{
    it('Scrollintoview',()=>{
   
        cy.visit('https://qa-environment.koalaresorthotels.com/')
    cy.wait(3000)
    cy.get('.col-md-7 > .mb-4').scrollIntoView()
    //locate ettigimiz yerin altına sayfayı kaydırır

   cy.wait(3000)
   cy.get(':nth-child(9) > .container > .justify-content-center > .col-md-7 > h2')
   .scrollIntoView({duration:8000})

   //scrollTo(x,y)
   cy.scrollTo(0,0)

   cy.wait(3000)
   
   cy.scrollTo(0,500)
   //asagı indirir
   cy.wait(3000)
   
   cy.scrollTo('500px')
   cy.wait(3000)
  
   cy.scrollTo(0,-500)
   //yukarı cıkartır

    })
   
    it.skip('',()=>{
      
   
       
    })
   
   
   
   })