class Home {

    getSearchBox() {
        return cy.get('input[name="q"]')
    }

    getCookiesDeclineButton() {
        return cy.get('button[data-testid="reject-button"]')
    }

    getFirstSearchSuggestion() {
        return cy.get('#react-autowhatever-navSuggestionSearch--item-0')
    }

    getMainMenu() {
        return cy.get('#imdbHeader-navDrawerOpen')
    }

    getMoviesLink() {
        return cy.get('label[aria-label="Expand Movies Nav Links"]')
    }

    getTopBoxOfficeLink() {
        return cy.contains('Top Box Office')
    }

    getTvShowsLink() {
        return cy.get('label[aria-label="Expand TV Shows Nav Links"]')
    }

    getTop250TvShowsLink() {
        return cy.contains('Top 250 TV Shows')
    }

    getCelebsLink() {
        return cy.get('label[aria-label="Expand Celebs Nav Links"]')
    }

    getBornTodayLink() {
        return cy.contains('Born Today')
    }
};
export default new Home();