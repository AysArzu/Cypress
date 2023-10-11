import { faker } from '@faker-js/faker';
import { RegisterPage } from '../pages/RegisterPage';
describe('cypressta ikinci gunum',()=>{
    it.skip('register test 1',()=>{

      const userEmail = faker.internet.email()

        cy.visit('/')
        cy.get("a[href='/auth/register'].mr-2").click()
      
        // firstname
        cy.get('#registration_form_firstname').type('ayse',{force: true})
        
        //lastname
        cy.get('#registration_form_lastname').type('arzu',{force: true})

        //email
        cy.get('#registration_form_email').type(userEmail,{force: true})

        //password
        cy.get('#registration_form_plainPassword').type("Cennet123",{force: true})

        //confirm password
        cy.get('#registration_form_confirmPassword').type("Cennet123",{force: true})
        //submit button
        cy.get('.btn').click()
        
        //Cypress assertion 
        //gozukuyor mu
        cy.get('.Toastify__toast-container').should('be.visible')

        //gelen mesaj dogru  mu
        cy.get('.Toastify__toast-container').should('have.text',"Welcome!")
        

        cy.get('.Toastify__toast-container').invoke('text').then(toast=>{
            expect(toast).to.equal("Welcome!")
        })

    })
    it.skip('xpath kullanarak',()=>{

        const userEmail = faker.internet.email()
  
          cy.visit('/')
          cy.xpath("//a[text()='Register']").click()
        
          // firstname
          cy.get('#registration_form_firstname').type('ayse',{force: true})
          
          //lastname
          cy.get('#registration_form_lastname').type('arzu',{force: true})
  
          //email
          cy.get('#registration_form_email').type(userEmail,{force: true})
  
          //password
          cy.get('#registration_form_plainPassword').type("Cennet123",{force: true})
  
          //confirm password
          cy.get('#registration_form_confirmPassword').type("Cennet123",{force: true})
          //button
          cy.get('.btn').click()
          
          //Cypress assertion 
          //gozukuyor mu
          cy.get('.Toastify__toast-container').should('be.visible');
  
          //gelen mesaj dogru  mu
          cy.get('.Toastify__toast-container').should('have.text',"Welcome!");
          
  
          cy.get('.Toastify__toast-container').invoke('text').then(toast=>{
              expect(toast).to.equal("Welcome!");
          });
  
      })
      it.only('POM kullanarak',()=>{

        const userEmail = faker.internet.email();
        registerPage.registerMethod(userEmail);
            //Cypress assertion 
          //gozukuyor mu
          cy.get('.Toastify__toast-container').should('be.visible');
  
          //gelen mesaj dogru  mu
          cy.get('.Toastify__toast-container').should('have.text',"Welcome!");
          
  
          cy.get('.Toastify__toast-container').invoke('text').then(toast=>{
              expect(toast).to.equal("Welcome!");
          });
        
          });
  
      });
