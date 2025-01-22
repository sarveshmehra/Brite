class Celebs {

    getDefaultSearchCloseButton() {
        return cy.get('[data-testid^="selected-input-chip-list-birthday-"]')
    }

    getBirthDateAccordion() {
        return cy.get('[data-testid="accordion-item-birthdayAccordion"]')
    }

    getBirthDateInputBox() {
        return cy.get('[data-testid="birthday-input-test-id"]')
    }

    getAdvanceSearchResults() {
        return cy.get('[data-testid="adv-search-get-results"]')
    }

    getBirthDayAccordion() {
        return cy.get('[data-testid="accordion-item-birthDateAccordion"]')
    }

    getStartBirthDayInputBox() {
        return cy.get('[data-testid="birthDate-start"]')
    }

    getEndBirthDayInputBox() {
        return cy.get('[data-testid="birthDate-end"]')
    }

    getThirdPerson() {
        return cy.get('a[href*="ref_=sr_t_3"]')
    }

    getSearchResultContainer(){
        return 'ul'
    }

    getFirstPerson() {
        return cy.get('div[data-testid="nlib-meter-const-container"]')
            .parents()
            .find('a[href*="ref_=sr_t_1"]')
            .first()
    }
};
export default new Celebs();