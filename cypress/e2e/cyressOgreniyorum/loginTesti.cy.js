describe('ilk testlerimiz grup',()=>{
    it('test 1',()=>{
        cy.viewport('samsung-note9')

    cy.visit('https://test.urbanicfarm.com/')
    cy.url().should('equal','https://test.urbanicfarm.com/')
    cy.get('.section-2_title__1fvmB').should('be.visible')
    })
})