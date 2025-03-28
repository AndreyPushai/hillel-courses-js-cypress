const { defineConfig } = require("cypress");

module.exports = defineConfig({
    retries: {
        // process.env.CI - змінна для встановлення повторюваного запуску на CI оточенні
        runMode: 2,
        openMode: 0
    },
    video: true,
    e2e: {
        setupNodeEvents(on, config) {
            on('task', {
                log(message) {
                    console.log(message)
                    return null
                }
        })
      // implement node event listeners here
      },
    },
});
