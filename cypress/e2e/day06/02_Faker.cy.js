
/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Using Faker',()=>{
    it('Faker Login Testi',()=>{
   /*
   FAKER KURULUMU
https://www.npmjs.com/package/@faker-js/faker
npm install --save-dev @faker-js/faker
import { faker } from '@faker-js/faker'; bunu description üstüne koyarız
   */
   cy.visit('https://automationexercise.com/')
   cy.get('.shop-menu > .nav > :nth-child(4) > a').click()

let email = faker.internet.email()
cy.get('[data-qa="signup-email"]').type(email)
let firstName=faker.person.firstName('female')
  let userName = faker.internet.userName()
  let last_name=faker.person.lastName()
   cy.get('[data-qa="signup-name"]').type(userName)
   cy.get('[data-qa="signup-button"]').click()

   cy.get(':nth-child(4) > .top > [data-qa="title"]').click()

let password = faker.internet.password()
let zipcode = faker.location.countryCode()
let address = faker.location.streetAddress()
let city= faker.location.city()
let state= faker.location.state()
let mobileNumber= faker.phone.number()
   cy.get('[data-qa="password"]').type(password)

   cy.get('[data-qa="first_name"]').type(firstName)
    cy.get('[data-qa="last_name"]').type(last_name)

     cy.get('[data-qa="address"]').type(address) 
       cy.get('[data-qa="state"]').type(state) 
        cy.get('[data-qa="city"]').type(city)
         cy.get('[data-qa="zipcode"]').type(zipcode)  
   
   cy.get('[data-qa="mobile_number"]').type(mobileNumber)
     cy.get('[data-qa="create-account"]').click()

     cy.get('b').should('be.visible')
     cy.get('[data-qa="continue-button"]').click()
     cy.get('b').should('have.text',userName)

    })
   
   })
