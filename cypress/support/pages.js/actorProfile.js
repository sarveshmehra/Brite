class ActorProfile {

    getUpcomingSection() {
        return cy.get('label[aria-label="Expand Upcoming"]').first()
    }

    getFirstUpcoming(state) {
        return cy.get('label[aria-label="Collapse Upcoming"]:first')
            .parentsUntil('div:nth-of-type(2)')
            .find('div:nth-child(1) ul li div:nth-child(2) div:nth-child(1)')
            .contains('a', state)
            .parents('ul')
            .prev()
            .prev('a')
    }
};
export default new ActorProfile();