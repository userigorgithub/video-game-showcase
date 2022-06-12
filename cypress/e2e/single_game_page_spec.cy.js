describe('Single game page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://www.mmobomb.com/api1/games', {fixtures : 'example.json'})
  });

  it('should be able to display a successful api call', () => {
    cy.intercept('GET', 'https://www.mmobomb.com/api1/game?id=1', {fixtures : 'example.json'})
    cy.get('.games').children().eq(0).click()
    cy.url().should('eq', 'http://localhost:3000/1')
  });





});
