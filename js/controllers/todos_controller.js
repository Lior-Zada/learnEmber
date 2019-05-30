Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function () {
            // Get the todo title set by the "New Todo" text field
            var title = this.get('newTitle');
            if (!title.trim()) return;

            // Create the new Todo model
            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            // Clear the "New Todo" text field
            this.set('newTitle', '');

            // Save the new model
            todo.save();
        },
        /** filterBy method is part of the ArrayController API . 
            it returns an instance of EmberArray which contains only the items for which the callback returns true.*/
        
        /** invoke will execute a method on each object in the Array if the method exists on that object. */
        clearCompleted: function () {
            var completed = this.filterBy('isCompleted', true);
            completed.invoke('deleteRecord');
            completed.invoke('save');
        }
    },
    hasCompleted: function () {
        return this.get('completed') > 0;
    }.property('completed'),

    completed: function () {
        return this.filterBy('isCompleted', true).get('length');
    }.property('@each.isCompleted'),

    // The remaining property will return the number of todos whose isCompleted property is false.
    remaining: function () {
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection: function () {
        var remaining = this.get('remaining');
        return remaining === 1 ? 'item' : 'items'
    }.property('remaining'),
    
    allAreDone: function(key, value){
        //  the !! reduces the examined value into a Boolean.
        return !! this.get('length') && this.isEvery('isCompleted');
    }.property('@each.isCompleted')
});