import { When } from "cypress-cucumber-preprocessor/steps";

When(`I open the GitHub page`, () => cy.visit("https://github.com"));
