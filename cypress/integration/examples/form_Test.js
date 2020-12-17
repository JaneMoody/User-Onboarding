describe("name text", function () {
  it("Checks if text contains name", function () {
    cy.visit("app.js")
      .get('input[type="name"]')
      .type("Jane")
      .should("have.value", "Jane");
    // cy.visit("form.js");
    // cy.get(".name").should("have.value", "Enter Name");
    // cy.type("Jane");
  });
});
describe("email text", function () {
  it("can type an email address into an input field", () => {
    cy.get('input[type="email"]')
      .type("moody@gmail.com")
      .should("have.value", "moody@gmail.com");
  });
  //   it("Checks if text contains email", function () {
  //     cy.visit("form.js");
  //     cy.get(".Email").should("have.value", "Enter Email");
  //     cy.type("moodyjane@gmail.com");
  //   });
});
describe("password text", function () {
  it("Checks if text contains password", function () {
    cy.get('input[type="password"]')
      .type("aschjlj")
      .should("have.value", "aschjlj");
  });
});
describe("Check a checkbox", function () {
  it("Checks if a user can check a box", function () {
    cy.get('input[type="checkbox"]').click();
  });
});
describe("button submit", function () {
  it("Checks if submit button can be clicked", function () {
    cy.get(".btn").contains("Submit").click();
  });
});
