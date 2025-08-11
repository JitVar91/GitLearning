const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    viewport: { width: 1280, height: 720 },

  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
   // {
    //  name: 'WebKit',
    //  use: { ...devices['Desktop Safari'] },
    //},
  ],
});
