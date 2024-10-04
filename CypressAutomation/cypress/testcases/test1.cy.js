describe('Login Function', () => {
  it('Login with a username and password', () => {
    cy.visit('https://imalittletester.com')
    cy.screenshot()
    cy.get("#modal-1-content").click()
    cy.screenshot()
  })
})

/*describe('Test 1', () => {
  it('Google query search', () => {
    cy.visit('https://www.google.com')
    cy.get("#APjFqb").type('standard_user')
    cy.get("div[class='FPdoLc lJ9FBc'] input[name='btnK']").click()
  })
})*/