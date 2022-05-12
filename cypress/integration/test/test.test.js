context('Hello World!', () => {
    beforeEach(() => {
        cy.visit('./front/test.html');
    });

    it('should verify input format mail', () => {
        // Good format
        cy.get('[data-cy="email"]').type('test@gmail.com');
        cy.get('[data-cy="email"]').should('contain.value', '@');

        // Bad format
        cy.get('[data-cy="email"]').clear();
        cy.get('[data-cy="email"]').type('testgmail.com');
        cy.get('[data-cy="email"]').should('not.contain.value', '@');
    });
});