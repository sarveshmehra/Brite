class ActorProfile {

    getUpcomingSection() {
        return cy.get('#actor-upcoming-projects')
    }

    getFirstUpcoming(state) {
        return cy.get('div[data-testid="accordion-item-content-container"]')
            .find('a')
            .contains(state)
    }
};
export default new ActorProfile();