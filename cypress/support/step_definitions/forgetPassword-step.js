import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import { ForgetPasswordPage } from "../../pageObjects/forgetPassword-page";
import { LoginPage } from "../../pageObjects/login-page";


const loginPage = new LoginPage();
const forgetPasswordPage = new ForgetPasswordPage();


When('User navigates to the forgot password page', () => {
    loginPage.TapOnForgotPassword();
    cy.ValidateForgotPasswordPage();
})

And('Set the email', () => {
    forgetPasswordPage.setEmail('test-automation@hiclouds.io')
})

And('Set the wrong email', () => {
    forgetPasswordPage.setEmail('test@yopmail.com')
})

And('Tap on the submit button', () => {
    forgetPasswordPage.tapOnSubmitBtn()
})

Then('Validate the error of email', () => {
    forgetPasswordPage.validateEmailError()
})