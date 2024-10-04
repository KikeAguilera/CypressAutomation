describe('Login Function', () => {
  it('Login with a username and password', () => {
    cy.visit('https://www.saucedemo.com', {
		timeout: 200000,
		onBeforeLoad: (window) => {window.stop()}})
    cy.get("input[id='user-name']").type('standard_user')
    cy.get("#password").type('secret_sauce')
    cy.get("#login-button").click()
  })
})