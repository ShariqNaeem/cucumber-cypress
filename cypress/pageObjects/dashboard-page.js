/// <reference types="cypress" />

export class DashboardPage{
    navigateTo(menu){
        cy
        .get(`ul li a[data-original-title="${menu}"]`)
        .click({force: true});
    }

}