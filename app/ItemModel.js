/**
 * Created with JetBrains PhpStorm.
 * User: tabakman_ap
 * Date: 11.11.13
 * Time: 17:36
 * To change this template use File | Settings | File Templates.
 */
var app = app || {};

(function(){
    app.ItemModel = Backbone.Model.extend({

        defaults: {
            name: '',
            price: 0,
            value: 1
        },

        validate: function(attrs) {
            if (attrs.value < 1) {
                console.log('incorrect value');
                return 'incorrect value';
            }
        }
    });
})();