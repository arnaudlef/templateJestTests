/// <reference types="cypress" />



Cypress.Commands.add('data',(previous)=>{
    return previous + ' data';
});

context('Lightbox', () => {
    beforeEach(() => {
        cy.visit('./front/lightbox.html');

    });
    it('should open the lightbox', () => {
        cy.get('[data-cy=open-lightbox]').click();
        cy.get('[data-cy=open-lightbox]').should('be.visible');

    });
    it('should close the lightbox when click outside lightbox', () => {
            cy.get('[data-cy=open-lightbox]').click();
            cy.get('body').click(0,0);
            cy.get('[data-cy=lightbox]').should('not.be.visible');
        }
    );
    it('should add a like in lightbox', () => {
        cy.get('[data-cy=open-lightbox]').click();
        cy.get('[data-cy=like-lightbox]').click();
        cy.get('[data-cy=like-number]').should('have.text', '1');
        cy.get('[data-cy=close-lightbox]').click({ multiple: true });
        cy.get('[data-cy=like-number-overlay]').should('have.text', '1');

    });
    it('should delete a like in lightbox', () => {
        cy.get('[data-cy=open-lightbox]').click();
        cy.get('[data-cy=like-lightbox]').click();
        cy.get('[data-cy=like-number]').should('have.text', '1');

        cy.get('[data-cy=dislike-lightbox]').click();
        cy.get('[data-cy=like-number]').should('have.text', '0');

        cy.get('[data-cy=close-lightbox]').click();
        cy.get('[data-cy=like-number-overlay]').should('have.text', '0');

        }
    );
    it('should add a comment in lightbox', () => {
        cy.get('[data-cy=open-lightbox]').click();
        cy.get('[data-cy=comment-input]').type('test comment');
        cy.get('[data-cy=comment-submit]').click();
        cy.get('[data-cy=comment-list]').should('have.text', 'test comment');

        cy.get('[data-cy=close-lightbox]').click();
        cy.get('[data-cy=comment-number-overlay]').should('have.text', 'Hide 1 comment');
        cy.get('[data-cy=comment-number]').should('have.text', '1');

    });
    it('should not add an empty comment in lightbox', () => {
        cy.get('[data-cy=open-lightbox]').click();
        cy.get('[data-cy=comment-input]').type(' ');
        cy.get('[data-cy=comment-submit]').should('not.be.enabled');
    });

    it('should hide comment in lightbox', () => {
        cy.get('[data-cy=open-lightbox]').click();
        cy.get('[data-cy=comment-input]').type('test comment');
        cy.get('[data-cy=comment-submit]').click();
        cy.get('[data-cy=hide-comment]').click();
        cy.get('[data-cy=comment-list]').should('not.be.visible');

    });
    it('should be in pluriel if add many comments in lightbox', () => {
        cy.get('[data-cy=open-lightbox]').click();
        cy.get('[data-cy=comment-input]').type('test comment1');
        cy.get('[data-cy=comment-submit]').click();
        cy.get('[data-cy=comment-input]').type('test comment2');
        cy.get('[data-cy=comment-submit]').click();
        cy.get('[data-cy=comment-number-overlay]').should('have.text', 'Hide 2 comments');

    });
    it('should delete a comment in lightbox', () => {
            cy.get('[data-cy=open-lightbox]').click();
            cy.get('[data-cy=comment-input]').type('test comment1');

            cy.get('[data-cy=comment-submit]').click();
            cy.get('[data-cy=delete-comment]').click();
            cy.get('[data-cy=comment-list]').should('not.exist')

        }
    );


});