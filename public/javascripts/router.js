App.router = Backbone.Router.extend({
  routes: {
    '*filter': 'applyFilter',

    applyFilter: function(param) {
      if (param) {
        param = param.trim();
      }

      App.filter = param || '';

      App.Todos.trigger('filter');
    }
  }
});

app.TodoRouter = new router();
Backbone.history.start();
