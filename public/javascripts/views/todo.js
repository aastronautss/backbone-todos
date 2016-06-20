App.TodoView = Backbone.View.extend({
  tagName: 'li',
  template: App.templates.todo,
  modal_template: App.templates.todo_modal,

  events: {
    'click .checkbox': 'toggle',
    'click .trash': 'clear',
    'click .title': 'edit'
  },

  toggle: function(e) {
    this.model.toggle();
  },

  clear: function(e) {
    e.preventDefault();
    this.model.destroy();
  },

  edit: function(e) {
    e.preventDefault();
    this.showModal();
  },

  showModal: function() {
    this.$modal = $(this.modal_template(this.model.toJSON())).hide();
    $('main').prepend(this.$modal);
    this.$modal.fadeIn(400);
    this.bindModalEvents();
  },

  bindModalEvents: function() {
    this.$modal.find('form').on('submit', this.saveAttrs.bind(this));
    this.$modal.find('[name="mark_complete"]').on('click', this.modalComplete.bind(this));
  },

  modalComplete: function(e) {
    e.preventDefault();
    this.model.set('completed', true);
    this.closeModal();
  },

  saveAttrs: function(e) {
    e.preventDefault();
    var formData = App.getFormObject($(e.currentTarget));
    var date = new Date(formData.month + '/' + formData.day + '/' + formData.year).getTime();
    var attrs = {
      title: formData.title,
      due_date: date,
      description: formData.description,
      completed: this.model.get('completed')
    };

    this.model.save(attrs);
    this.closeModal();
  },

  closeModal: function() {
    this.$modal.fadeOut(400, function() { $(this).remove(); });
    this.$modal.off();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('done', this.model.get('completed'));
    return this;
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.render();
  }
});
