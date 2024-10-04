describe('Login Function', () => {
  it('Login with a username and password', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get("input[id='customer.firstName']").type('Kike')
    cy.get("input[id='customer.lastName']").type('Aguilera')
    cy.get("input[id='customer.address.street']").type('StreetName 123')
    cy.get("input[id='customer.address.city']").type('CityName')
    cy.get("input[id='customer.address.state']").type('StateName')
    cy.get("input[id='customer.address.zipCode']").type('123456')
    cy.get("input[id='customer.phoneNumber']").type('5512345699')
    cy.get("input[id='customer.ssn']").type('1111111')
    cy.get("input[id='customer.username']").type('test1234')
    cy.get("input[id='customer.password']").type('123password123')
    cy.get('#repeatedPassword').type('123password123')
    cy.get('[colspan="2"] > .button').click()
    cy.get('.title').should('have.text', 'Welcome test1234')
  })
})

/*describe('Test 1', () => {
  it('Google query search', () => {
    cy.visit('https://www.google.com')
    cy.get("#APjFqb").type('standard_user')
    cy.get("div[class='FPdoLc lJ9FBc'] input[name='btnK']").click()
  })
})*/