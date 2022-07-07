/// <reference types="cypress" />

import { ForgetPasswordPage } from "../../pageObjects/forgetPassword-page";
import { LoginPage } from "../../pageObjects/login-page";

describe('This file contains the forget password test cases',() =>{

    const loginPage = new LoginPage();
    const forgetPasswordPage = new ForgetPasswordPage();

    beforeEach(()=>{

        cy.intercept({
            method: 'POST',
            url: 'https://dev.hi-clouds.com/api/authentication/forgotpassword'
        }).as('waitForAuth');
        
    })


    it('Verify that Forget password works with the valid email',() => {
        cy.visit('/login');
        loginPage.TapOnForgotPassword();
        cy.ValidateForgotPasswordPage();

        cy.fixture('logindata.json').then((data) => {
            forgetPasswordPage.setEmail(data.validEmail)
            forgetPasswordPage.tapOnSubmitBtn()
            cy.wait('@waitForAuth');
            forgetPasswordPage.validateSuccessMessage();
        })
    }),

    it('Verify that Forget password with the wrong email', () => {

        cy.visit('/login');
        loginPage.TapOnForgotPassword();
        cy.ValidateForgotPasswordPage();

        cy.fixture('logindata.json').then((data) => {
            forgetPasswordPage.setEmail(data.invalidEmail)
            forgetPasswordPage.tapOnSubmitBtn()
            cy.wait('@waitForAuth');
            forgetPasswordPage.validateErrorMessage();
        })
    }),

    it('Validate the email error.', () => {

        cy.visit('/login');
        loginPage.TapOnForgotPassword();
        cy.ValidateForgotPasswordPage();

        forgetPasswordPage.tapOnSubmitBtn();
        forgetPasswordPage.validateEmailError();

    })

 
})