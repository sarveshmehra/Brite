const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      webBaseUrl: 'https://imdb.com', // IMDb Web
      apiBaseUrl: 'https://pokeapi.co', // pokeapi URL
    },
    setupNodeEvents(on, config) {

      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome' && browser.isHeadless) {
          launchOptions.args.push('--user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"');
        }
        return launchOptions;
      });

      const appType = process.env.APP_TYPE;
      if (appType === 'web') {
        config.baseUrl = config.env.webBaseUrl;
      } else {
        config.baseUrl = config.env.apiBaseUrl;
      }
      return config;
    },
    experimentalStudio: true,
  },
});
