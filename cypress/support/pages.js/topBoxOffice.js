class TopBoxOffice {

    getSecondMovieLink() {
        return cy.get(`a[href*="ref_=chtbo_t_2"]`)
    }

    getAggregateRatingButton() {
        return cy.get('section[data-testid="hero-parent"] div:nth-child(3) div:nth-child(2) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) a:first')
    }

    getUserRatingButton() {
        return cy.get('[data-testid="rating-button__user-rating__unrated"]')
    }

    getRatingModal() {
        return cy.get('div.ipc-rating-prompt__container')
    }

    getFiveStarRateButton() {
        return cy.get('button.ipc-starbar__rating__button[aria-label="Rate 5"]')
    }

    getRatingSubmitButton() {
        return cy.get('button.ipc-btn span.ipc-btn__text')
            .contains('Rate')
            .parent()
    }
};
export default new TopBoxOffice();