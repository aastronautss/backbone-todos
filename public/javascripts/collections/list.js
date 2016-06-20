var List = Backbone.Collection.extend({
  model: App.Todo,
  localStorage: new Backbone.LocalStorage('todos'),
  comparator: function(a, b) {
    return a.get('due_date') - b.get('due_date');
  }
});

App.Todos = new List();
