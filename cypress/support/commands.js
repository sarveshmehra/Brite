Cypress.Commands.add('getDate40YearsAgo', () => {
    const today = new Date();
    const yearsAgo = 40;
    const pastDate = new Date(today.setFullYear(today.getFullYear() - yearsAgo));
    const date = pastDate.toISOString().split('T')[0];
    return cy.wrap(date)
});

Cypress.Commands.add('getYesterdayDate', () => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    const month = String(yesterday.getMonth() + 1).padStart(2, '0');
    const day = String(yesterday.getDate()).padStart(2, '0');
    const formattedDate = `${month}-${day}`;
    return cy.wrap(formattedDate);
});

Cypress.Commands.add('checkIfElementExists', (selector) => {
    return cy.get('body').then(($elements) => {
        return $elements.length > 0 ? true : false;
    });
});