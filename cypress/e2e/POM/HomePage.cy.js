class HomePage{
getSigninLink(){
    return cy.contains('Signup').click()
}

}
export default HomePage