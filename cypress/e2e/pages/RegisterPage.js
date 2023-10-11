class RegisterPage{
elements = {

    registerButton:()=> cy.get("a[href='/auth/register'].mr-2"),
    firstName:()=> cy.get('#registration_form_firstname'),
    lastName:()=>cy.get('#registration_form_lastname'),
      //email
    email:()=>  cy.get('#registration_form_email'),

      //password
     password:()=> cy.get('#registration_form_plainPassword'),

      //confirm password
     confirmPassword:()=> cy.get('#registration_form_confirmPassword'),
      //submit button
     submit:()=> cy.get('.btn')
}
registerMethod(userEmail){
    cy.visit('/');
this.elements.registerButton().click();
this.elements.firstName().type('ayse',{force:true});
this.elements.lastName().type('arzu',{force:true});
this.elements.email().type(email,{force:true});
this.elements.password().type("Cennet123",{force:true});
this.elements.confirmPassword().type("Cennet123",{force:true});
this.elements.submit().click();



}

}
export const registerPage = new RegisterPage()