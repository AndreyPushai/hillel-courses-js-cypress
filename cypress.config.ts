import { defineConfig } from "cypress";
import dotenvPlugin from 'cypress-dotenv';

export default defineConfig({
    retries: {
        // process.env.CI - змінна для встановлення повторюваного запуску на CI оточенні
        runMode: 2,
        openMode: 0
    },
    video: true,
    e2e: {
    specPattern: 'cypress/e2e/**/*.test.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
            on('task', {
                log(message) {
                    console.log(message)
                    return null
                }
        });

        const updatedConfig = dotenvPlugin(config, null, true)
        // continue loading other plugins
        return updatedConfig
      // implement node event listeners here
      },
    },
});
