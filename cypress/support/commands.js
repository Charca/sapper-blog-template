// ************************************************
// Check docs:https://on.cypress.io/custom-commands
// ************************************************

/**
 * Consistently logs the given string to the Command Log
 * so the user knows the log message is coming from this plugin.
 * @param {string} s Message to log.
 */
const logMessage = s => {
  cy.log(`${s} \`[@cypress/code-coverage]\``)
}

// -- This is a parent command --
Cypress.Commands.add("login", (email, password) => {
	if (!email || !password) {
		return logMessage(`User "${email}" had no password 😨`)
	}
	
	// else:
	return logMessage(`User "${email}" logged in 📣`)
})

// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })

// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })

// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
