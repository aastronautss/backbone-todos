this["JST"] = this["JST"] || {};

this["JST"]["sidebar"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"filter\" data-filter=\""
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "<div class=\"badge\">"
    + alias4(((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"count","hash":{},"data":data}) : helper)))
    + "</div></li>";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li class=\"filter\" data-filter=\""
    + alias4(((helper = (helper = helpers.key || (data && data.key)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"key","hash":{},"data":data}) : helper)))
    + "\">"
    + alias4(((helper = (helper = helpers.label || (depth0 != null ? depth0.label : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"label","hash":{},"data":data}) : helper)))
    + "</li>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class=\"lists\"><header class=\"all filter\" data-filter=\"all\"><h2 class=\"all_todos\">All Todos</h2><div class=\"badge\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.all : depth0)) != null ? stack1.count : stack1), depth0))
    + "</div></header><ul>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.incomplete : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div><div class=\"lists\"><header class=\"comp filter\" data-filter=\"all_c\"><h2 class=\"completed\">Completed</h2></header><ul class=\"completed\">"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.complete : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div>";
},"useData":true});

this["JST"]["todo_modal"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"modal\"><form action=\"\" method=\"post\"><fieldset><input type=\"hidden\" name=\"id\" value=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\"><table><tr><th scope=\"row\">Title</th><td><input type=\"text\" name=\"title\" value=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"></td></tr><tr><th scope=\"row\">Due Date</th><td><input type=\"number\" name=\"month\" min=\"1\" max=\"12\" placeholder=\"Month\" value=\""
    + alias4((helpers.getMonth || (depth0 && depth0.getMonth) || alias2).call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"getMonth","hash":{},"data":data}))
    + "\"><!----><div></div><!----><input type=\"number\" name=\"day\" min=\"1\" max=\"31\" placeholder=\"Day\" value=\""
    + alias4((helpers.getDay || (depth0 && depth0.getDay) || alias2).call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"getDay","hash":{},"data":data}))
    + "\"><!----><div></div><!----><input type=\"number\" name=\"year\" min=\"1850\" max=\"2200\" placeholder=\"Year\" value=\""
    + alias4((helpers.getYear || (depth0 && depth0.getYear) || alias2).call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"getYear","hash":{},"data":data}))
    + "\"></td></tr><tr><th scope=\"row\">Description</th><td><textarea name=\"description\" placeholder=\"Description\">"
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea></td></tr><tr><td></td><td><input type=\"submit\" value=\"Save\"><button name=\"mark_complete\" >Mark as Complete</button></td></tr></table></fieldset></form></div>";
},"useData":true});

this["JST"]["todo"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"checkbox\"></div><a href=\"#\" class=\"title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a><span class=\"due-date\"> - Due "
    + alias4(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</span><a href=\"#\" class=\"trash\"></a>";
},"useData":true});