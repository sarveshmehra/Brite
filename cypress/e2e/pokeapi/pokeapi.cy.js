describe('Test Suite: Poke API Tests', () => {

  let testData

  before(() => {
    cy.fixture('pokeapi_test_data').then((data) => {
      testData = data;
    });
  });

  it('should fetch a berry by valid Id', () => {
    cy.request('GET', `${Cypress.env('apiBaseUrl')}/api/v2/berry/${testData.validBerryId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(parseInt(testData.validBerryId, 10));
      expect(response.body).to.have.property('name');
    });
  });

  it('should not fetch a berry by invalid Id', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('apiBaseUrl')}/api/v2/berry/${testData.invalidBerryId}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('should fetch a berry by valid name', () => {
    cy.request('GET', `${Cypress.env('apiBaseUrl')}/api/v2/berry/${testData.validBerryName}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq(testData.validBerryName);
      expect(response.body).to.have.property('id');
    });
  });

  it('should not fetch a berry by invalid name', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('apiBaseUrl')}/api/v2/berry/${testData.invalidBerryName}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('fetch highest potency spicy berry and validate name ', () => {
    cy.request('GET', `${Cypress.env('apiBaseUrl')}/api/v2/berry-flavor/${testData.berryFlavor}`).then((response) => {
      expect(response.status).to.eq(200);
      const berries = response.body.berries;
      expect(berries).to.have.length.greaterThan(0);

      let highestPotencyBerry = null;
      let highestPotency = -1;

      berries.forEach(berry => {
        if (berry.potency > highestPotency) {
          highestPotency = berry.potency;
          highestPotencyBerry = berry;
        }
      });
      cy.request('GET', `${Cypress.env('apiBaseUrl')}/api/v2/berry/${highestPotencyBerry.berry.name}`).then((berryResponse) => {
        expect(berryResponse.status).to.eq(200);
        expect(berryResponse.body.name).to.eq(highestPotencyBerry.berry.name);
      });
    });
  });
});  