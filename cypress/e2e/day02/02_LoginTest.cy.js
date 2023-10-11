/// <reference types="cypress" />

describe('Koala Resort Hotel',()=>{
    it('Login Test',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
     //   cy.contains('Log in').click()

 //     cy.contains('.nav-link','Log in').click()
   // cy.contains('li','Log in').click()
 cy.contains('log in',{matchCase:false}).click()
//   buyuk kucuk harf dikkate almadan metin olarak log içeren web elementini ara

// Assertion

//1) have.text
cy.get('#navLogon > .nav-link').should('have.text','Log in')
//locate edilen yerdeki metinde login yazıyor? Var mı? mu demek

//2) cy.url()
cy.url().should('include','Account/Logon')

//3) be.visible()
cy.get('.row > .mb-4').should('be.visible')


//4) cy.title
cy.title().should('eq','KoalaResortHotels - Log in')


//5) include.text
cy.get('#navLogon > .nav-link').should('include.text','Log in')
//locate edilen yerdeki metin login içeriyor mu?

//toplam link sayısı
cy.get('li a').should('have.length',29)

//find():Belirli bir html seçiminin alt elemanlarını bulmak için
cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2')
//cy.find() seklinde kullanılmaz
//cy.get().find() olarak kullanılır

//within() get,find bulamazsan son çare within kullanılır
cy.get('div.categories').within( ()=>{
    cy.get('a[href="/Rooms/320"]').click()
    
    //Parent='div.categories'
    //Child =a[href="/Rooms/320"]
})
/*
NOT:Web Elementleri önce get ile bulacağız.
Eğer get ile bulamazsak find()ile deneyeceğiz
Onunla da bulamazsak within()ile denemeliyiz!!!
*/

    })
   

   
   
   
   })