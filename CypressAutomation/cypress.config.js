const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
	specPattern: 'cypress/testcases/**/*.cy.{js,jsx,ts,tsx}',
	pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
