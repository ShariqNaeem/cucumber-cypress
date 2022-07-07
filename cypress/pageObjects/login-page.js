/// <reference types="cypress" />

export class LoginPage{

    TapOnForgotPassword(){
        cy
        .get('form.form-signin a')
        .click();
    }

    ValidateEmailError(){
        cy
        .get('div.form-group:nth-child(1) small')
        .should('contain.text','Please enter valid email address.');
    }
    
    ValidatePasswordError(){
        cy
        .get('div.form-group:nth-child(2) small')
        .should('contain.text','Please enter valid password.');
    }

    ValidatePasswordLengthError(){
        cy
        .get('div.form-group:nth-child(2) small')
        .should('contain.text','Password length can be between 8 and 13.');
    }

    ValidateRoleError(){
        cy
        .get('div.form-group:nth-child(3) small')
        .should('contain.text','Please Select Role.');
    }

    ValidateLanguageError(){
        cy
        .get('div.form-group:nth-child(4) small')
        .should('contain.text','Please Select Role.');
    }

    ValidateLoginFailedError(){
        cy
        .get('div[role=alert]')
        .should('be.visible');
    }

    TapOnSignInBtn(){
        cy
        .get('button[type=submit]')
        .click();
    }

    setEmail(email){
        cy
        .get('#inputEmail')
        .type(email);
    }

    setPassword(password){
        cy
        .get('#inputPassword')
        .type(password);
    }

    setRole(role){
        cy
        .get('#role')
        .select(role);
    }

    setLanguage(lang){
        cy
        .get('#language')
        .select(lang);
    }
}