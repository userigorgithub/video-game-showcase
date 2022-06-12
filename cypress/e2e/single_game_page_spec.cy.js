describe('Single game page', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://www.mmobomb.com/api1/games', {fixtures : 'example.json'})
    cy.intercept('GET', 'https://www.mmobomb.com/api1/game?id=1', {fixtures : 'example.json'})
    cy.get('.games').children().eq(0).click()
  });

  it('should be able to display a successful api call', () => {
    cy.url().should('eq', 'http://localhost:3000/1')
  });

  it('should be able to display single game page with a header which has home button, title, and a search bar', () => {
    cy.get('.header').should('exist')
    cy.get('.home-btn').contains('Home')
    cy.get('h1').contains('Video Game Showcase')
    cy.get('.search').should('have.attr', 'placeholder').should('include', 'search by title')
  });

  it('should be able click home button and return to home page when that button is clicked and then go back to the single game page', () => {
    cy.get('.home-btn').click()
    cy.contains('Video Game Showcase')
    cy.get('.games').children().eq(0).click()
    cy.url().should('eq', 'http://localhost:3000/1')
  });

  it('should be able to display single game details and render the correct elements: title, description, website, status, genre, platform, publisher, developer, and release date', () => {
    cy.get('.game-details-title').contains('Title: Dauntless')
    cy.get('.game-details-short-description').contains('Description: Gather your friends, forge your weapons, and hunt ferocious behemoths in Dauntless, the co-op multiplayer RPG from Phoenix Labs, a studio consisting of developers from some of the biggest MMORPG ever made. Set adrift in a lush fantasy world known as the Shattered Isles, "Slayers" must band together to contend with a harsh environment and even harsher enemies Each Slayer can choose his or her weapon and attack style, from lightning-fast sword attacks to powerful axe strikes.')
    cy.get('.game-details-game-url').contains('Website: https://www.mmobomb.com/open/dauntless')
    cy.get('.game-details-status').contains('Status: Live')
    cy.get('.game-details-genre').contains('Genre: MMORPG')
    cy.get('.game-details-platform').contains('Platform: Windows')
    cy.get('.game-details-publisher').contains('Publisher: Phoenix Labs')
    cy.get('.game-details-developer').contains('Developer: Phoenix Labs, Iron Galaxy')
    cy.get('.game-details-release-date').contains('Release Date: 2019-05-21')
  });

  it('should be able to display a single game page with a footer which has some information', () => {
    cy.get('.footer').should('exist')
    cy.get('.developer').should('exist')
    cy.get('.school').should('exist')
    cy.get('.resources').should('exist')
  });
});
