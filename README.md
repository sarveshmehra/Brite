# API and Web automated tests using Cypress

## Automated Tests

This is an test automation project using Cypress for testing web and API endpoints. 
Web application under test: https://imdb.com
APIs under test: https://pokeapi.co

## Project Structure

- **cypress/e2e/imdbweb/**: Contains UI test cases for IMDb.com
- **cypress/e2e/pokeapi/**: Contains api test cases for pokeapi.co
- **cypress/fixtures/**: Stores test data
- **cypress/support/**: Contains page objects, support commands and reusable utilities.

## Framework
- For web (IMDb.com) tests, Page Object Model is used
- Test data is separated from tests using test data files under fixtures


## How to Run Tests

### Prerequisites
- Node.js installed
- Cypress installed

### Configuration
-  cypress.config.js file is used to manage environment variables, base URLs, and test settings.
- package.json file contains script for running tests and other project related meta data.

```markdown
### Run Tests
npm run test:webChrome # Runs web app tests in Chrome
npm run test:webChromeHeadless # Runs web app tests in Chrome (headless mode)
npm run test:webFirefox # Runs web app tests in Firefox (headless mode)
npm run test:webFirefoxHeadless # Runs web app tests in Firefox (headless mode)
npm run test:api # Runs api test
npm run test:gui # Opens Cypress
```
## Manual Tests
- Manual test for input field validation in gherkin format is located in root directory:
``` markdown
ValidateInputField.feature
```

## Bug Report
- Bug report is placed in root directory:
``` markdown
Defect_Report.txt
```
