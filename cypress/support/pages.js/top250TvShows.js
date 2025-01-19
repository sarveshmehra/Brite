class Top250TvShows {

    getTvShowLink(tvShowName) {
        return cy.contains(tvShowName)
    }

    getPhotosButton() {
        return cy.get('[data-testid="hero__photo-link"]')
    }

    getPhotoGallery() {
        return cy.get('[data-testid="mv-gallery-button"]')
    }

    getPhotoFilter() {
        return cy.get('[data-testid="image-chip-dropdown-test-id"]')
    }

    getActorNameDropDown() {
        return cy.get('#Person-filter-select-dropdown');
    }

    getPromptCloseButton() {
        return cy.get('[data-testid="promptable__x"]');
    }

    getSecondImageLink() {
        return cy.get('section[data-testid="sub-section-images"] a:nth-of-type(2)')
    }
};
export default new Top250TvShows();