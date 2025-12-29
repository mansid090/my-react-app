describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("renders home page", () => {
    cy.contains("Home page").should("be.visible");
  });

  it("navigates to Counter page", () => {
    cy.contains("Counter App").click();
    cy.url().should("include", "/counter");
    cy.contains("Counter App").should("be.visible");
  });

  it("navigates to Form page", () => {
    cy.contains("Form").click();
    cy.url().should("include", "/form");
    cy.contains("Contact Form").should("be.visible");
  });

  it("toggles dark mode", () => {
  cy.get("html").should("not.have.class", "dark");

  cy.contains("🌙 / ☀️").click();
  cy.get("html").should("have.class", "dark");

  cy.contains("🌙 / ☀️").click();
  cy.get("html").should("not.have.class", "dark");
});

});


