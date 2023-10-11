/// <reference types="cypress" />

describe('Write&Read File',()=>{
    it('Write File',()=>{

   cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','Cypress Notes\n')
   cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','1)Cypress install\n',{flag:'a+'})
   cy.writeFile('./cypress/e2e/day07/03_NotDefteri.txt','2)Plugins\n',{flag:'a+'})
//\n bir alt satira gider
// {flag:'a+'} satiri dosyaya kaydeder.
    })
   
    it.only('Read File',()=>{
   
   cy.readFile('./cypress/e2e/day07/03_NotDefteri.txt').should('contain','Plugin')

    })
   
   
   
   })