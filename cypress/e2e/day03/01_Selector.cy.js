/// <reference types="cypress" />

describe('Selector Examples',()=>{
    it.skip('Css Selector',()=>{
   cy.visit('https://www.amazon.com')
   //1)By Tag Name
cy.get('input')
   //2) By id
   cy.get('#twotabsearchtextbox')
   //3)By Class
   cy.get('.nav-search-field')

   //4)By Attribute name and Value
   cy.get("input[type='text']")

//5)By 2 Attribute
cy.get("input[type='text'][id='twotabsearchtextbox']")


    })
   
    it('Xpath',()=>{
   cy.visit('https://www.google.com')
   //6 BY Xpath
   cy.xpath("//a[@class='gb_E']").should('include.text','Gmail')
       ///// <reference types="cypress-xpath" />  eğer hata alırsak su sekılde yazarız
       // xpath() algılanmaz ise 1. satıra üstteki kodu yazarız

       //require('cypress-xpath')
// yukarıdaki kodu e2e.cy.js dosyasına ekledik



     })
   
   
   
   })