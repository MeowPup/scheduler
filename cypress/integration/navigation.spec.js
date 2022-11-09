describe("Navigation", () => {

  it("should visit root", () => {
    cy.visit("/");
  });

  // clicks on Tuesday
  it("should naviagate to Tuesday", () => {
    cy.visit("/")
    cy.contains("[data-testid=day]", "Tuesday")
    .click()
    .should("have.class", "day-list__item--selected")
  });

});