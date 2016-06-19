var Todo = Backbone.Model.extend({
  defaults: {
    due_date: '',
    title: '',
    description: '',
    completed: false
  },

  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }
});
