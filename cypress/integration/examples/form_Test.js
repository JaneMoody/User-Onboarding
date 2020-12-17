describe("name text", function () {
  it("Checks if text contains name", function () {
    cy.get('input[type="name"]').type("Jane").should("have.value", "Jane");
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
    cy.visit("form.js");
    cy.get(".Password").should("have.value", "Enter A Password");
    cy.type("aschjlj");
  });
});
describe("Check a checkbox", function () {
  it("Checks if a user can check a box", function () {
    cy.visit("form.js");
    cy.get(".terms").click();
  });
});
