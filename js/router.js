/**
 * This will tell Ember.js to detect when the application's URL matches '/' and to render the todos template.
 */
Todos.Router.map( function(){
    this.resource('todos', { path: '/'}, function(){
        this.route('active');
        this.route('completed');
    });
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

Todos.TodosIndexRoute = Ember.Route.extend({
    model: function(){
        return this.modelFor('todos');
    }
});

Todos.TodosActiveRoute = Ember.Route.extend({
    model: function(){
        return this.store.filter('todo', function(todo){
            return ! todo.get('isCompleted');
        });
    },
    /**
     * Normally transitioning into a new route changes the template rendered into the parent {{outlet}},
     *  but in this case we'd like to reuse the existing todos/index template.
     *  We can accomplish this by implementing the renderTemplate method
     *  and calling render ourselves with the specific template and controller options.
     */
    renderTemplate: function(controller){
        this.render('todos/index', {controller: controller});
    }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
    model: function(){
        return this.store.filter('todo', function(todo){
            return todo.get('isCompleted');
        });
    },
    renderTemplate: function(controller){
        this.render('todos/index', {controller:controller});
    }
});
