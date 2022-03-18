// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="Cypress" />

describe('blogmops page navigation ', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', `Hi, I\'m Oskar the pug!`);
	});

	it('navigates to /about', () => {
		cy.get('li a').contains('About').click();
		cy.url().should('include', '/about');
	});

	it('navigates to /contact', () => {
		cy.get('li a').contains('Contact').click();
		cy.url().should('include', '/contact');
	});

	it.only('navigates to the first blog entry /blog/hello-', () => {
		cy.visit('/blog/hello-');
		cy.contains('h1', 'Hello 👋');
  });

  it('navigates to the second blog entry /blog/office-', () => {
		cy.visit('/blog/office-');
		cy.contains('h1', 'Office 💼');
  });
});
