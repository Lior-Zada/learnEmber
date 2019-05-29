/**
 * This will tell Ember.js to detect when the application's URL matches '/' and to render the todos template.
 */
Todos.Router.map( function(){
    this.resource('todos', { path: '/'});
});

/** Displaying Model Data
 *  implement a TodosRoute class with a model function that returns all the existing todos:
 * 
 * TodosRoute is a convention name because Todos is the application name.
 * see: https://guides.emberjs.com/v1.10.0/concepts/naming-conventions/
 */
Todos.TodosRoute = Ember.Route.extend({
    model: function(){
        return this.store.find('todo');
    }
});