const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30_000,
  use: {
    headless: true,              // true = pas d’ouverture visuelle du navigateur
    trace: 'on-first-retry',     // trace.zip en cas d’échec (1ère relance)
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  reporter: [['html', { open: 'never' }]],
});