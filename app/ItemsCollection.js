/**
 * Created with JetBrains PhpStorm.
 * User: tabakman_ap
 * Date: 11.11.13
 * Time: 17:36
 * To change this template use File | Settings | File Templates.
 */
var app = app || {};

(function(){
    app.ItemsCollection = Backbone.Collection.extend({
        model: app.ItemModel
    });
})();
