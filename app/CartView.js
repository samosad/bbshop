/**
 * Created with JetBrains PhpStorm.
 * User: tabakman_ap
 * Date: 12.11.13
 * Time: 9:42
 * To change this template use File | Settings | File Templates.
 */
var app = app || {};

(function(){
    app.CartView = Backbone.View.extend({
        tagName: 'div',
        className: 'cart',

        currentVersion: "1",

        events: {
            "click .addItem": "addItemToCollection",
            "click .clearAll": "clearAll"
        },

        initialize: function() {
            this.template = _.template($('#cartView').html());
            var view = this.template();
            this.$el.html(view);
            this.collection = new app.ItemsCollection();
            this.listenTo(this.collection, "all", this.render);
//            this.listenTo(this.collection, "add", this.addItemToView);
        },

        render: function () {
            this.$('.itemsList').html('');
            this.collection.each(this.addItemToView);

            var totalValue = this.collection.reduce(function(memo, item) {
                return memo + item.get('value');
            }, 0);
            this.$('.itemsTotalValue').text(totalValue);

            var totalPrice = this.collection.reduce(function(memo, item) {
                return memo + (item.get('price') * item.get('value'));
            }, 0);
            this.$('.itemsTotalPrice').text(totalPrice);

            return this.el;
        },

        addItemToCollection: function() {
            this.collection.add(new app.ItemModel({
                name: 'iPhone ' + this.currentVersion,
                price: Math.floor(Math.random()*100)
            }));
            if(this.currentVersion.search('s') === -1 ) {
                this.currentVersion += 's';
            } else {
                this.currentVersion = (parseInt(this.currentVersion) + 1).toString();
            }
        },

        addItemToView: function(item) {
            var itemView = new app.ItemView({ model: item });
            this.$('.itemsList').append(itemView.render());
        },

        clearAll: function() {
            this.collection.reset();
        }
    });
})();
