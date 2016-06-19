var ApplicationView = Backbone.View.extend({
  $sidebar: $('aside'),
  $main: $('main'),

  sidebar_template: App.templates.sidebar,
  list_template: App.templates.list,

  render: function() {

  },

  initialize: function() {
    this.render();
  }
});
