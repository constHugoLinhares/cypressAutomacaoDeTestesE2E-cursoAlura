module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
        { "reporter"; "mochawesome",
            "reporterOptions"; 
                { "reportDir"; "cypress/report/mochawesome-report",
                  "overwrite"; true,
                  "html"; true,
                  "json"; false,
                  "code"; true,
                  "timestamp"; "mmddyyyy_HHMMss" 
                }
        }
      },
  },
});