import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalStudio: true
  },
  "experimentalInteractiveRunEvents": true,
  "retries": 2,
  "viewportWidth": 1920,
  "viewportHeight": 1080,
})
