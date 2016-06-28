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
      var label_name = '' + month + '_' + year;
      var filter_group = filters[complete];

      if (!_(filter_group).has(label_name)) {
        var new_filter = {
          label: label_name.replace('_', '/'),
          month: month,
          year: year,
          count: 1
        };

        if (complete === 'complete') { label_name = label_name + "_c"; }

        filter_group[label_name] = new_filter;
      }
      else {
        filter_group[label_name].count += 1;
      }
    });

    filters.all = {
      label: 'All Todos',
      count: this.select(function(todo) { return !todo.get('completed'); }).length
    };

    filters.all_c = {
      label: 'Completed'
    };

    return filters;
  }
});

App.Todos = new List();
