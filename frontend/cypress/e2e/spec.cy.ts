import { faker } from '@faker-js/faker';
import { Session } from 'inspector';

describe('Authentication',() => {
  it("must be logged in", () => {
    cy.session("unauthenticated", () => {
      cy.visit('http://localhost:3000/post');
      cy.url().should("not.be.equal","http://localhost:3000/post");
    });
  });

  it("authentic users can enter", () => {
    cy.importSession();
    cy.visit('http://localhost:3000/post');
    cy.url().should("be.equal","http://localhost:3000/post");
  })
});

describe('Navigation', () => {
  beforeEach(() => {
    cy.importSession();
  });
  it('can create a post', () => {
    const location = faker.location.city();
    const image = faker.image.urlLoremFlickr({ category: 'scenery' });
    const description = faker.lorem.sentence();
    // Start from the index page
    cy.visit('http://localhost:3000/');
 
    cy.get('a[href*="/post"]').click();
 
    cy.url().should('include', '/post');
 
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
    cy.contains('Reply')
  })
});