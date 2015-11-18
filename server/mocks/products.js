/**
 * Created by Jane on 2015-11-17.
 */
module.exports = function () {
  var urlrouter = require('urlrouter');
  var guid = require('lite-guid');
  var _ = require('underscore');
  var productContainer = require('../data/products');

  return urlrouter(function (router) {

    router.get('/api/products', function (req, res) {
      res.end(JSON.stringify(productContainer.getProducts()));
    });

    router.put('/api/products/:productId', function (req, res) {
      var putData = req.body;
      putData.productId = req.params.productId;
      res.end(JSON.stringify(productContainer.updateProduct(putData)));
    });
  });
};
