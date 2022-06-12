describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://www.mmobomb.com/api1/games', {fixtures : 'example.json'})
  });

  it('should be able to display a successful api call', () => {
    cy.visit('http://localhost:3000')
  });

  it('should be able to display an error message upon unsuccessful api call', () => {
    cy.visit('http://localhost:3000/gamewowz')
    cy.get('.error-message').children().should('have.length', 1)
    cy.get('h1').contains("Something went wrong, please try again later!")
  });

  it('should be able to display home page with a header which has home button, title, and a search bar', () => {
    cy.get('.header').should('exist')
    cy.get('.home-btn').contains('Home')
    cy.get('h1').contains('Video Game Showcase')
    cy.get('.search').should('have.attr', 'placeholder').should('include', 'search by title')
  });

  it('should be able to display a live search for a desired game', () => {
    cy.get('.search').type('dauntless')
    cy.get('.games').children().should('have.length', 1)
    cy.get('.titles').should('contain', 'Dauntless')
  });

  it('should not be able to display a desired game when nonexistent game is searched', () => {
    cy.get('.search').type('dauntful')
    cy.get('.error-message').children().should('have.length', 1)
    cy.get('h1').contains("Something went wrong, please try again later!")
  });

  it('should be able to display home page with app\'s game info', () => {
    cy.get('.games').children().should('have.length', 376)
    cy.get('.titles').should('contain', 'Dauntless')
  });

  it.only('should be able to display a home page with a footer which has some information', () => {
    cy.get('.footer').should('exist')
    cy.get('.developer').should('exist')
    cy.get('.school').should('exist')
    cy.get('.resources').should('exist')
  });
});
