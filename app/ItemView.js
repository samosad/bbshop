/**
 * Created with JetBrains PhpStorm.
 * User: tabakman_ap
 * Date: 12.11.13
 * Time: 9:42
 * To change this template use File | Settings | File Templates.
 */
var app = app || {};

(function(){
    app.ItemView = Backbone.View.extend({
        tagName: 'tr',
        className: '',
        model: new app.ItemModel(),

        events: {
            "click .incValue": 'incValue',
            "click .decValue": 'decValue'
        },

        initialize: function () {
            this.template = _.template($('#itemView').html());

            this.listenTo(this.model, "change", this.render);
            this.listenTo(this.model, "destroy", this.remove);
        },

        render: function () {
            var json = this.model.toJSON();
            var html = this.template(json);
            this.$el.html(html);
            return this.el;
        },

        incValue: function() {
            this.model.set('value', this.model.get('value') + 1);
        },

        decValue: function() {
            if (this.model.get('value') === 1) {
                this.model.destroy();
            } else {
                this.model.set('value', this.model.get('value') - 1);      
            }
        }
    });
})();
