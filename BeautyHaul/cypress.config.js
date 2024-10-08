const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  
  e2e: {
    baseUrl: "https://www.beautyhaul.com",
    stepDefinitions: 'cypress/stepsDefinition',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,
      json: true
    }
  }
});
