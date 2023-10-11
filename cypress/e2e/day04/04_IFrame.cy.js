/// <reference types="cypress" />

describe('IFrame',()=>{
    it('IFrame Testi',()=>{
   cy.visit('https://the-internet.herokuapp.com/iframe')

   /*
 1)  plugin indireceğiz
https://www.npmjs.com/package/cypress-iframe
npm install -D cypress-iframe

2)Import plugin
require('cypress-iframe')
import 'cypress-iframe'

support dosyasındaki e2e.js dosyasına yazdık
3) Bu işlemlerden sonra cy.frameLoaded() ve cy.iframe() komutlarını kullanabileceğiz

*/
cy.frameLoaded('#mce_0_ifr')
//cy.frameLoaded('#mce_0_ifr') -> iframe'in yerini tanımladık
//driver.switchTo().frame('#mce_0_ifr') selenıum da boyleydi

cy.iframe().find('p').clear()
//cy.iframe() ->frame e git
//find('p') ->p tag'ını bul
//clear() -> metni temizle

cy.iframe().find('p').type('Ayşe yeni şeyler öğreniyor')
   
//cy.get('.large-4 > div > a').click()
cy.get('.large-4 > div > a').should('contain.text','Elemental Selenium').click()
    })
   
    it.skip('',()=>{
   
   
       
    })
   
   
   
   })