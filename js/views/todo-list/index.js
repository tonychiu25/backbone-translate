define([
  'view',
  'hbs!templates/todo-list/index'
], function (View, template) {

    return View.extend({
        name: "todo-list/index",
        template: template,
        translate: function (language) {

        },
        events: {
            "submit form": function (event) {
                event.preventDefault();
                var attrs = this.serialize();
                this.collection.add(attrs);
                this.$('input[name="title"]').val('');
            },
            'change input[type="checkbox"]': function (event) {
                var model = $(event.target).model();
                var checked = event.target.checked;
                model.set({ done: event.target.checked });
                var language = (checked) ? "en" : "ch";
                var name;

                var json = $.getJSON("locale/translate.json").then(function (result) {
                    name = result["name"][language];
                    model.set({ title: name });
                });
            },

            'click img[id="eng-translate"]': function (event) {
                var model = $(event.target).model();
                var checked = event.target.checked;
                model.set({ done: event.target.checked });
                var language = "en";
                var name;

                var json = $.getJSON("locale/translate.json").then(function (result) {
                    name = result["name"][language];
                    model.set({ title: name });
                });
            },
            'click img[id="ch-translate"]': function (event) {
                var model = $(event.target).model();
                var checked = event.target.checked;
                model.set({ done: event.target.checked });
                var language = "ch";
                var name;

                var json = $.getJSON("locale/translate.json").then(function (result) {
                    name = result["name"][language];
                    model.set({ title: name });
                });
            }
        }
    });
});