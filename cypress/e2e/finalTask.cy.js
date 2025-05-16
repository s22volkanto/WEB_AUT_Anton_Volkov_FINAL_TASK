/// <reference types="cypress" />

Cypress.on("uncaught:exception", (err, runnable) => false);

describe('Final Task - Practice Form Automation', () => {
  const selectDate = (day, month, year) => {
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(year.toString());
    cy.get('.react-datepicker__month-select').select(month);
    cy.get('.react-datepicker__day:not(.react-datepicker__day--outside-month)')
      .contains(new RegExp(`^${day}$`)).click();
  };

  it('Fills out the form correctly and validates submission', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    cy.get('#fixedban').invoke('remove');
    cy.get('footer').invoke('remove');

    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Porkovski');
    cy.get('#userEmail').type('john.pork@example.com');
    cy.get('label[for="gender-radio-1"]').click();
    cy.get('#userNumber').type('388841910');

    selectDate(28, 'February', 1930);

    cy.get('#subjectsInput').type('Economics{enter}');
    cy.get('label[for="hobbies-checkbox-3"]').click();
    cy.get('#uploadPicture').selectFile('cypress/files/photo.jpg');
    cy.get('#currentAddress').type('847 DoubleMain Street');
    cy.get('#state').click().contains('NCR').click();
    cy.get('#city').click().contains('Delhi').click();
    cy.get('#submit').click();

    cy.get('.modal-content').should('contain', 'John Porkovski');
    cy.get('.modal-content').should('contain', 'john.pork@example.com');
    cy.get('.modal-content').should('contain', 'Male');
    cy.get('.modal-content').should('contain', '388841910');
    cy.get('.modal-content').should('contain', '28 February,1930');
    cy.get('.modal-content').should('contain', 'Economics');
    cy.get('.modal-content').should('contain', 'Music');
    cy.get('.modal-content').should('contain', 'photo.jpg');
    cy.get('.modal-content').should('contain', '847 DoubleMain Street');
    cy.get('.modal-content').should('contain', 'NCR Delhi');
  });
});
