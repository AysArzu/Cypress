/// <reference types="cypress" />

describe('Checkboxes',()=>{
    it.skip('Single Checkbox',()=>{
        cy.visit('http://automationpractice.com/index.php')
   //cy.get('.sf-with-ul').first().click()
   //first() birden fazla web element var ise birinciyi seç demek

   cy.get('.sf-with-ul').eq(0).click()
    // eq(0) demek birinci elemente tıkla demek  
   
    cy.get('#layered_category_4').should('not.be.checked')
   //should('not.be.checked')--> Tıklı olmadığını test etti

    //Tıklama
    cy.get('#layered_category_4').check().should('be.checked')

   //Tıklamayı kaldır
    cy.get('#layered_category_4').uncheck().should('not.be.checked')


    })
   
    it.skip('All Checkboxes 1',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').eq(0).click()

        //Bütün checkboxlara tıkla
        cy.get("input[type='checkbox']").check()
        cy.wait(3000)

        //Bütün tıklamaları kaldırdık
        cy.get("input[type='checkbox']").uncheck()
    })
    it.skip('All checkboxes 2',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').eq(0).click()

        //1. kutuya tıkla
        cy.get("input[type='checkbox']").eq(0).check().should('be.checked')

          //5. kutuya tıkla
          cy.get("input[type='checkbox']").eq(4).check().should('be.checked')


            //12. kutuya tıkla
            cy.get("input[type='checkbox']").eq(11).check().should('be.checked')

          //tıklamaları kaldır
            cy.get("input[type='checkbox']").eq(0).uncheck().should('not.be.checked')
            //uncheck():Tıklamayı kaldırır
            //should('not.be.checked'):Tıklamanın kaldırıldığını ASSERT eder
    })
   
    it.skip('All checkboxes 3',()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.sf-with-ul').eq(0).click()

        cy.get("input[type='checkbox']").click({multiple:true})
        //click()-> Tek bir elemente tıklar
   //click({multiple:true}):Çoklu tıklamaya izin verir
       
   cy.get("input[type='checkbox']").parent().should('have.class','checked')
//19 checkbox ı tıklanmış mı diye assert ettik

    })
   
   
   })