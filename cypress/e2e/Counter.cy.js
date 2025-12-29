describe("Counter Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/counter");
  });

  it("shows initial count", () => {
    cy.contains("0").should("be.visible");
  });

  it("increments count", () => {
    cy.contains("+").click();
    cy.contains("1").should("be.visible");
  });

  it("decrements count but not below zero", () => {
    cy.contains("-").click();
    cy.contains("0").should("be.visible");
  });

  it("resets count", () => {
    cy.contains("+").click();
    cy.contains("+").click();
    cy.contains("2").should("be.visible");

    cy.contains("Reset").click();
    cy.contains("0").should("be.visible");
  });

  it("navigates back to home", () => {
    cy.contains("← Home").click();
    cy.url().should("eq", "http://localhost:5173/");
  });
});
