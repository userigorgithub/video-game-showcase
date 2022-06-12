describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://mmo-games.p.rapidapi.com/games', {fixture : 'example.json'})
  })






})
