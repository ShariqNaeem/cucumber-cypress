/// <reference types="cypress" />

export class ForgetPasswordPage{
    setEmail(email){
        cy
        .get('input[type=email]')
        .type(email);
    }

    tapOnSubmitBtn(){
        cy
        .get('button[type=submit]')
        .click();
    }

    validateEmailError(){
        cy
        .get('form small')
        .should('contain.text', ' Enter Your Email Id. ')
    }

    validateSuccessMessage(){
        cy
        .get('.ajs-success')
        .should('be.visible')
    }

    validateErrorMessage(){
        cy
        .get('.ajs-error')
        .should('be.visible')
    }


}