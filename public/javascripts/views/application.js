App.ApplicationView = Backbone.View.extend({
  el: '#todo-app',
  sidebar_template: App.templates.sidebar,

  events: {
    'submit .new-item form': 'createNewTodo'
  },

  createNewTodo: function(e) {
    e.preventDefault();
    var f = e.currentTarget;
    var title = $(f).serializeArray()[0].value.trim();
    var date = Date.now();

    if (title) { App.Todos.create({ title: title, due_date: date }); }
    f.reset();
  },

  addTodoView: function(todo) {
    var view = new App.TodoView({ model: todo });
    this.$items.prepend(view.el);
  },

  refreshItems: function() {
    this.$items.html('');
    var active = App.Todos.where({ completed: false });
    var done = App.Todos.where({ completed: true });
    _(done).each(this.addTodoView, this);
    _(active).each(this.addTodoView, this);
  },

  refreshSidebar: function() {

  },

  render: function() {
    this.refreshSidebar();
    this.refreshItems();
  },

  initialize: function() {
    this.$sidebar = $('aside');
    this.$items = $('ul.items');
    this.$new_todo_form = $('.new-item form');

    App.Todos.fetch({
      success: this.render.bind(this)
    });

    this.listenTo(App.Todos, 'add', this.addTodoView);
    this.listenTo(App.Todos, 'change:completed', this.refreshItems);
    this.listenTo(App.Todos, 'change', this.refreshItems);
  }
});
