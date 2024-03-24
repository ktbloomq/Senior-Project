import { faker } from '@faker-js/faker';

describe('Navigation', () => {
  it('can create a post', () => {
    const location = faker.location.city();
    const image = faker.image.urlLoremFlickr({ category: 'scenery' });
    const description = faker.lorem.sentence();
    // Start from the index page
    cy.visit('http://localhost:3000/');
 
    // Find a link with an href attribute containing "about" and click it
    cy.get('a[href*="/post"]').click();
 
    // The new url should include "/about"
    cy.url().should('include', '/post');
 
    // The new page should contain an h1 with "About"
    cy.get('h1').contains('Create Post');
    cy.get('input[name=location]').type(location);
    cy.get('input[name=image_url]').type(image);
    cy.get('#image').should('have.attr','src',image);
    cy.get('textarea[name=body]').type(description);
    cy.get('button[type=submit]').click();
    cy.contains(description);
  });
  it('can reply to a post', () => {
    const description = faker.lorem.sentence();
    cy.visit('http://localhost:3000/');
    cy.contains('a','/reply')//.should('have.attr', 'href').and('include', '/reply');
  })
});