var TodoView = Backbone.View.extend({
  tagName: 'li'
  template: App.templates.todo,

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  initialize: function() {
    this.render();
  }
});
