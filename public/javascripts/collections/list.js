var List = Backbone.Collection.extend({
  model: App.Todo,
  localStorage: new Backbone.LocalStorage('todos'),

  comparator: function(a, b) {
    return a.get('due_date') - b.get('due_date');
  },

  getFilters: function() {
    var filters = {};

    this.each(function(todo) {
      var month = todo.getMonth();
      var year = todo.getYear();
      var completed = todo.get('completed');
      var key = '' + month + '_' + year;
      if (completed) { key += '_c'; }

      if (!_(filters).has(key)) {
        var new_filter = {
          label: key.replace('_', '/'),
          due_month: month,
          due_year: year,
          completed: completed,
          count: 1
        };

        filters[key] = new_filter;
      }
      else {
        filters[key].count += 1;
      }
    });

    filters.all = {
      label: 'All Todos',
      count: this.select(function(todo) { return !todo.get('completed'); }).length
    };

    filters.all_c = {
      label: 'Completed',
      completed: true
    };

    return filters;
  }
});

App.Todos = new List();
