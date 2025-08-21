// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30_000,
  // Dossier de tests (optionnel si on utilise "tests/")
  testDir: 'tests',

  use: {
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  reporter: [['html', { open: 'never' }]],

  // Multi-navigateurs
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
