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

module.exports = (on, config) => {
	// also use .babelrc file when bundling spec files
	// to get the code coverage from unit tests
	// https://glebbahmutov.com/blog/combined-end-to-end-and-unit-test-coverage/
	on('file:preprocessor', require('../../use-babelrc'))

	// or use browserify and just push babel-plugin-istanbul
	// directory to the list of babelify plugins
	// on('file:preprocessor', require('../../use-browserify-istanbul'))

	// IMPORTANT to return the config object with changed environment variable
	return config
}
