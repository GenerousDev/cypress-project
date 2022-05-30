import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

import LoginPage from '../cypress/integration/pages/LoginPage';

import SecurePage from '../cypress/integration/pages/SecurePage';

const loginPage = new LoginPage();

const securePage = new SecurePage();

 

Given('I open LoginPage', () => {

  loginPage.visitLogin();

});

When(`I fill the username input with ${string}`, username => {
  loginPage.typeUsername(username);
});

 

When(`I fill the password input with ${string}`, password => {
  loginPage.typePassword(password);
});

 

When('I click on Login button', () => {
  loginPage.clickLogin();
});

 

Then(`I see ${string} message`, expected => {

  const message = securePage.getMessage();

  message.should((actual) => {

    expect(actual).to.have.string(expected);

  })

});