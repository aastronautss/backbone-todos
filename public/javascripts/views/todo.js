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

  setVisibility: function() {
    var filter_key = App.filter;
    var hide = !(this.matchFilter(filter_key));

    this.$el.toggleClass('hidden', hide);
  },

  parseFilter: function(filter_key) {
    var filter = {};
    var components = filter_key.split('_');
    if (_(components).last() === 'c') { filter.completed = true; }
    if (_(components).first() === 'all') { return filter; }
    if (_.isNumber(+components[0]) && _.isNumber(+components[1])) {
      filter.due_month = +components[0];
      filter.due_year = +components[1];
    }

    return filter;
  },

  matchFilter: function(filter_key) {
    var match = true;
    var filter = this.parseFilter(filter_key);

    if (filter.completed !== undefined) {
      match = filter.completed === this.model.get('completed');
    }

    if (filter.due_month !== undefined && filter.due_year !== undefined) {
      match = match && (filter.due_month === this.model.getMonth()
                        && filter.due_year === this.model.getYear());
    }

    return match;
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('done', this.model.get('completed'));
    return this;
  },

  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(App.Todos, 'filter', this.setVisibility);
    this.listenTo(App.Todos, 'change', this.setVisibility);

    this.render();
  }
});
