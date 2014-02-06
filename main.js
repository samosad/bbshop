/**
 * Created with JetBrains PhpStorm.
 * User: tabakman_ap
 * Date: 11.11.13
 * Time: 16:45
 * To change this template use File | Settings | File Templates.
 */
var app = app || {};

$(function() {

    var item1 = new app.ItemModel({
        name: "iPhone 5s",
        price: 35000
    });

    app.cartView = new app.CartView();

    $('.app_container').html(app.cartView.el);

});
