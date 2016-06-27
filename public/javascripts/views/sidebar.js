App.SidebarView = Backbone.View.extend({
  el: 'aside',
  template: App.templates.sidebar,

  render: function() {
    this.$el.html(this.template(App.Todos.getFilters()));
  },

  initialize: function() {
    this.render();
  }
});
