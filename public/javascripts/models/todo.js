App.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    due_date: Date.now(),
    description: '',
    completed: false
  },

  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }
});
