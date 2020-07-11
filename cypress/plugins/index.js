// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
import os from 'os';

module.exports = (on, config) => {
	// to get the code coverage from unit tests
	// also use .babelrc file when bundling spec files
	// https://glebbahmutov.com/blog/combined-end-to-end-and-unit-test-coverage/

	// or use browserify and just push babel-plugin-istanbul
	// directory to the list of babelify plugins
	// on('file:preprocessor', require('../../use-browserify-istanbul'))
	require('@cypress/code-coverage/task')(on, config);
	on('before:browser:launch', (browser, launchOptions) => {
		console.log('before launching browser');
		console.log(browser);

		if (browser.name === 'chrome') {
			// https://www.ghacks.net/2013/10/06/list-useful-google-chrome-command-line-switches/
			launchOptions.args.push('--window-size=1920,1080');

			console.log('chrome launch args:');
			console.log(launchOptions.args.join(os.EOL));
			return launchOptions;
		}
	});

	return config;
};
