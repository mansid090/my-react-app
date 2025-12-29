describe("Form Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/form");
  });

  it("shows validation errors on empty submit", () => {
    cy.contains("Submit").click();

    cy.contains("Name is required").should("be.visible");
    cy.contains("Email is required").should("be.visible");
    cy.contains("Mobile number is required").should("be.visible");
    cy.contains("Password is required").should("be.visible");
  });

  it("shows invalid email error", () => {
    cy.get('input[type="email"]').type("wrongemail");
    cy.contains("Submit").click();

    cy.contains("Invalid email address").should("be.visible");
  });

  it("toggles password visibility", () => {
    cy.get('input[type="password"]').first().should("have.attr", "type", "password");

    cy.contains("👁").click();
    cy.get('input[type="text"]').should("exist");
  });

  it("submits form with valid data", () => {
    cy.get('input').eq(0).type("Mansi");
    cy.get('input[type="email"]').type("mansi@test.com");
    cy.get('input[type="tel"]').type("9876543210");
    cy.get('input[type="password"]').first().type("password123");
    cy.get('input[type="password"]').last().type("password123");
    cy.get("textarea").type("Hello Cypress");

    cy.contains("Submit").click();

    cy.on("window:alert", (text) => {
      expect(text).to.equal("Form submitted successfully");
    });
  });
});
