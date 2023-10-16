/// <reference types="cypress" />

describe('POST With Auth',() => {
 
    it('Test',() => {
        cy.request({
            url:'https://restful-booker.herokuapp.com/booking',
            method:'POST',
            auth:{"username" : "admin",
            "password" : "password123"},
            body:{
                "firstname": "Ayse",
                "lastname": "Arzu",
                "totalprice": 100,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2023-02-23",
                    "checkout": "2024-10-23"
                },
                "additionalneeds": "Breakfast"
            },
            token:"abc123"

        }).then((response)=>{
            console.log(response)
                expect(response.status).to.equal(200)
                expect(response.body.booking.firstname).to.eq('Ayse')
                expect(response.body.booking.lastname).to.eq('Arzu')
                expect(response.body.booking.totalprice).to.eq(100)
                expect(response.body.booking.depositpaid).to.eq(true)
                expect(response.body.booking.bookingdates.checkin).to.eq('2023-02-23')
                expect(response.body.booking.bookingdates.checkout).to.eq('2024-10-23')
                expect(response.body.booking.additionalneeds).to.eq('Breakfast')



        })


    })

})