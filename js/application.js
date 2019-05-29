/**
 * This will create a new instance of Ember.Application
 * and make it available as a variable named Todos within your browser's JavaScript environment.
 */
window.Todos = Ember.Application.create();

/**
 * Now we'll add fixture data. Fixtures are a way to put sample data into an application
 * before connecting the application to long-term persistence.
 * ( Give fields default values...)
 */
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();