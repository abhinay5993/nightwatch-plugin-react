// https://nightwatchjs.org/gettingstarted/configuration/

module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['test/src'],

  // See https://nightwatchjs.org/guide/working-with-page-objects/
  page_objects_path: [],

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-commands
  custom_commands_path: ['nightwatch/commands'],

  // See https://nightwatchjs.org/guide/extending-nightwatch/#writing-custom-assertions
  custom_assertions_path: '',

  
  // See https://nightwatchjs.org/guide/#external-globals
  globals_path : 'test/globals.js',

  webdriver: {},

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: '',
      persist_globals: true,
      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName: 'chrome',
        'goog:chromeOptions': {
          // More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
          //
          // w3c:false tells Chromedriver to run using the legacy JSONWire protocol (not required in Chrome 78)
          w3c: true,
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        server_path: require('chromedriver').path,
        cli_args: [
          // --verbose
        ]
      }
    }
  }
};