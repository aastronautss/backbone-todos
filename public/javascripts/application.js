var App = {
  templates: JST,

  getFormObject: function($f) {
    var o = {};

    $f.serializeArray().forEach(function(input) {
      o[input.name] = input.value;
    });

    return o;
  }
};

Handlebars.registerHelper('getMonth', function(date_number) {
  return new Date(date_number).getMonth() + 1;
});

Handlebars.registerHelper('getDay', function(date_number) {
  return new Date(date_number).getDate();
});

Handlebars.registerHelper('getYear', function(date_number) {
  return new Date(date_number).getFullYear();
});
