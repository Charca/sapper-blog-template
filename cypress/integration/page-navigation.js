// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe("blogmops page navigation ", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h1>", () => {
    cy.contains("h1", "Welcome to blogmops");
  });

  it("navigates to /about", () => {
    cy.get("nav a").contains("about").click();
    cy.url().should("include", "/about");
  });

  it("navigates to /blog", () => {
    cy.get("nav a").contains("blog").click();
    cy.url().should("include", "/blog");
  });

  it("navigates to the first blog entry /blog/hello", () => {
    cy.get('.container a[href="blog/hello"]')
      .contains("Hello people 👋")
      .click();
    cy.url().should("include", "/blog/hello");
    cy.contains("h2", "Time to get things going");
  });
});
