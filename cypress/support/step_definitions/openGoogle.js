import { When } from "cypress-cucumber-preprocessor/steps";

When(`I open the Google page`, () => cy.visit("https://google.com"));
