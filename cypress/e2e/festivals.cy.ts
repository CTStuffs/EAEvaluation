/// <reference types="cypress" />

import validBands from "../util"
describe('Festival tests', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('should redirect to /festivals', () => {
    cy.url().should('eq', Cypress.config('baseUrl') + '/festivals')
  })


  it('should display bands alphabetically', async () => {
    let bands = [];
    cy.get('app-festivals > ol > li').each(($el, index) => {
      let festivalInfo = $el.text().split('  ');
      let band = festivalInfo[0].trim();
      bands.push(band);

      if (index > 0) {
        expect(band > bands[index - 1]).to.be.true
      }
    })

  })

  it('should display valid festivals with bands', () => {
    cy.get('app-festivals > ol > li').each(($el) => {
      let festivalInfo = $el.text().split('  ');
      let festival = festivalInfo[1].trim();
      expect(validBands.includes(festival) || festival == '').to.be.true;
    })
  })

})

