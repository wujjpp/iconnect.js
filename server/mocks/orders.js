module.exports = function () {

  var urlrouter = require('urlrouter');
  var guid = require('lite-guid');
  var _ = require('underscore');

  var orderContainer = require('../data/orders');

  return urlrouter(function (router) {
    router.get('/api/orders', function (req, res) {
      res.end(JSON.stringify(orderContainer.getOrders()));
    });

    router.delete('/api/orders/:orderId', function (req, res) {
      orderContainer.deleteOrder(req.params.orderId);
      res.end();
    });
  });
};
