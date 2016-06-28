App.SidebarView = Backbone.View.extend({
  el: 'aside',
  template: App.templates.sidebar,
  events: {
    'click li': 'navigate',
    'click header': 'navigate'
  },

  navigate: function(e) {
    e.preventDefault();
    var $e = $(e.currentTarget).closest('.filter');
    var filter = $e.data('filter');

    App.TodoRouter.navigate('#/' + filter, { trigger: true });
  },

  render: function() {
    var active_filter = App.filter || 'all';
    var $filter_el;

    this.$el.html(this.template(App.Todos.getFilters()));
    $filter_el = $('[data-filter="' + active_filter + '"]');
    $filter_el.addClass('selected');
  },

  initialize: function() {
    this.listenTo(App.Todos, 'filter', this.render);
    this.listenTo(App.Todos, 'change', this.render);
    this.render();
  }
});
