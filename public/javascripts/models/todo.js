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
  },

  getMonth: function() {
    return (new Date(this.get('due_date'))).getMonth() + 1;
  },

  getYear: function() {
    return (new Date(this.get('due_date'))).getFullYear();
  }
});
