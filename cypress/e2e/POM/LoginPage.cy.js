class LoginPage{
getEmail(){
    return  cy.get('[data-qa="login-email"]')
}
getPassword(){
    return cy.get('[data-qa="login-password"]')
}
getLoginButton(){
    cy.get('[data-qa="login-button"]').click({force:true})
}
getNameText(){
    return  cy.get(':nth-child(10) > a').should('contain.text','istanbul')
}
getHeader(){
    return cy.get('.shop-menu > .nav')
}
}
export default LoginPage