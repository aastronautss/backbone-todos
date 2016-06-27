var List = Backbone.Collection.extend({
  model: App.Todo,
  localStorage: new Backbone.LocalStorage('todos'),

  comparator: function(a, b) {
    return a.get('due_date') - b.get('due_date');
  },

  getFilters: function() {
    var filters = { complete: {}, incomplete: {} };
    this.each(function(todo) {
      var complete = todo.get('completed') ? 'complete' : 'incomplete';
      var month = todo.getMonth();
      var year = todo.getYear();
      var month_due = '' + month + '_' + year;
      var filter_group = filters[complete];

      if(!_(filter_group).has(month_due)) {
        var new_filter = {
          label: month_due.replace('_', '/'),
          month: month,
          year: year,
          count: 1
        };

        filter_group[month_due] = new_filter;
      }
      else {
        filter_group[month_due].count += 1;
      }
    });

    filters.all = {
      label: 'All Todos',
      count: this.reduce(function(a, b) { return a + b; }, 0)
    };

    filters.all_completed = {
      label: 'Completed'
    };

    return filters;
  }
});

App.Todos = new List();
