App.router = Backbone.Router.extend({
  routes: {
    '/': 'default',
    ':filter': 'applyFilter'
  },

  default: function() {
    App.filter = 'all';

    App.Todos.trigger('filter');
  },

  applyFilter: function(param) {
    if (param) {
      param = param.trim();
    }

    App.filter = param || '';

    App.Todos.trigger('filter');
  }
});

App.TodoRouter = new App.router();
Backbone.history.start();
