import { defineConfig } from "cypress";
import dotenvPlugin from 'cypress-dotenv';
import * as fs from "fs";
import mochawesome from 'cypress-mochawesome-reporter/plugin.js';


function getConfigFile(env: string) {
    const path = `cypress.env.${env || "qauto"}.json`;
    const configBuffer = fs.readFileSync(path);
    return JSON.parse(configBuffer.toString());
};


export default defineConfig({
    retries: {
        // process.env.CI - змінна для встановлення повторюваного запуску на CI оточенні
        runMode: 2,
        openMode: 0
    },
    video: true,
    reporter: "cypress-mochawesome-reporter",
    e2e: {
    specPattern: 'cypress/e2e/**/*.test.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
            on('task', {
                log(message) {
                    console.log(message)
                    return null
                }
        });

        mochawesome(on);

        const configOverrides = getConfigFile(config.env.configFile);

        config = {...config, ...configOverrides};
        const updatedConfig = dotenvPlugin(config, null, true)
        // continue loading other plugins
        return updatedConfig
      // implement node event listeners here
      },
    },
});
