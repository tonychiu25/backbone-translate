define([
  'backbone',
  'collection',
  'views/root',
  'views/todo-list/index'
], function (Backbone, Collection, RootView, TodoListIndexView) {
    return Backbone.Router.extend({
        routes: {
            "": "index"
        },
        index: function () {
            var collection = new Collection([{
                title: 'First Todo',
                done: true
            }]);

            var rambo = "Rambo";

            var view = new TodoListIndexView({
                collection: collection,
                rambo: "Rambo"
            });
            RootView.getInstance().setView(view);
        }
    });
});