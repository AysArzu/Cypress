/// <reference types="cypress" />

describe('Alerts',()=>{
    it.skip('Alert Test',()=>{
   cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
   cy.wait(3000)
   cy.get(':nth-child(1) > button').click()
   //Cypress otomatik olarak Alert Tamam butonuna tıklar.
   cy.get('#result').should('have.text','You successfully clicked an alert')

    })
   
    it.skip('Accept Alert Test 2',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)
        cy.get(':nth-child(2) > button').click()
       //2 seçenek var iptal ve tamam
       //cypress otomatik olarak tamam butonuna tıklar

       cy.get('#result').should('have.text','You clicked: Ok')

    })
   
    it.skip('Dismiss Alert Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)
        cy.get(':nth-child(2) > button').click()
        //Cypress otomatik olarak Tamam butonuna tıkladı

        //on()-> jQuery için bir fonksiyonur
        //browserda açılan pencerenin kontrolü için kullanılır
        cy.on('window:confirm',()=>{
            return false
            //return true -> default olarak tıkla demek
        })
        cy.get('#result').should('have.text','You clicked: Cancel')
       
    })
    it('Alert Text',()=>{
   
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.wait(3000)

        cy.window()// pop up windowları kontrol ediyoruz
        .then(($windowsElement)=>{
            //$windowsElement-> promt'a bilgi girer
cy.stub($windowsElement,'prompt').returns('Cypress')
cy.wait(4000)
 cy.get(':nth-child(3) > button').click()
        })
       
        cy.get('#result').should('have.text','You entered: Cypress')
    })
   
   })