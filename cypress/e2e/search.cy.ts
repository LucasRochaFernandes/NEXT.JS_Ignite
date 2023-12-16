describe("search products", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to seacrh for products", () => {
    cy.searchByQuery("moletom");
    cy.url().should("include", "/search");
    cy.url().should("include", "q=moletom");
    cy.get("a[href^='/product']").should("exist");
  });
});
