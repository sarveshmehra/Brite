import Home from '../../support/pages.js/home';
import ActorProfile from '../../support/pages.js/actorProfile';
import TopBoxOffice from '../../support/pages.js/topBoxOffice';
import Top250TvShows from '../../support/pages.js/top250TvShows';
import Celebs from '../../support/pages.js/celebs';


describe('Test Suite: IMDb.com Tests', () => {
    let testData

    before(() => {
        cy.fixture('IMDb_test_data').then((data) => {
            testData = data;
        });
    });

    beforeEach(() => {
        cy.visit(Cypress.env('webBaseUrl'));
        cy.title().should('eq', testData.homePageTitle);
        Home.getCookiesDeclineButton()
            .click();
    });

    it('Search Nicolas Cage and access the first upcoming in-production movie', () => {
        Home.getSearchBox()
            .clear()
            .type(testData.upcomingMovieOfActor);
        Home.getFirstSearchSuggestion()
            .should('be.visible')
            .click();
        ActorProfile.getUpcomingSection()
            .click();    
        ActorProfile.getFirstUpcoming(testData.movieState).click();
    });

    it('Rate 5-star second most popular movie', () => {
        Home.getMainMenu().click();
        Home.getMoviesLink().click();
        Home.getTopBoxOfficeLink().click();
        TopBoxOffice.getSecondMovieLink()
            .should('be.visible')
            .click();
        TopBoxOffice.getAggregateRatingButton().click();
        TopBoxOffice.getUserRatingButton().click();
        TopBoxOffice.getRatingModal()
            .should('be.visible')
            .then(() => {
                TopBoxOffice.getFiveStarRateButton().click({ force: true })
            });
        TopBoxOffice.getRatingSubmitButton().click({ force: true });
    });

    it("Display second photo from all Danny Trejo photos in Breaking Bad", () => {
        Home.getMainMenu().click();
        Home.getTvShowsLink().click();
        Home.getTop250TvShowsLink().click();
        Top250TvShows.getTvShowLink(testData.tvShowName)
            .should('be.visible')
            .click();
        Top250TvShows.getPhotosButton().click();
        Top250TvShows.getPhotoGallery().click();
        Top250TvShows.getPhotoFilter().click();
        Top250TvShows.getActorNameDropDown()
            .find('option')
            .contains(testData.displayPhotosOfActor)
            .then((option) => {
                Top250TvShows.getActorNameDropDown().select(option.val());
            });
        Top250TvShows.getPromptCloseButton()
            .click()
            .wait(500);
        Top250TvShows.getSecondImageLink().click();       // can provide timeout while loading image link
    });

    it("Get third celebrity amongst all born yeterday", () => {
        Home.getMainMenu().click();
        Home.getCelebsLink().click();
        Home.getBornTodayLink().click();
        Celebs.getDefaultSearchCloseButton().click();
        Celebs.getBirthDateAccordion().click();
        cy.getYesterdayDate().then((date) => {
            Celebs.getBirthDateInputBox()
                .clear()
                .type(date + '{enter}')
        });
        Celebs.getAdvanceSearchResults()
            .should('not.be.disabled')
            .click();
        Celebs.getThirdPerson()
            .click()
            .wait(1000)
            .then(() => {
                cy.screenshot({ capture: 'viewport' });
            });
    });

    it("Get first celebrity amongst all born today but 40 years ago", () => {
        Home.getMainMenu().click();
        Home.getCelebsLink().click();
        Home.getBornTodayLink().click();
        Celebs.getDefaultSearchCloseButton().click();
        Celebs.getBirthDayAccordion().click();
        cy.getDate40YearsAgo().then((date) => {
            Celebs.getStartBirthDayInputBox()
                .clear()
                .type(date);
            Celebs.getEndBirthDayInputBox()
                .clear()
                .type(date)
        });
        Celebs.getAdvanceSearchResults()
            .should('not.be.disabled')
            .click();
        cy.checkIfElementExists(Celebs.getSearchResultContainer).then((exists) => {
            if (exists) {
                Celebs.getFirstPerson()
                    .click()
                    .wait(500)
                    .then(() => {
                        cy.screenshot({ capture: 'viewport' });
                    });
            } else {
                cy.log('No result found in search.');
            }
        });
    });
}); 