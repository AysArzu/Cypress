/// <reference types="cypress" />

describe('DragAndDrop',()=>{
    it('DragAndDrop',()=>{
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
   /*
   https://www.npmjs.com/package/@4tw/cypress-drag-drop
   npm install --save-dev @4tw/cypress-drag-drop
   plugini yükledik
   require('@4tw/cypress-drag-drop') bunu da e2e.js ye ekledik
   */
   cy.get('#column-a') //süreklenecek web elementi
   .drag('#column-b') // sürüklenecek elementin gideceği yer
  
    })
   
    it.only('drag and drop 2',()=>{


   const dataTransfer =new DataTransfer();
   cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    cy.get('#column-a').trigger('dragstart', {dataTransfer})

    cy.get('#column-b').trigger('drop',{dataTransfer})
       
    })
   
   
   
   })